"use client";

import React, { useState, useRef, useCallback } from "react";
import CoreButton from "@/components/ui/CoreButton";
import { ALL_SKILLS } from "./constants";
import { useClickOutside } from "@/hooks/useClickOutside";

interface SkillPickerProps {
    selectedSkills: string[];
    onAdd: (skill: string) => void;
    onRemove: (skill: string) => void;
}

export default function SkillPicker({
    selectedSkills,
    onAdd,
    onRemove,
}: SkillPickerProps) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [search, setSearch] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const closeDropdown = useCallback(() => {
        setShowDropdown(false);
        setSearch("");
    }, []);

    useClickOutside(dropdownRef, closeDropdown);

    const filteredSkills = ALL_SKILLS.filter(
        (s) =>
            s.toLowerCase().includes(search.toLowerCase()) &&
            !selectedSkills.includes(s),
    );

    function addSkill(skill: string) {
        onAdd(skill);
        setSearch("");
    }

    return (
        <div>
            <label className="text-xs md:text-lg uppercase font-bold tracking-wider text-white/60">
                Expertise Areas
            </label>

            {/* Selected skill tags */}
            <div className="mt-3 flex flex-wrap gap-2">
                {selectedSkills.map((skill) => (
                    <CoreButton key={skill} size="sm">
                        {skill}
                        <span
                            onClick={(e) => {
                                e.stopPropagation();
                                onRemove(skill);
                            }}
                            className="ml-2 hover:opacity-70 transition cursor-pointer"
                        >
                            ✕
                        </span>
                    </CoreButton>
                ))}

                {/* Add skill button + dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <CoreButton
                        size="md"
                        onClick={() => setShowDropdown((prev) => !prev)}
                        className="cursor-pointer"
                    >
                        + Add Skill
                    </CoreButton>

                    {showDropdown && (
                        <div className="absolute top-8 left-0 z-50 w-64 rounded-xl bg-[#1C2230] border border-white/10 shadow-xl overflow-hidden">
                            {/* Search input */}
                            <div className="p-2 border-b border-white/5">
                                <input
                                    autoFocus
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search skills..."
                                    className="w-full bg-[#151821] text-white text-sm px-3 py-2 rounded-lg placeholder:text-white/30 focus:outline-none border border-white/5 focus:border-white/20 transition"
                                />
                            </div>

                            {/* Skills list */}
                            <div className="max-h-52 overflow-y-auto">
                                {filteredSkills.length > 0 ? (
                                    filteredSkills.map((skill) => (
                                        <button
                                            key={skill}
                                            type="button"
                                            onClick={() => addSkill(skill)}
                                            className="w-full text-left px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition"
                                        >
                                            {skill}
                                        </button>
                                    ))
                                ) : (
                                    <p className="px-4 py-3 text-sm text-white/30">
                                        No skills found
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
