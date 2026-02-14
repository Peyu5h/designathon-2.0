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
const TlCard3 = forwardRef<TlCardHandle>((_props, ref) => {
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
        .from(".tl-card3-info", { clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)"  })
        .from(statsArray, { y: 30, opacity: 0, stagger: 0.2 }, "same+=0.5")
        .from(statsImgRef.current, { scale: 0.8, opacity: 0 }, "same+=0.5")
        .add(orangeRectRef1.current!.animate(), "same+=0.5")
        .add(orangeRectRef2.current!.animate(), "same+=0.5")
        },
        element: tlCardRef.current
    }))

    return (
        <div
            ref={tlCardRef}
            className="relative max-w-[60vw] mx-auto max-h-full pt-[22vh]">
            {/* <img src="images/timeline/rectangle.svg" alt="idk man" className="h-6 w-6 mx-auto my-2" /> */}
            <div className="h-[80vh] w-full flex flex-col items-center">
                <div className="z-10 text-center flex flex-col items-center">
                    <div className="flex justify-center items-start gap-2">
                        <h1 className="tl-card-text text-[6.2em] tracking-tighter leading-20">
                            14
                        </h1>
                        <p className="tl-card-text text-3xl mt-3">th</p>
                    </div>
                    <h2 className="tl-card-text text-[1.6em] tracking-[0.3em]">
                        MARCH
                    </h2>
                </div>

                <div className="z-10 grid grid-cols-4 flex-1 items-center text-center  relative ">
                    <img
                        src="images/timeline/galaxy_3.avif"
                        alt="galaxy"
                        className="absolute inset-0 m-auto h-160 w-180 pointer-events-none "
                    />
                    <img
                        src="images/timeline/galaxy_3_details.svg"
                        ref={statsImgRef}
                        alt=""
                        className=" w-50 col-span-1"
                    />
                    <div className="col-span-1"></div>
                    <div className="flex flex-col  mt-10 items-center gap-56 col-span-1 ">
                        <div className="flex items-center gap-2">
                            <OrangeRect fill="#F27C06" ref={orangeRectRef1} className="h-4 w-4" />
                            <p className="stats text-xs">
                                Luminosity: 2.6 × 10¹⁰ L☉
                            </p>

                        </div>

                        <div className="flex justify-center items-center gap-2">
                            <OrangeRect fill="#F27C06" ref={orangeRectRef2} className="h-7 w-7" />
                            <p className="stats text-xs">
                                Magnitude: u:18.65 g:17.86 r:17.51 <br />
                                Redshift: z = 0.103
                            </p>

                        </div>
                    </div>

                    <div className="flex justify-end h-full pt-14  items-center col-span-1">
                        <p className="stats text-[10px]">
                            Rotation Curve: ??? km/s peak
                        </p>
                    </div>

                </div>

                <div className="z-10 text-center flex-1 mt-8">
                    <h2 
                     style={{ clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)" }}
                    className="tl-card3-info text-[4em] tracking-tight leading-16">
                        MISSION REVEAL</h2>
                </div>
            </div>
        </div>
    );
})

export default TlCard3;
