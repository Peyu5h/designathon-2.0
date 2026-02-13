import gsap from "gsap";
import { useRef, forwardRef, useImperativeHandle } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OrangeRect from "./OrangeRect";
import type { OrangeRectHandle } from "./OrangeRect";

gsap.registerPlugin(ScrollTrigger);

export interface TlCardHandle {
    animate: () => gsap.core.Timeline;
    element: HTMLDivElement | null;
}
const TlCard5 = forwardRef<TlCardHandle>((_props, ref) => {
    const tlCardRef = useRef<HTMLDivElement>(null);
    const statsImgRef = useRef<HTMLImageElement>(null);
    const orangeRectRef1 = useRef<OrangeRectHandle>(null);
    const orangeRectRef2 = useRef<OrangeRectHandle>(null);
    useImperativeHandle(ref, () => ({
        animate: () => {
            const q = gsap.utils.selector(tlCardRef);
            const textArray = q(".tl-card-text");
            const statsArray = q(".stats");

            const cardTl = gsap.timeline({
                defaults: { ease: "power1.inOut", duration: 1 },
            });

            return cardTl
                .from(textArray, { y: 50, opacity: 0, stagger: 0.2 })
                .from(".tl-card5-info", { clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" })
                .from(statsArray, { y: 30, opacity: 0, stagger: 0.2 }, "same-=0.5")
                .from(statsImgRef.current, { scale: 0.8, opacity: 0 }, "same-=0.5")
                .add(orangeRectRef1.current!.animate(), "same-=0.5")
                .add(orangeRectRef2.current!.animate(), "same-=0.5")
        },
        element: tlCardRef.current
    }))


    return (
        <div
            ref={tlCardRef}
            className="relative max-w-[60vw] max-h-full pt-34">
            <img src="images/timeline/rectangle.svg" alt="" className="h-6 w-6 mx-auto mt-2" />
            
            <div className="h-[80vh] w-full flex flex-col items-center gap-10 mt-2">
                <div className="z-10 text-center flex flex-col items-center row-span-1">
                    <div className="flex justify-center items-start gap-2">
                        <h1 className="tl-card-text text-[6.2em] tracking-tighter leading-20">
                            20
                        </h1>
                        <p className="tl-card-text text-3xl mt-3">th</p>
                    </div>
                    <h2 className="tl-card-text text-[1.6em] tracking-[0.3em]">
                        MARCH
                    </h2>
                </div>

                {/* ========== LAYER 2 — STATS GRID ========== */}
                <div className="z-10 grid grid-cols-4  flex-1 items-center text-center  relative ">
                    <img
                        src="images/timeline/galaxy_5.avif"
                        alt="galaxy"
                        className="absolute  inset-0 m-auto  h-110 w-110 object-contain pointer-events-none "
                    />
                    <div className="flex flex-col justify-center items-center gap-24 col-span-2 ">
                        <div className="flex">
                            <p className="stats text-xs">
                                Luminosity: 2.6 × 10¹⁰ L☉
                            </p>
                            <OrangeRect fill="#f27c06" ref={orangeRectRef1} className="h-4 w-4" />
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            <p className="stats text-xs">
                                Magnitude: u:18.65 g:17.86 r:17.51 <br />
                                Redshift: z = 0.103
                            </p>
                            <OrangeRect fill="#f27c06" ref={orangeRectRef2} className="h-6 w-6" />
                        </div>
                    </div>

                    <div className="flex justify-center h-full pt-14  items-center col-span-1">
                        <p className="stats text-[10px]">
                            Rotation Curve: ??? km/s peak
                        </p>
                    </div>
                    <img
                        src="images/timeline/galaxy_5_details.svg"
                        ref={statsImgRef}
                        alt=""
                        className=" w-50 col-span-1"
                    />
                </div>

                <div className="z-10 text-center flex-1">
                    <h2
                      style={{ clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)" }}
                    className="tl-card5-info text-[4em] tracking-tight leading-16">
                        FINALISTS <br /> ANNOUNCED
                    </h2>
                </div>
            </div>
        </div>
    );
});

export default TlCard5;
