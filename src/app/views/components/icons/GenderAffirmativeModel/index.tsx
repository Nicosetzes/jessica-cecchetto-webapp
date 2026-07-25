import type { SVG } from "@/types";

const GenderAffirmativeModel = ({
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
    <circle cx="12" cy="9" r="3.5" stroke={fill} strokeWidth="1.5" />
    <path
      d="M4.5 7C6.5 4.5 9 3.2 12 3.2C15 3.2 17.5 4.5 19.5 7"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M5 19C7 15.8 9.2 14.2 12 14.2C14.8 14.2 17 15.8 19 19"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default GenderAffirmativeModel;
