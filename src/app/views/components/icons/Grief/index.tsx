import type { SVG } from "@/types";

const Grief = ({ fill, height, size, width, ...props }: SVG) => {
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
        x="9"
        y="9"
        width="6"
        height="10"
        rx="1"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M12 4C13.5 5.4 13.5 7 12 8.5C10.5 7 10.5 5.4 12 4Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M7 20H17"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Grief;
