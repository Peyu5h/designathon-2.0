import MainGridContainer from "./components/MainGridContainer";
import OrangeBox from "./components/OrangeBox";

const MissionGuidelines = () => {
  return (
    <section className="w-full bg-black lg:bg-background border-t border-white/10 relative overflow-hidden h-screen">
      <OrangeBox />
      <MainGridContainer />
    </section>
  );
};

export default MissionGuidelines;
