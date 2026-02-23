import { useEffect, useLayoutEffect, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import About from "@/Components/About/About";
import Faqs from "@/Components/FAQs/Faqs";
import HeroSection from "@/Components/HeroSection/HeroSection";
import MissionGuidelines from "@/Components/MissionGuidelines/MissionGuidelines";
import MissionLogs from "@/Components/MissionLogs/MissionLogs";
import MissionRewards from "@/Components/MissionRewards/MissionRewards";
import TimeLine from "@/Components/TimeLine/TimeLine";
import { useLenis } from "@/lib/Lenis";
import Preloader from "@/Components/Preloader";
import { criticalAssets, deferredAssets } from "@/lib/assets";
import Footer from "@/Components/Footer";
import { InfiniteRibbon } from "@/Components/ui/infinite-ribbon";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const lenis = useLenis();

  // scale-down mission logs as rewards enters
  useLayoutEffect(() => {
    if (isLoading) return;
    gsap.registerPlugin(ScrollTrigger);

    const missionLogs = document.querySelector(".mission-logs-sticky");
    const rewards = document.getElementById("rewards");
    if (!missionLogs || !rewards) return;

    const ctx = gsap.context(() => {
      gsap.to(missionLogs, {
        scale: 0.92,
        opacity: 0.4,
        filter: "blur(1px)",
        force3D: true,
        scrollTrigger: {
          trigger: rewards,
          start: "top 90%",
          end: "top 25%",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [isLoading]);

  // snap scrolling between sections
  useEffect(() => {
    if (!lenis || isLoading) return;

    let isScrolling = false;
    let cooldownTimer: ReturnType<typeof setTimeout> | null = null;

    const getEl = (id: string) => document.getElementById(id);

    const getTop = (id: string): number => {
      const el = getEl(id);
      if (!el) return 0;
      return el.getBoundingClientRect().top + window.scrollY;
    };

    const getBottom = (id: string): number => {
      const el = getEl(id);
      if (!el) return 0;
      return el.getBoundingClientRect().top + window.scrollY + el.offsetHeight;
    };

    const snapTo = (target: string) => {
      if (isScrolling) return;
      isScrolling = true;
      lenis.scrollTo(target, {
        duration: 1.2,
        lock: true,
        onComplete: () => {
          cooldownTimer = setTimeout(() => {
            isScrolling = false;
          }, 800);
        },
      });
    };

    const handleScroll = ({
      scroll,
      velocity,
    }: {
      scroll: number;
      velocity: number;
    }) => {
      if (isScrolling) return;

      const vh = window.innerHeight;
      const minVelocity = 0.8;

      if (scroll < vh - 50 && velocity > minVelocity) {
        snapTo("#mission-logs");
        return;
      }
      if (scroll >= vh - 50 && scroll <= vh + 50 && velocity < -minVelocity) {
        snapTo("#home");
        return;
      }

      const tlBottom = getBottom("timeline");
      if (
        scroll >= tlBottom - 200 &&
        scroll <= tlBottom + 200 &&
        velocity > minVelocity
      ) {
        snapTo("#guidelines");
        return;
      }

      const guidelinesTop = getTop("guidelines");
      const guidelinesBottom = getBottom("guidelines");
      if (
        scroll >= guidelinesTop + vh * 0.3 &&
        scroll <= guidelinesBottom + 100 &&
        velocity > minVelocity
      ) {
        snapTo("#faqs");
        return;
      }

      const faqsTop = getTop("faqs");
      if (
        scroll >= faqsTop - 100 &&
        scroll <= faqsTop + vh * 0.3 &&
        velocity < -minVelocity
      ) {
        snapTo("#guidelines");
        return;
      }

      const aboutTop = getTop("about");
      if (
        scroll >= aboutTop - 100 &&
        scroll <= aboutTop + vh * 0.3 &&
        velocity < -minVelocity
      ) {
        snapTo("#faqs");
        return;
      }
    };

    // @ts-ignore
    lenis.on("scroll", handleScroll);

    return () => {
      // @ts-ignore
      lenis.off("scroll", handleScroll);
      if (cooldownTimer) clearTimeout(cooldownTimer);
    };
  }, [lenis, isLoading]);

  return (
    <>
      <Preloader
        critical={criticalAssets}
        deferred={deferredAssets}
        onComplete={() => setIsLoading(false)}
      />

      {!isLoading && (
        <>
          <div className="animate-in fade-in duration-700 overflow-x-hidden relative z-10">
            <div id="home" className="bg-background">
              <HeroSection />
            </div>

            <div className="relative">
              <div
                id="mission-logs"
                className="sticky top-0 z-10 mission-logs-sticky"
                style={{ willChange: "transform, opacity, filter" }}
              >
                <MissionLogs />
              </div>
              <div id="rewards" className="relative z-20">
                <MissionRewards />
              </div>
            </div>

            <div id="timeline" className="relative z-20">
              <TimeLine />
            </div>
            <div id="guidelines" className="relative z-20">
              <MissionGuidelines />
            </div>
            <div id="faqs" className="relative z-20">
              <Faqs />
            </div>
            <div id="about" className="relative z-20 bg-background">
              <About />
            </div>

            <div className="relative z-20 overflow-hidden py-10 bg-background">
              <InfiniteRibbon
                rotation={3}
                duration={15}
                className="absolute bg-primary/90 py-2 text-xl font-bold font-share-tech tracking-widest text-[#141414] uppercase"
              >
                DESIGNATHON 2.0 • SPACEBOUND • GDGC ACE • REGISTER NOW • EXPLORE
                THE COSMOS •
              </InfiniteRibbon>
              <InfiniteRibbon
                reverse
                rotation={-3}
                duration={18}
                className="bg-background border border-primary/30 py-2 text-xl font-bold font-share-tech tracking-widest text-primary uppercase"
              >
                DESIGN • PROTOTYPE • INNOVATE • COLLABORATE • PUSH BOUNDARIES •
                CREATE •
              </InfiniteRibbon>
            </div>
          </div>

          <div className="sticky bottom-0 z-0">
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default MainPage;
