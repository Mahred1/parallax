"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
export const heroTimeline = gsap.timeline();

const Loader = () => {
  const logo = useRef(null);
  const leftCover = useRef(null);
  const rightCover = useRef(null);

  useGSAP(() => {
    heroTimeline.to(logo.current, { opacity: 0 });
    heroTimeline.to(leftCover.current, {
      x: "-100%",
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(leftCover.current, { display: "none" });
      },
    });
    heroTimeline.to(
      rightCover.current,
      {
        x: "100%",
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(rightCover.current, { display: "none" });
        },
      },
      "<"
    );
 
  });

  return (
    <div className="fixed top-0 left-0 min-h-screen min-w-screen z-1000 flex">
      <div ref={leftCover} className="bg-off-black h-screen w-1/2"></div>
      <div ref={rightCover} className="bg-off-black h-screen w-1/2"></div>
      {/* logo */}
      <div
        ref={logo}
        className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="30"
          viewBox="0 0 93 19"
          fill="white"
        >
          <g clipPath="url(#clip0_1_3)">
            <path
              d="M8.288 1.44H0.799999V18H3.08V12.408H8.288C11.48 12.408 13.904 10.056 13.904 6.936C13.904 3.792 11.48 1.44 8.288 1.44ZM8.216 9.48H3.08V4.368H8.216C10.208 4.368 11.552 5.4 11.552 6.936C11.552 8.448 10.208 9.48 8.216 9.48ZM25.8543 5.76V8.64C24.9423 6.72 23.1903 5.472 20.9823 5.472C17.5263 5.472 14.9583 8.232 14.9583 11.88C14.9583 15.528 17.5263 18.288 20.9823 18.288C23.1903 18.288 24.9423 17.04 25.8543 15.12V18H27.9663V5.76H25.8543ZM21.5103 15.456C19.0143 15.456 17.1423 13.92 17.1423 11.88C17.1423 9.84 19.0143 8.304 21.5103 8.304C23.9823 8.304 25.8543 9.84 25.8543 11.88C25.8543 13.92 23.9823 15.456 21.5103 15.456ZM33.3059 8.856V5.76H31.1699V18H33.3059V12.48C33.3059 10.296 34.9859 9.024 37.9619 9.024V5.568C35.8739 5.568 34.2179 6.84 33.3059 8.856ZM49.9481 5.76V8.64C49.0361 6.72 47.2841 5.472 45.0761 5.472C41.6201 5.472 39.0521 8.232 39.0521 11.88C39.0521 15.528 41.6201 18.288 45.0761 18.288C47.2841 18.288 49.0361 17.04 49.9481 15.12V18H52.0601V5.76H49.9481ZM45.6041 15.456C43.1081 15.456 41.2361 13.92 41.2361 11.88C41.2361 9.84 43.1081 8.304 45.6041 8.304C48.0761 8.304 49.9481 9.84 49.9481 11.88C49.9481 13.92 48.0761 15.456 45.6041 15.456ZM55.2637 18H57.3997V0.719997H55.2637V18ZM60.5606 18H62.6966V0.719997H60.5606V18ZM76.0574 5.76V8.64C75.1454 6.72 73.3934 5.472 71.1854 5.472C67.7294 5.472 65.1614 8.232 65.1614 11.88C65.1614 15.528 67.7294 18.288 71.1854 18.288C73.3934 18.288 75.1454 17.04 76.0574 15.12V18H78.1694V5.76H76.0574ZM71.7134 15.456C69.2174 15.456 67.3454 13.92 67.3454 11.88C67.3454 9.84 69.2174 8.304 71.7134 8.304C74.1854 8.304 76.0574 9.84 76.0574 11.88C76.0574 13.92 74.1854 15.456 71.7134 15.456ZM92.6531 5.76H89.9651L86.6771 10.08H86.1731L82.8611 5.76H80.3891L84.6851 11.784L80.2211 18H82.9091L86.2451 13.68H86.7731L90.1331 18H92.6291L88.2371 11.904L92.6531 5.76Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_3">
              <rect width="93" height="19" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
