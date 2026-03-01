import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma"

// POST register as mentor
export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const body = await req.json();
        const { bio, experience, expertise, linkedIn, twitter } = body;

        if (!bio || !experience || !expertise) {
            return NextResponse.json(
                { error: "bio, experience and expertise are required" },
                { status: 400 }
            );
        }

        const existing = await prisma.mentorProfile.findUnique({
            where: { userId: session.user.id },
        });

        if (existing) {
            return NextResponse.json(
                { error: "Mentor profile already exists" },
                { status: 400 }
            );
        }

        const mentorProfile = await prisma.mentorProfile.create({
            data: {
                userId: session.user.id,
                bio,
                experience,
                expertise,
                linkedIn: linkedIn || null,
                twitter: twitter || null,
            },
        });

        // update user role to MENTOR
        await prisma.user.update({
            where: { id: session.user.id },
            data: { role: "MENTOR" },
        });

        return NextResponse.json(mentorProfile, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create mentor profile" },
            { status: 500 }
        );
    }
}

// GET all verified mentors
export async function GET() {
    try {
        const mentors = await prisma.mentorProfile.findMany({
            where: {
                isVerified: true,
                isAvailable: true,
            },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true,
                        image: true,
                    },
                },
            },
        })

        return NextResponse.json(mentors, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch mentors" },
            { status: 500 }
        )
    }
}