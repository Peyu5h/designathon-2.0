import { assets } from "@/lib/assets";

const GALAXY_BG_BASE = {
  backgroundImage: `url('${assets.guidelines.galaxyImage}')`,
  backgroundSize: "450% 300%",
};

const GalaxyOverlay = () => (
  <>
    <div className="absolute inset-0 bg-orange-700/20 mix-blend-overlay" />
    <div className="absolute inset-0 bg-black/20" />
  </>
);

const CenterVisual = () => {
  return (
    <div className="w-full lg:w-2/4 flex flex-wrap gap-2">
      <div
        className="relative w-[calc(50%-0.25rem)] h-48 md:h-64 border border-white/30 overflow-hidden"
        style={{ ...GALAXY_BG_BASE, backgroundPosition: "35% 18%" }}
      >
        <GalaxyOverlay />
      </div>

      <div
        className="relative w-[calc(50%-0.25rem)] h-48 md:h-64 border border-white/30 overflow-hidden"
        style={{ ...GALAXY_BG_BASE, backgroundPosition: "65% 18%" }}
      >
        <GalaxyOverlay />
      </div>

      <div
        className="relative w-[calc(50%-0.25rem)] h-48 md:h-64 border border-white/30 overflow-hidden"
        style={{ ...GALAXY_BG_BASE, backgroundPosition: "35% 70%" }}
      >
        <GalaxyOverlay />
      </div>

      <div
        className="relative w-[calc(50%-0.25rem)] h-48 md:h-64 border border-white/30 overflow-hidden"
        style={{ ...GALAXY_BG_BASE, backgroundPosition: "65% 70%" }}
      >
        <GalaxyOverlay />
        <div className="absolute bottom-5 right-10 cursor-pointer">
          <button className="h-12 w-50 bg-primary border border-white hover:bg-orange-600 transition-colors rounded-md text-white font-bold tracking-widest text-sm uppercase">
            Download Guidelines
          </button>
        </div>
      </div>
    </div>
  );
};

export default CenterVisual;
