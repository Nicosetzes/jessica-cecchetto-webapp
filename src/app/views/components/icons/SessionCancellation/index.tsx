import type { SVG } from "@/types";

const SessionCancellation = ({ fill, height, size, width, ...props }: SVG) => {
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
        x="4"
        y="6"
        width="16"
        height="14"
        rx="2"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path d="M8 4V8" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 4V8" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M4 10H20"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 14L14 18"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 14L10 18"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SessionCancellation;
