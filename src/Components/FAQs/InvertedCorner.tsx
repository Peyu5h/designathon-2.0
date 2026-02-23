import { cn } from "@/lib/utils";

export function InvertedCorner({
  className,
  colorClassName = "text-white",
  orientation = "top-right", // where the solid part of the corner is
}: {
  className?: string;
  colorClassName?: string;
  orientation?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}) {
  // SVG path creates a solid shape at bottom-right (M32 32) that curves inward from top-left.
  // We'll rotate it based on where we want the solid part to be.
  let rotateClass = "";
  if (orientation === "bottom-right") rotateClass = "rotate-0";
  if (orientation === "bottom-left") rotateClass = "rotate-90";
  if (orientation === "top-left") rotateClass = "rotate-180";
  if (orientation === "top-right") rotateClass = "-rotate-90";

  return (
    <svg
      className={cn(
        "absolute w-10 h-10 pointer-events-none",
        colorClassName,
        rotateClass,
        className,
      )}
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <path d="M32 32V0C32 17.67 17.67 32 0 32z" />
    </svg>
  );
}
