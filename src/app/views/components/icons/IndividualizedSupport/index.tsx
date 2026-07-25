import type { SVG } from "@/types";

const IndividualizedSupport = ({
  fill,
  height,
  size,
  width,
  ...props
}: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    width={size || width || 24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9" stroke={fill} strokeWidth="1.5" />
    <path
      d="M15.5 8.5L13.5 15.5L8.5 17L10.5 10L15.5 8.5Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export default IndividualizedSupport;
