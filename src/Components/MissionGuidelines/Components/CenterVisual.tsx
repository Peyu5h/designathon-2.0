import React from "react";

const CenterVisual = () => {
  return (
    <div className="w-full lg:w-2/4 flex flex-wrap gap-2 ">
      {/* Top Left */}
      <div
        className="relative w-[calc(50%-0.25rem)]  h-48 md:h-64 border border-white/30 overflow-hidden"
        style={{
          backgroundImage: "url('/images/Guidelines/Galaxy-image.jpg')",
          backgroundSize: "450% 300%",
          backgroundPosition: "35% 18%",
        }}
      >
        {/* for warm filter and Darkness */}
        <div className="absolute inset-0 bg-orange-700/20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-black/20" />


        {/* <div className="absolute top-3 left-3 text-white text-[10px] tracking-widest">
                ACCRETION DISK
              </div> */}
      </div>

      {/* Top Right */}
      <div
        className="relative w-[calc(50%-0.25rem)]  h-48 md:h-64 border border-white/30 overflow-hidden"
        style={{
          backgroundImage: "url('/images/Guidelines/Galaxy-image.jpg')",
          backgroundSize: "450% 300%",
          backgroundPosition: "65% 18%",
        }}
      >
         {/* for warm filter and Darkness */}
        <div className="absolute inset-0 bg-orange-700/20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-black/20" />


        {/* <div className="absolute top-3 left-3 text-white text-[10px] tracking-widest">
                TON-618
              </div> */}
      </div>

      {/* Bottom Left */}
      <div
        className="relative w-[calc(50%-0.25rem)] h-48 md:h-64 border border-white/30 overflow-hidden"
        style={{
          backgroundImage: "url('/images/Guidelines/Galaxy-image.jpg')",
          backgroundSize: "450% 300%",
          backgroundPosition: "35% 70%",
        }}
      >
         {/* for warm filter and Darkness */}
        <div className="absolute inset-0 bg-orange-700/20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-black/20" />

        {/* <div className="absolute top-3 left-3 text-white text-[10px] tracking-widest">
                PHOTON DISK
              </div> */}
      </div>

      {/* Bottom Right */}
      <div
        className="relative w-[calc(50%-0.25rem)] h-48 md:h-64 border border-white/30 overflow-hidden"
        style={{
          backgroundImage: "url('/images/Guidelines/Galaxy-image.jpg')",
          backgroundSize: "450% 300%",
          backgroundPosition: "65% 70%",
        }}
      >
         {/* for warm filter and Darkness */}
        <div className="absolute inset-0 bg-orange-700/20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-black/20" />
        {/* CTA */}
        <div className=" absolute bottom-5 right-10 cursor-pointer">
          <button className="h-12 w-50 bg-[#F27C06] border border-white hover:bg-orange-600 transition-colors  rounded-md text-white font-bold tracking-widest text-sm uppercase">
            Download Guidelines
          </button>
        </div>
      </div>
    </div>
  );
};

export default CenterVisual;
