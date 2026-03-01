import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// ACCEPT/ CANCEL request (only mentor can do this)

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const session = await auth();

        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { status, meetingLink, scheduledAt } = body;

        // only these status transitions are allowed
        if (!["SCHEDULED", "CANCELLED", "COMPLETED"].includes(status)) {
            return NextResponse.json({ error: "Invalid status" }, { status: 400 });
        }

        // fetch the meeting including mentor
        const meeting = await prisma.meetingRequest.findUnique({
            where: { id },
            include: { mentor: true }, // include mentor relation
        });

        if (!meeting) {
            return NextResponse.json({ error: "Meeting not found" }, { status: 404 });
        }

        // only the mentor of this meeting can update it
        if (meeting.mentor.userId !== session.user.id) {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        // update the meeting
        const updated = await prisma.meetingRequest.update({
            where: { id },
            data: {
                status,
                meetingLink: meetingLink || null,
                scheduledAt: scheduledAt ? new Date(scheduledAt) : null,
            },
        });

        // if the meeting is done OR it was cancelled earlier
        if (meeting.status === "COMPLETED" || meeting.status === "CANCELLED") {
            return NextResponse.json(
                { error: "Meeting is already closed" },
                { status: 400 }
            )
        }

        // if completed, increment mentor total meetings
        if (status === "COMPLETED") {
            await prisma.mentorProfile.update({
                where: { id: meeting.mentorId },
                data: { totalMeetings: { increment: 1 } },
            });
        }

        return NextResponse.json(updated, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to update meeting" }, { status: 500 });
    }
}