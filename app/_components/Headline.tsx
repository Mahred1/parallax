"use client";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import React, { useRef } from "react";
import { heroTimeline } from "./Loader";

const Headline = () => {
  const headline = useRef(null);

  useGSAP(() => {
    const splitHeadline = SplitText.create(headline.current, {
      type: "chars",
      mask: "chars",
    });
    heroTimeline.from(splitHeadline.chars, {
      duration: 1,
      ease: "power2.inOut",
      y: 100,
      stagger: 0.05,
    });
  });

  return (
    <div className="flex-center-col gap-1">
      <h5 className="uppercase">PARALLAX CUSTOME HOMES</h5>
      <h1
        ref={headline}
        className="w-[90%] md:w-[500px] lg:w-[728px] phone:w-[80%] lg:text-[80px] text-4xl md:text-5xl text-center tracking-tight lg:"
      >
        You’re Unique. Your home should be, too
      </h1>
    </div>
  );
};

export default Headline;
