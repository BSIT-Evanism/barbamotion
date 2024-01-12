import { atom } from "nanostores";

export type Toggle = boolean;
export type Route = '/' | '/about' | '/contact';
export type Hover = 'none' | 'navbar' | 'footer' | 'link' | 'button' | 'accept';
export type Marquee = string | string[];

export const toggle = atom<Toggle>(false);
export const viewToggle = atom<Toggle>(false);
export const routeName = atom<Route>('/');
export const hoverValue = atom<Hover>('none');
export const transitionState = atom<'enter' | 'exit' | 'none'>('none');
export const marqueeState = atom<Marquee>('none');

export function handleViewToggle(b: boolean): void {
    viewToggle.set(b);
    if (b) {
        toggle.set(false);
    }
}

export function handleHover(a: Hover): void {
    hoverValue.set(a);
}

export function handleChangeRoute(a: Route): void {
    routeName.set(a)
}

export function handleToggle(a: boolean): void {
    toggle.set(!toggle.get());
}

export function handleTransition(): void {
    transitionState.set('exit')
    console.log(transitionState.get())
}

export function handleMarquee(a: Marquee): void {
    marqueeState.set(a)
    console.log(marqueeState.get())
}
