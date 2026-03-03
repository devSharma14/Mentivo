"use client";

import React, { useState } from "react";
import CoreButton from "@/components/ui/CoreButton";
import { FormTextarea, FormInput } from "./FormField";
import SkillPicker from "./SkillPicker";

export default function BecomeMentorForm() {
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    function addSkill(skill: string) {
        setSelectedSkills((prev) => [...prev, skill]);
    }

    function removeSkill(skill: string) {
        setSelectedSkills((prev) => prev.filter((s) => s !== skill));
    }

    return (
        <div className="w-full max-w-3xl">
            <div className="relative rounded-2xl border border-white/5 bg-gradient-to-br from-[#111318] to-[#0E1014] p-6 md:p-8 overflow-hidden">
                <div className="space-y-6">

                    {/* BIO */}
                    <FormTextarea
                        label="Bio"
                        placeholder="Who are you? Your role, field, and what you're good at."
                    />

                    {/* PROFESSIONAL EXPERIENCE */}
                    <FormTextarea
                        label="Professional Experience"
                        placeholder="Where have you worked or what have you built? Companies, projects, achievements."
                    />

                    {/* EXPERTISE */}
                    <SkillPicker
                        selectedSkills={selectedSkills}
                        onAdd={addSkill}
                        onRemove={removeSkill}
                    />

                    {/* SOCIAL LINKS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormInput
                            label="LinkedIn URL"
                            placeholder="linkedin.com/in/username"
                        />
                        <FormInput
                            label="Twitter URL"
                            placeholder="twitter.com/username"
                        />
                    </div>

                    {/* SUBMIT */}
                    <div className="pt-4">
                        <CoreButton size="lg" className="cursor-pointer">
                            Create Profile
                        </CoreButton>
                    </div>

                </div>
            </div>
        </div>
    );
}