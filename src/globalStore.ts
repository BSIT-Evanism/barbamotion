import { atom } from "nanostores";

export type Route = '/' | '/about' | '/contact' | '/projects' | '/blog';
export type Marquee = string | string[];

export const routeName = atom<Route>('/');
export const marqueeState = atom<Marquee>('none');

export function handleChangeRoute(a: Route): void {
    routeName.set(a)
}

export function handleMarquee(a: Marquee): void {
    marqueeState.set(a)
}
