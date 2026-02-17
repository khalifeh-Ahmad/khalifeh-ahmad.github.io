import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // ✅ Check if already in viewport on mount FIRST
    const rect = currentRef.getBoundingClientRect();
    const isAlreadyVisible =
      rect.top < window.innerHeight &&
      rect.bottom > 0 &&
      rect.left < window.innerWidth &&
      rect.right > 0;

    //  If already visible, set immediately and DON'T observe
    if (isAlreadyVisible) {
      setIsVisible(true);
      return; // Early return - no need to set up observer at all
    }

    //  Only observe if NOT already visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef); // Stop watching once triggered
        }
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [threshold]);

  return { ref, isVisible };
};
