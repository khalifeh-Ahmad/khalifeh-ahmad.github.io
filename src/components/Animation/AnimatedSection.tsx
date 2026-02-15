import { useScrollAnimation } from "../../hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: "fade-in-up" | "fade-in-left" | "fade-in-right" | "scale-in";
  threshold?: number;
  className?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = "fade-in-up",
  threshold = 0.1,
  className = "",
}) => {
  const { ref, isVisible, isExiting } = useScrollAnimation(threshold);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${animation} ${
        isExiting ? "exiting" : isVisible ? "visible entering" : "hidden"
      } ${className}`}
    >
      {children}
    </div>
  );
};
