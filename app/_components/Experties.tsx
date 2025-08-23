"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

type Details = {
  title: string;
  position: number;
};

const Experties = ({ details }: { details: Details }) => {
  const text = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLLIElement>(null);
  const icon = useRef(null);
  const img = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    container.current?.addEventListener("mouseenter", () => {
      console.log("first");
      gsap.to(container.current, {
        backgroundColor: "#ccc",
        duration: 1,
        ease: "power3.out",
      });
      gsap.to(text.current, { x: 20, duration: 1, ease: "power3.out" });
      gsap.to(icon.current, {
        fill: "black",
        x: 10,
        scale: 1.2,
        duration: 1,
        ease: "power3.out",
      });
    });

    container.current?.addEventListener("mouseleave", () => {
      console.log("last");
      gsap.to(container.current, {
        backgroundColor: "transparent",
        duration: 1,
        ease: "power3.out",
      });
      gsap.to(text.current, { x: 0, duration: 1, ease: "power3.out" });
      gsap.to(icon.current, {
        fill: "none",
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      });
      gsap.to(img.current, { display: "none", scale: 0 });
    });

    container.current?.addEventListener("mousemove", function (e) {
      const rect = container.current?.getBoundingClientRect();
      const left = rect?.left;
      const centerY = rect && rect.top + rect.height / 2;
      const positionY = centerY && e.clientY - centerY;
      const positionX = left && e.clientX - (left + 200);

      gsap.set(img.current, { x: positionX, y: positionY });
      gsap.to(img.current, {
        display: "block",
        scale: 1,
        x: positionX,
        y: positionY,
      });
    });
  });

  return (
    <li
      ref={container}
      className="flex cursor-pointer justify-between items-center border-b-1 border-off-black pb-1.5 md:pb-2.5 mb-4 md:mb-6 relative "
    >
      <Image
        ref={img}
        className={`absolute z-10 hidden  scale-0 pointer-events-none`}
        src="/res1.jpg"
        alt="resident"
        width={250}
        height={350}
      />
      <div ref={text} className="flex-center gap-2 ">
        <h5 className="sm:text-xl md:text-2xl">{`0${details.position}`}</h5>
        <h5 className="uppercase sm:text-xl md:text-2xl">{details.title}</h5>
      </div>
      <svg
        ref={icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 37 36"
        fill="none"
        className="w-[37px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px] "
      >
        <path
          d="M23.1956 11.562L24.0673 23.5081L21.9165 23.6614L21.3193 15.484L21.2803 14.947L10.782 25.2187L9.27196 23.6754L19.7703 13.4037L19.2342 13.3529L11.0704 12.5775L11.2713 10.4299L23.1956 11.562Z"
          stroke="black"
          strokeWidth="0.5"
        />
      </svg>
    </li>
  );
};

export default Experties;
