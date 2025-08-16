import Image from "next/image";
import React from "react";

type ProjectProps = {
  name: string;
  location: string;
  src: string;
};

const Project = (props: ProjectProps) => {
  const { name, location, src } = props;
  return (
    <div className="text-off-white flex flex-col gap-4">
      <div className="w-[345px] h-[515px] relative  ">
        <Image
          src={src}
          alt="reidential project"
          fill
          className="object-cover"
        />
      </div>
      <div className=" flex flex-col gap-0.5">
        <h4>{name}</h4>
        <h5>{location}</h5>
      </div>
    </div>
  );
};

export default Project;
