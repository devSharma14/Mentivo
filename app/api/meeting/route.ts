import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// POST request a meeting
export async function POST(req: NextRequest) {
    try {
        const session = await auth()

        if (!session?.user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            )
        }

        const body = await req.json()
        const { mentorId } = body

        if (!mentorId) {
            return NextResponse.json(
                { error: "mentorId is required" },
                { status: 400 }
            )
        }

        // mentor should exist and should be available and verified
        const mentor = await prisma.mentorProfile.findUnique({
            where: { id: mentorId },
        })

        if (!mentor || !mentor.isAvailable || !mentor.isVerified) {
            return NextResponse.json(
                { error: "Mentor not available" },
                { status: 400 }
            )
        }

        if (mentor.userId === session.user.id) {
            return NextResponse.json(
                { error: "You cannot request a meeting with yourself" },
                { status: 400 }
            )
        }

        // check if there's already a pending request or already scheduled
        const existingRequest = await prisma.meetingRequest.findFirst({
            where: {
                requesterId: session.user.id,
                mentorId: mentorId,
                status: { in: ["PENDING", "SCHEDULED"] },
            },
        })

        if (existingRequest) {
            return NextResponse.json(
                { error: "You already have a pending request with this mentor" },
                { status: 400 }
            )
        }

        const meeting = await prisma.meetingRequest.create({
            data: {
                requesterId: session.user.id,
                mentorId: mentorId,
                status: "PENDING",
            },
        })

        return NextResponse.json(meeting, { status: 201 })
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create meeting request" },
            { status: 500 }
        )
    }
}