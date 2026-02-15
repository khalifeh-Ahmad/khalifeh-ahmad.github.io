// hooks/useScrollAnimation.ts
import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExiting(false);
          setIsVisible(true);
        } else {
          // Element is out of view - trigger exit animation
          setIsExiting(true);
          // After exit animation completes, hide the element
          setTimeout(() => {
            if (!entry.isIntersecting) {
              setIsVisible(false);
            }
          }, 600); // Match the transition duration
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isVisible, isExiting };
};
