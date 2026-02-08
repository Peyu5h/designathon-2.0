import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    id: 1,
    title: "Registration Opens",
    date: "Feb 15, 2026",
    description: "Sign up begins for all participants.",
  },
  {
    id: 2,
    title: "Team Formation",
    date: "Feb 20, 2026",
    description: "Finalize your teams and ideas.",
  },
  {
    id: 3,
    title: "Opening Ceremony",
    date: "Mar 01, 2026",
    description: "Kickoff event with guest speakers.",
  },
  {
    id: 4,
    title: "Hackathon Begins",
    date: "Mar 01, 2026",
    description: "48 hours of intense creativity.",
  },
  {
    id: 5,
    title: "Submission Deadline",
    date: "Mar 03, 2026",
    description: "Upload your projects for judging.",
  },
  {
    id: 6,
    title: "Winners Announced",
    date: "Mar 05, 2026",
    description: "Celebrating the best designs.",
  },
];

const TimeLine = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-400vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "3000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-background">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="h-screen w-[500vw] flex flex-row relative"
        >
          {/* Intro Slide */}
          <div className="h-screen w-screen flex flex-col justify-center items-center px-20 border-r border-white/10 relative">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-neutral-800/40 via-background to-background pointer-events-none" />
            <h2 className="text-8xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-4">
              Mission Timeline
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl text-center">
              Follow the journey from registration to the final launch.
              Scroll to explore the phases.
            </p>
            <div className="absolute bottom-10 animate-bounce">
                <span className="text-sm uppercase tracking-widest text-neutral-500">Scroll Right &rarr;</span>
            </div>
          </div>

          {/* Timeline Events */}
          {timelineEvents.map((event, index) => (
            <div
              key={event.id}
              className="h-screen w-[50vw] flex flex-col justify-center px-16 border-r border-white/5 relative hover:bg-white/5 transition-colors duration-500 group"
            >
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-10" />
              <div className="absolute top-1/2 left-8 w-4 h-4 bg-accent rounded-full -translate-y-1/2 shadow-[0_0_15px_rgba(242,124,6,0.5)] group-hover:scale-150 transition-transform duration-300" />
              
              <span className="text-6xl font-black text-white/5 absolute top-10 right-10 select-none">
                0{index + 1}
              </span>

              <div className="mt-8 ml-8">
                  <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{event.title}</h3>
                  <span className="text-lg text-accent font-mono block mb-4">{event.date}</span>
                  <p className="text-neutral-400 text-lg max-w-md">
                    {event.description}
                  </p>
              </div>
            </div>
          ))}
          
           {/* Final Slide */}
           <div className="h-screen w-screen flex flex-col justify-center items-center bg-black relative">
               <h2 className="text-6xl font-bold text-white z-10">Ready for Liftoff?</h2>
           </div>

        </div>
      </div>
    </section>
  );
};

export default TimeLine;