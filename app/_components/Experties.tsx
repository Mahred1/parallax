import React from "react";

type Details = {
  title: string;
  postion: number;
};

const Experties = ({ details }: { details: Details }) => {
  return (
    <li>
      <div>
        <h5>{details.postion}</h5>
        <h5>{details.title}</h5>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
      >
        <path
          d="M23.1956 11.562L24.0673 23.5081L21.9165 23.6614L21.3193 15.484L21.2803 14.947L10.782 25.2187L9.27196 23.6754L19.7703 13.4037L19.2342 13.3529L11.0704 12.5775L11.2713 10.4299L23.1956 11.562Z"
          stroke="black"
          stroke-width="0.5"
        />
      </svg>
    </li>
  );
};

export default Experties;
