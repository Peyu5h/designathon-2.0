import { useRef, forwardRef, useImperativeHandle } from "react";
import { assets } from "@/lib/assets";
import type { TlCardHandle, OrangeRectHandle } from "@/lib/types";
import { buildCardTimeline } from "./useCardAnimation";
import OrangeRect from "./OrangeRect";

const TlCard4 = forwardRef<TlCardHandle>((_props, ref) => {
  const tlCardRef = useRef<HTMLDivElement>(null);
  const statsImgRef = useRef<HTMLImageElement>(null);
  const orangeRectRef1 = useRef<OrangeRectHandle>(null);
  const orangeRectRef2 = useRef<OrangeRectHandle>(null);

  useImperativeHandle(ref, () => ({
    animate: () =>
      buildCardTimeline({
        cardRef: tlCardRef,
        statsImgRef,
        orangeRectRef1,
        orangeRectRef2,
        infoClassName: ".tl-card4-info",
        labelOffset: "same",
      }),
    element: tlCardRef.current,
  }));

  return (
    <div ref={tlCardRef} className="relative mx-auto max-w-[60vw] h-full">
      <div className="h-[80vh] w-full flex flex-col items-center mt-6">
        <div className="z-10 text-center">
          <h2
            style={{ clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)" }}
            className="tl-card4-info text-[4em] tracking-tight leading-16"
          >
            ROUND ONE <span className="text-2xl">[online]</span>
          </h2>
        </div>

        <div className="z-10 grid grid-cols-4 flex-1 items-center text-center relative">
          <img
            src={assets.timeline.galaxy4}
            alt="galaxy"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 m-auto h-140 w-140 object-contain pointer-events-none"
          />
          <div className="flex flex-col justify-center items-center gap-24 col-span-1">
            <div className="flex gap-2">
              <p className="stats text-xs">Luminosity: 2.6 × 10¹⁰ L☉</p>
              <OrangeRect
                fill="#f27c06"
                ref={orangeRectRef1}
                className="h-4 w-4"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <p className="stats text-xs">
                Magnitude: u:18.65 g:17.86 r:17.51 <br />
                Redshift: z = 0.103
              </p>
              <OrangeRect
                fill="#f27c06"
                ref={orangeRectRef2}
                className="h-6 w-6"
              />
            </div>
          </div>
          <div className="col-span-1" />
          <div className="flex justify-center h-full pt-14 items-end pb-10 col-span-1">
            <p className="stats text-[10px]">Rotation Curve: ??? km/s peak</p>
          </div>
          <img
            src={assets.timeline.galaxy4Details}
            ref={statsImgRef}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-50 col-span-1"
          />
        </div>

        <div className="z-10 text-center flex flex-col items-center row-span-1">
          <div className="flex justify-center items-start gap-2">
            <h1 className="tl-card-text text-[6.2em] tracking-tighter leading-20">
              16
            </h1>
            <p className="tl-card-text text-3xl mt-3">th</p>
            <h1 className="tl-card-text text-[6.2em] tracking-tighter leading-20">
              -17
            </h1>
            <p className="tl-card-text text-3xl mt-3">th</p>
          </div>
          <h2 className="tl-card-text text-[1.6em] tracking-[0.3em]">
            FEBRUARY
          </h2>
        </div>
      </div>
    </div>
  );
});

export default TlCard4;
