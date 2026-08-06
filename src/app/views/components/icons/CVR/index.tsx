import type { SVG } from "@/types";

const CVR = ({ fill, height, size, width, ...props }: SVG) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      width={size || width || 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        stroke={fill}
        strokeWidth="1.8"
      />
      <path d="M7 9H17" stroke={fill} strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M7 13H11"
        stroke={fill}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="16.5" cy="15.5" r="1.6" stroke={fill} strokeWidth="1.8" />
    </svg>
  );
};

export default CVR;
