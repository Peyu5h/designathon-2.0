import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TlCard1 from "./timelineComponents/TlCard1";
import type { TlCardHandle } from "./timelineComponents/TlCard1";
import TlCard2 from "./timelineComponents/TlCard2";
import TlCard3 from "./timelineComponents/TlCard3";
import TlCard4 from "./timelineComponents/TlCard4";
import TlCard5 from "./timelineComponents/TlCard5";
import TlCard6 from "./timelineComponents/TlCard6";
import Venue from "./timelineComponents/Venue";

gsap.registerPlugin(ScrollTrigger);

const TimeLine = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardOneRef = useRef<TlCardHandle>(null);
  const cardTwoRef = useRef<TlCardHandle>(null);
  const cardThreeRef = useRef<TlCardHandle>(null);
  const cardFourRef = useRef<TlCardHandle>(null);
  const cardFiveRef = useRef<TlCardHandle>(null);
  const cardSixRef = useRef<TlCardHandle>(null);

  useGSAP(() => {
    const horizontalScrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=4000",
        scrub: 0.6,
        pin: true,
      }
    })
    horizontalScrollTl
      .to(sectionRef.current, {
        x: 0,
        duration: 1
      })
      .to(sectionRef.current, {
        x: "-400vw",
        ease: "none",
        duration: 7
      })

    if (cardOneRef.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: cardOneRef.current.element,
          start: "top 60%",
          end: "bottom+=200 bottom",
          scrub: true,
        },
      }).add(cardOneRef.current.animate())
    }
    [cardTwoRef, cardThreeRef].forEach((ref) => {
      if (ref.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: ref.current.element,
            containerAnimation: horizontalScrollTl,
            start: "center 60%",
            end: "bottom+=200 center",
            scrub: true,
          },
        }).add(ref.current.animate());
      }
    });
    [cardFourRef, cardFiveRef, cardSixRef].forEach((ref) => {
      if (ref.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: ref.current.element,
            containerAnimation: horizontalScrollTl,
            start: "top 60%",
            end: "bottom+=200 60%",
            scrub: true,
          },
        }).add(ref.current.animate());
      }
    });

  });

  return (
    <section className="overflow-hidden bg-background">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[500vw] flex flex-row relative">
          <img
            src="images/timeline/timelinePath.svg"
            alt="timeline path"
            className="w-[450vw] h-full"
          />
          <div className="absolute inset-0 w-full h-dvh">
            <div className="flex gap-18 size-full">
              <div className="h-full w-[70vw]"><TlCard1 ref={cardOneRef} /></div>
              <div className="h-full w-[70vw]"><TlCard2 ref={cardTwoRef} /></div>
              <div className="h-full w-[70vw]"><TlCard3 ref={cardThreeRef} /></div>
              <div className="h-full w-[70vw]"><TlCard4 ref={cardFourRef} /></div>
              <div className="h-full w-[70vw]"><TlCard5 ref={cardFiveRef} /></div>
              <div className="h-full w-[70vw]"><TlCard6 ref={cardSixRef} /></div>
            </div>
            <div className="h-full w-[70vw]"><Venue /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;