import type { SVG } from "@/types";

const Copy = ({ fill, height, size, width, ...props }: SVG) => {
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
        x="9"
        y="7"
        width="10"
        height="12"
        rx="2"
        stroke={fill}
        strokeWidth="1.5"
      />

      <path
        d="M15 5H7C5.9 5 5 5.9 5 7V15"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Copy;
