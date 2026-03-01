import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"

// GET single mentor by id]
export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const mentor = await prisma.mentorProfile.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true,
                        image: true,
                    },
                },
                receivedRequests: {
                    where: { status: "COMPLETED" },
                    include: {
                        review: true,
                    },
                },
            },
        })

        if (!mentor) {
            return NextResponse.json(
                { error: "Mentor not found" },
                { status: 404 }
            )
        }

        return NextResponse.json(mentor, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch mentor" },
            { status: 500 }
        )
    }
}