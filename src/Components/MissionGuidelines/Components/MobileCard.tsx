import { assets } from "@/lib/assets";

const MobileCard = ({
  image,
  imagePosition,
  guideline = { title: "", lines: [] },
  reverse = false,
  transform,
}: {
  image: boolean;
  imagePosition: string;
  guideline?: { title: string; lines: string[] };
  reverse?: boolean;
  transform?: string;
}) => {
  const imageCard = (
    <div className="relative h-44 border border-white/20 md:h-52 overflow-hidden" >
        <div
      className="absolute inset-0" // extra space so rotation doesn't clip
      style={{
        backgroundImage: `url('${assets.guidelines.galaxyImage}')`,
        backgroundSize: "450% 300%",
        backgroundPosition: imagePosition, // for position changing
        transform: transform, // for rotation
      }}
    />

      <div className="absolute inset-0 bg-orange-700/20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );

  const textCard = (
    <div className="h-44 border border-white/20 bg-black/80 px-4 py-5 md:h-52 md:py-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="h-3 w-3 bg-orange-500" />
        <h3 className="text-md font-bold uppercase tracking-[0.08em] text-white md:text-4xl">
          {guideline.title}
        </h3>
      </div>

      <div className="space-y-1 text-sm leading-[1.3] text-white/85 md:text-2xl">
        {guideline.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-2 gap-0">
      {reverse ? (
        <>
          {textCard}
          {image ? imageCard : <div className="h-44 md:h-52" />}
        </>
      ) : (
        <>
          {image ? imageCard : <div className="h-44 md:h-52" />}
          {textCard}
        </>
      )}
    </div>
  );
};

export default MobileCard;
