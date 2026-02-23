import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  critical: string[];
  deferred?: string[];
  onComplete: () => void;
}

// preloads critical assets (blocks), then deferred (background)
const preloadImage = (src: string): Promise<void> =>
  new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = () => resolve(); // don't block on failures
  });

const Preloader = ({ critical, deferred = [], onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const total = critical.length;

    const loadAll = async () => {
      await Promise.all(
        critical.map(async (src) => {
          await preloadImage(src);
          loadedCount++;
          setProgress(Math.round((loadedCount / total) * 100));
        })
      );
      setTimeout(() => setIsLoaded(true), 400);

      // fire-and-forget deferred assets in background
      if (deferred.length > 0) {
        deferred.forEach((src) => preloadImage(src));
      }
    };

    loadAll();
  }, [critical, deferred]);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(onComplete, 800);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.2 }}
            />
          </div>
          <div className="font-mono text-sm tracking-widest uppercase">
            Initializing System... {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
