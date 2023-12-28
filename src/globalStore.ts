import { atom } from "nanostores";

export const toggle: boolean = atom(false);

export function handleToggle(): void {
    toggle.set(!toggle.get());
}