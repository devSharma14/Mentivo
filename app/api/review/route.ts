import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// POST submit a review
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
        const { meetingId, rating, comment } = body

        if (!meetingId || !rating) {
            return NextResponse.json(
                { error: "meetingId and rating are required" },
                { status: 400 }
            )
        }

        if (!Number.isInteger(rating)) {
            return NextResponse.json(
                { error: "Rating must be an integer" },
                { status: 400 }
            )
        }

        if (rating < 1 || rating > 5) {
            return NextResponse.json(
                { error: "Rating must be between 1 and 5" },
                { status: 400 }
            )
        }

        // check meeting exists and is completed
        const meeting = await prisma.meetingRequest.findUnique({
            where: { id: meetingId },
        })

        if (!meeting || meeting.status !== "COMPLETED") {
            return NextResponse.json(
                { error: "Meeting not found or not completed yet" },
                { status: 400 }
            )
        }

        // only the person who requested the meeting can review
        if (meeting.requesterId !== session.user.id) {
            return NextResponse.json(
                { error: "Forbidden" },
                { status: 403 }
            )
        }

        // check review doesn't already exist
        const existingReview = await prisma.review.findUnique({
            where: { meetingId },
        })

        if (existingReview) {
            return NextResponse.json(
                { error: "Review already submitted" },
                { status: 400 }
            )
        }

        // create review
        const review = await prisma.review.create({
            data: {
                meetingId,
                reviewerId: session.user.id,
                rating,
                comment: comment || null,
            },
        })

        // recalculate mentor average rating
        const allReviews = await prisma.review.findMany({
            where: {
                meeting: {
                    mentorId: meeting.mentorId,
                },
            },
            select: { rating: true },
        })

        const avg =
            allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length

        await prisma.mentorProfile.update({
            where: { id: meeting.mentorId },
            data: { averageRating: avg },
        })

        return NextResponse.json(review, { status: 201 })
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to submit review" },
            { status: 500 }
        )
    }
}