import MainGridContainer from "./Components/MainGridContainer";
import OranageBox from "./Components/OranageBox";

const MissionGuidelines = () => {
  return (
    <section className="w-full bg-black lg:bg-background border-t border-white/10 relative overflow-hidden min-h-screen">
      {/* Orange corner decorations */}
      <OranageBox/>
      {/* Main Grid Container */}
      <MainGridContainer/>
    </section>
  );
};

export default MissionGuidelines;
