import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Globe, Linkedin, Twitter, Instagram, Menu } from "lucide-react";
import { RetroGrid } from "../retro-grid";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          mins: String(minutes).padStart(2, "0"),
          secs: String(seconds).padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const floatVariant: Variants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4, // @ts-ignore
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatVariantDelayed: Variants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 5, // @ts-ignore
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  return (
    <section className="relative h-screen w-full bg-white overflow-hidden flex flex-col pt-3 pb-3 px-3">
        <div className="relative w-full h-full bg-neutral-900 rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center text-foreground font-sans">
            
            {/* <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-neutral-900" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_0)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" /> */}

            {/* Retro Grid Background */}
            <RetroGrid 
                className="absolute inset-0 z-0 h-full w-full opacity-60 pointer-events-none"
                angle={65}
                cellSize={60}
                lightLineColor="#ffffff"
                darkLineColor="#ffffff" 
            />

            <div className="absolute top-8 right-8 z-50">
                <button className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors">
                <Menu className="w-6 h-6" />
                </button>
            </div>

            <div className="absolute top-12 flex flex-col items-center z-40 space-y-1">
                
                <h2 className="text-4xl font-medium tracking-wide text-white">AI SLOP</h2>
                
                <p className="text-md text-neutral-500 tracking-widest mt-1">presents</p>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center mt-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-bold text-[#3a2a1d] select-none z-0 pointer-events-none scale-150 transform">
                    2.0
                </div>

                {/* floating assets*/}
                <motion.div
                variants={floatVariant}
                animate="animate"
                className="absolute top-[-100px] left-[20%] w-32 h-32 bg-gray-600/20 backdrop-blur rounded-lg border border-white/10 z-10 hidden lg:flex items-center justify-center rotate-12"
                >
                    <div className="text-xs opacity-50 text-center">Camera<br/>Tool</div>
                </motion.div>

                <motion.div
                variants={floatVariantDelayed}
                animate="animate"
                className="absolute top-[-50px] right-[20%] w-24 h-48 bg-gray-600/20 backdrop-blur rounded-lg border border-white/10 z-10 hidden lg:flex items-center justify-center -rotate-12"
                >
                    <div className="text-xs opacity-50 text-center">Tools</div>
                </motion.div>

                <motion.div
                variants={floatVariant}
                animate="animate"
                className="absolute bottom-[-100px] left-[15%] w-40 h-28 bg-gray-600/20 backdrop-blur rounded-lg border border-white/10 z-10 hidden lg:flex items-center justify-center -rotate-6"
                >
                    <div className="text-xs opacity-50 text-center">Laptop</div>
                </motion.div>
                
                <motion.div
                variants={floatVariantDelayed}
                animate="animate"
                className="absolute bottom-[-50px] right-[25%] w-10 h-20 bg-gray-600/20 backdrop-blur rounded-full border border-white/10 z-10 hidden lg:flex items-center justify-center rotate-45"
                >
                    <div className="text-xs opacity-50 text-center">Screw</div>
                </motion.div>


              
                <motion.div
                    animate={{ y: [0, -30, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-20 pointer-events-none opacity-80"
                >
                    <div className="w-[500px] h-[500px] bg-gradient-to-b from-transparent to-black/50 rounded-full blur-3xl absolute inset-0 mix-blend-multiply" />
                    <div className="w-[500px] h-[500px] flex items-center justify-center border-2 border-dashed border-white/20 rounded-full">
                        <div className="text-white/20 text-4xl font-bold">[Astronaut IMG]</div>
                    </div>
                </motion.div>


                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center flex flex-col items-center mt-32 w-full">
                    <h3 className="text-xl md:text-2xl font-light tracking-[0.5em] text-white uppercase mb-2">Designathon</h3>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 drop-shadow-[0_0_30px_rgba(242,124,6,0.3)]">
                        SPACEBOUND
                    </h1>
                    <div className="relative mt-2 w-full max-w-2xl mx-auto">
                        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 blur-sm" />
                        <h2 className="text-sm md:text-lg font-light tracking-widest text-neutral-400 mt-4 uppercase text-center">
                            design beyond the known universe
                        </h2>
                    </div>
                </div>
            </div>

            {/* --- Curve Cutouts System --- */}
            
            {/* 1. Countdown Section (Left) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col z-50 filter drop-shadow-2xl">
                 <div className="relative bg-white w-24 rounded-r-[2rem] py-8 pl-6 pr-4 flex flex-col items-center space-y-4">
                    {/* Inverted Corner Top */}
                    <div className="absolute -top-8 left-0 w-8 h-8 bg-white z-20 translate-y-px" 
                        style={{ maskImage: 'radial-gradient(circle at 100% 0, transparent 2rem, black 2rem)', WebkitMaskImage: 'radial-gradient(circle at 100% 0, transparent 2rem, black 2rem)' }}
                    />
                  
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold text-accent">{timeLeft.days}</span>
                        <span className="text-[10px] uppercase tracking-wider text-black opacity-60">days</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold text-accent">{timeLeft.hours}</span>
                        <span className="text-[10px] uppercase tracking-wider text-black opacity-60">hours</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold text-neutral-400">{timeLeft.mins}</span>
                        <span className="text-[10px] uppercase tracking-wider text-black opacity-60">mins</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold text-neutral-400">{timeLeft.secs}</span>
                        <span className="text-[10px] uppercase tracking-wider text-black opacity-60">secs</span>
                    </div>
                    
                    {/* Inverted Corner Bottom */}
                    <div className="absolute -bottom-8 left-0 w-8 h-8 bg-white z-20 -translate-y-px"
                        style={{ maskImage: 'radial-gradient(circle at 100% 100%, transparent 2rem, black 2rem)', WebkitMaskImage: 'radial-gradient(circle at 100% 100%, transparent 2rem, black 2rem)' }}
                    />
                 </div>
            </div>

            {/* 2. Social Icons (Bottom Left) */}
            <div className="absolute bottom-0 left-0 z-50 filter drop-shadow-2xl">
                <div className="relative bg-white rounded-tr-[2rem] p-6 pr-10 pl-8 flex items-center space-x-6">
                     {/* Inverted Corner Right (Connects to floor) */}
                    <div className="absolute bottom-0 -right-8 w-8 h-8 bg-white -translate-x-px"
                        style={{ maskImage: 'radial-gradient(circle at 100% 0, transparent 2rem, black 2rem)', WebkitMaskImage: 'radial-gradient(circle at 100% 0, transparent 2rem, black 2rem)' }}
                    />
                    {/* Inverted Corner Top (Connects to wall) */}
                    <div className="absolute -top-8 left-0 w-8 h-8 bg-white translate-y-px"
                        style={{ maskImage: 'radial-gradient(circle at 100% 0, transparent 2rem, black 2rem)', WebkitMaskImage: 'radial-gradient(circle at 100% 0, transparent 2rem, black 2rem)' }}
                    />

                     <a href="#" className="hover:opacity-80 transition-opacity transform hover:scale-110"><Twitter size={24} className="text-accent fill-current" /></a>
                    <a href="#" className="hover:opacity-80 transition-opacity transform hover:scale-110"><Globe size={24} className="text-black" /></a>
                    <a href="#" className="hover:opacity-80 transition-opacity transform hover:scale-110"><Linkedin size={24} className="text-black fill-current" /></a>
                    <a href="#" className="hover:opacity-80 transition-opacity transform hover:scale-110"><Instagram size={24} className="text-black" /></a>
                </div>
            </div>

            {/* 3. Prize Pool (Bottom Right) */}
            <div className="absolute bottom-0 right-0 z-50 filter drop-shadow-2xl">
                 <div className="relative bg-white rounded-tl-[2rem] p-2 flex flex-row items-center">
                    {/* Inverted Corner Top (Connects to wall) */}
                    <div className="absolute -top-8 right-0 w-8 h-8 bg-white translate-y-px"
                        style={{ maskImage: 'radial-gradient(circle at 0 0, transparent 2rem, black 2rem)', WebkitMaskImage: 'radial-gradient(circle at 0 0, transparent 2rem, black 2rem)' }}
                    />
                    {/* Inverted Corner Left (Connects to floor) */}
                    <div className="absolute bottom-0 -left-8 w-8 h-8 bg-white translate-x-px"
                         style={{ maskImage: 'radial-gradient(circle at 0 0, transparent 2rem, black 2rem)', WebkitMaskImage: 'radial-gradient(circle at 0 0, transparent 2rem, black 2rem)' }}
                    />


                    <div className="pl-8 pr-6 py-4 flex flex-col items-start min-w-[140px]">
                        <div className="flex items-baseline">
                            <span className="text-6xl font-bold text-black leading-none tracking-tighter">100</span>
                            <span className="text-3xl font-bold text-black">k</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold w-full text-center mt-2">prize pool</span>
                    </div>
                    <button className="bg-accent hover:bg-orange-600 text-white font-bold py-6 px-10 rounded-[2rem] transition-colors uppercase tracking-widest text-sm shadow-lg h-full border-2 border-black/5">
                        Join Now
                    </button>
                 </div>
            </div>

        </div>
    </section>
  );
};

export default HeroSection;
