import { atom } from "nanostores";

export type Toggle = boolean;

export const toggle = atom<Toggle>(false);
export const viewToggle = atom<Toggle>(false);

export function handleViewToggle(b: boolean): void {
    viewToggle.set(b);
    console.log(b)
}

export function handleToggle(a: boolean): void {
    toggle.set(!toggle.get());
}