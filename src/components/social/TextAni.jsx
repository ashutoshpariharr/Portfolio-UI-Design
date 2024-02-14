import { useInView } from "framer-motion";
import { useRef } from "react";

export function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-100%) rotate(20deg)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          boxShadow: isInView ? "0px 0px 10px rgba(0, 0, 0, 0.3)" : "none",
          filter: isInView ? "blur(0px)" : "blur(5px)",
          borderRadius: isInView ? "0%" : "50%",
        }}
      >
        {children}
      </span>
    </section>
  );
}
