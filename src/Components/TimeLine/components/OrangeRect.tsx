import { useRef, forwardRef, useImperativeHandle } from "react";
import { gsap } from "@/lib/gsap";
import type { OrangeRectHandle } from "@/lib/types";

type LogoProps = React.SVGProps<SVGSVGElement> & {
  fill: string;
};

const OrangeRect = forwardRef<OrangeRectHandle, LogoProps>(
  ({ fill, ...props }, ref) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useImperativeHandle(ref, () => ({
      animate: () => {
        const rect = svgRef.current?.querySelector(
          ".rect-stroke",
        ) as SVGGeometryElement;
        if (!rect) return gsap.to({}, {});

        const length = rect.getTotalLength();
        gsap.set(rect, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 1,
        });

        return gsap.to(rect, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power1.out",
        });
      },
    }));

    return (
      <svg
        ref={svgRef}
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect
          className="rect-stroke"
          x="1.5"
          y="1.5"
          width="57"
          height="57"
          stroke={fill}
          strokeWidth={6}
        />
      </svg>
    );
  },
);

export default OrangeRect;
