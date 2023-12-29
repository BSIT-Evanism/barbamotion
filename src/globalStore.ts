import { atom } from "nanostores";

export const toggle: boolean = atom(false);

export const viewToggle: boolean = atom(false);

export function handleViewToggle(b: boolean): void {
    viewToggle.set(b);
    console.log(b)
}

export function handleToggle(): void {
    toggle.set(!toggle.get());
}