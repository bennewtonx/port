import React, { useEffect, useRef } from "react";

function ScrollAnimationLeft({ children, threshold = 0.5 }) {
  const containerRef2 = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          containerRef2.current.classList.add("animate-slide-in-left");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(containerRef2.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div className="scroll-animation" ref={containerRef2}>
      {children}
    </div>
  );
}

export default ScrollAnimationLeft;
