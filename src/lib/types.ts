import type gsap from "gsap";

export interface TlCardHandle {
  animate: () => gsap.core.Timeline;
  element: HTMLDivElement | null;
}

export interface OrangeRectHandle {
  animate: () => gsap.core.Tween;
}
