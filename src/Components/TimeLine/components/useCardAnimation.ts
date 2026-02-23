import { gsap } from "@/lib/gsap";
import type { RefObject } from "react";
import type { OrangeRectHandle } from "@/lib/types";

interface BuildCardTimelineOptions {
  cardRef: RefObject<HTMLDivElement | null>;
  statsImgRef: RefObject<HTMLImageElement | null>;
  orangeRectRef1: RefObject<OrangeRectHandle | null>;
  orangeRectRef2: RefObject<OrangeRectHandle | null>;
  infoClassName: string;
  delay?: number;
  labelOffset?: string | number;
}

// builds shared entrance timeline for each timeline card
export function buildCardTimeline({
  cardRef,
  statsImgRef,
  orangeRectRef1,
  orangeRectRef2,
  infoClassName,
  delay = 0,
  labelOffset,
}: BuildCardTimelineOptions): gsap.core.Timeline {
  const card = cardRef.current;
  const tl = gsap.timeline({ delay });

  const infoEl = card?.querySelector(infoClassName);
  const textEls = card?.querySelectorAll(".tl-card-text");
  const statsEls = card?.querySelectorAll(".stats");

  if (textEls && textEls.length > 0) {
    gsap.set(textEls, { opacity: 0, y: 24 });
    tl.to(
      textEls,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.08,
        ease: "power2.out",
      },
      0,
    );
  }

  if (statsEls && statsEls.length > 0) {
    gsap.set(statsEls, { opacity: 0 });
    tl.to(
      statsEls,
      {
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power1.out",
      },
      0.4,
    );
  }

  if (statsImgRef.current) {
    gsap.set(statsImgRef.current, { opacity: 0 });
    tl.to(
      statsImgRef.current,
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      0.3,
    );
  }

  if (orangeRectRef1.current) {
    tl.add(orangeRectRef1.current.animate(), 0.6);
  }
  if (orangeRectRef2.current) {
    tl.add(orangeRectRef2.current.animate(), 0.9);
  }

  if (infoEl) {
    gsap.set(infoEl, {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    });

    const infoPos = labelOffset !== undefined ? labelOffset : 0.2;

    tl.to(
      infoEl,
      {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        duration: 1.4,
        ease: "power2.inOut",
      },
      infoPos,
    );
  }

  return tl;
}
