import type { SVG } from "@/types";

const Clipboard = ({ fill, height, size, width, ...props }: SVG) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="6"
        y="4"
        width="12"
        height="16"
        rx="2"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M9 4.5C9 3.67 9.67 3 10.5 3H13.5C14.33 3 15 3.67 15 4.5V6H9V4.5Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 10H15"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 14H13"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Clipboard;
