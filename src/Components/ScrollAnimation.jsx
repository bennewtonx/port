import React, { useEffect, useRef } from "react";

function ScrollAnimation({ children, threshold = 0.5 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          containerRef.current.classList.add("animate-slide-in");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div className="scroll-animation" ref={containerRef}>
      {children}
    </div>
  );
}

export default ScrollAnimation;
