import { useEffect, type RefObject } from "react";

/**
 * Calls `onOutsideClick` whenever a mousedown event fires outside the
 * element referenced by `ref`.
 */
export function useClickOutside(
    ref: RefObject<HTMLElement | null>,
    onOutsideClick: () => void,
) {
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onOutsideClick();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref, onOutsideClick]);
}
