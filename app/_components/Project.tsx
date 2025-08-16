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
    <div className="text-off-white flex flex-col gap-4 md:gap-8">
      <div className="w-[345px] h-[515px] md:w-[550px] md:h-[750px] lg:w-[600px] lg:h-[800px] relative  ">
        <Image
          src={src}
          alt="reidential project"
          fill
          className="object-cover"
        />
      </div>
      <div className=" flex flex-col gap-0.5 md:gap-1">
        <h4 className="md:text-4xl">{name}</h4>
        <h5 className="md:text-2xl">{location}</h5>
      </div>
    </div>
  );
};

export default Project;
