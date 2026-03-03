import React from "react";

const LABEL_CLASS =
    "text-xs md:text-lg uppercase font-bold tracking-wider text-white/60";
const INPUT_CLASS =
    "mt-2 w-full rounded-xl bg-[#151821] border border-white/5 px-4 py-3 text-sm md:text-xl text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition";

/* ─── Textarea ─────────────────────────────────────── */

interface FormTextareaProps {
    label: string;
    placeholder: string;
    rows?: number;
}

export function FormTextarea({ label, placeholder, rows = 4 }: FormTextareaProps) {
    return (
        <div>
            <label className={LABEL_CLASS}>{label}</label>
            <textarea
                placeholder={placeholder}
                rows={rows}
                className={INPUT_CLASS}
            />
        </div>
    );
}

/* ─── Text Input ───────────────────────────────────── */

interface FormInputProps {
    label: string;
    placeholder: string;
}

export function FormInput({ label, placeholder }: FormInputProps) {
    return (
        <div>
            <label className={LABEL_CLASS}>{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                className={INPUT_CLASS}
            />
        </div>
    );
}
