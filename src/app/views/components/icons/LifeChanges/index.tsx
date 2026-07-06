import type { SVG } from "@/shared/types";

const LifeChanges = ({ fill, height, size, width, ...props }: SVG) => {
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
        d="M8 7H5V4"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5 7C6.6 5.1 8.9 4 11.5 4C15.6 4 19 7.4 19 11.5"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M16 17H19V20"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19 17C17.4 18.9 15.1 20 12.5 20C8.4 20 5 16.6 5 12.5"
        stroke={fill}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default LifeChanges;
