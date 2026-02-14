import React from "react";

const RightColumn = () => {
  return (
    <div className="flex flex-col gap-4 w-full lg:w-1/4">
      {/* Guideline 3 */}
      <div
        className="h-64 backdrop-blur-md  p-6 border border-white/20 flex flex-col justify-start pt-8 overflow-hidden"
        style={{
          backgroundImage: "url('/images/Guidelines/Galaxy-image.jpg')",
          backgroundSize: "450% 300%",
          backgroundPosition: "100% 0%",
        }}
      > 
          {/* for warm filter and Darkness */}
        <div className="absolute inset-0 bg-orange-700/30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 " />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-orange-500" />
            <h3 className="text-white text-xl font-bold tracking-wider">
              Guideline 3
            </h3>
          </div>
          <div className="space-y-1 text-white/70 text-sm tracking-wide">
            <p>yap yap yap</p>
            <p>yap yap yap</p>
            <p>yap yap yap</p>
            <p>yap yap yap</p>
          </div>
        </div>
      </div>

      {/* Guideline 4 */}
      <div
        className="h-64 backdrop-blur-md  p-6 border border-white/20 flex flex-col justify-start pt-8 overflow-hidden"
        // style={{
        //   backgroundImage: "url('/images/Guidelines/Galaxy-image.jpg')",
        //   backgroundSize: "260% 260%",
        //   backgroundPosition: "35% 50%",
        // }}
      >
        <div className="absolute inset-0 " />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-orange-500" />
            <h3 className="text-white text-xl font-bold tracking-wider">
              Guideline 4
            </h3>
          </div>
          <div className="space-y-1 text-white/70 text-sm tracking-wide">
            <p>yap yap yap</p>
            <p>yap yap yap</p>
            <p>yap yap yap</p>
            <p>yap yap yap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
