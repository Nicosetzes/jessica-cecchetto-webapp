import type { SVG } from "@/shared/types";

const CopingStrategies = ({ fill, height, size, width, ...props }: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    viewBox="0 0 24 24"
    width={size || width || 24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 4L18 6V11C18 15 15.8 18 12 20C8.2 18 6 15 6 11V6L12 4Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 12L11.2 13.8L14.8 10"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CopingStrategies;
