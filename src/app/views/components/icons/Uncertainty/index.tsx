import type { SVG } from "@/types";

const Uncertainty = ({ fill, height, size, width, ...props }: SVG) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 18C7 15 10 13 14 12"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17.5 8.5C17.5 7.4 18.4 6.5 19.5 6.5C20.6 6.5 21.5 7.3 21.5 8.4C21.5 9.1 21.1 9.6 20.5 10L19.7 10.6C19.3 10.9 19 11.3 19 11.8V12.2"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="19" cy="15.5" r="0.8" fill={fill} />
    </svg>
  );
};

export default Uncertainty;
