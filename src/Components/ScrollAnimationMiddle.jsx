import React, { useEffect, useRef } from "react";

function ScrollAnimationMiddle({ children, threshold = 0.5 }) {
  const containerRef1 = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          containerRef1.current.classList.add("animate-slide-in-middle");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(containerRef1.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div className="scroll-animation" ref={containerRef1}>
      {children}
    </div>
  );
}

export default ScrollAnimationMiddle;
