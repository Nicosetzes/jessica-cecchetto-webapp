import type { SVG } from "@/shared/types";

const GradualExposure = ({ fill, height, size, width, ...props }: SVG) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="6" cy="18" r="0.8" fill={fill} />
      <circle cx="9" cy="15" r="0.8" fill={fill} />
      <circle cx="12" cy="12" r="0.8" fill={fill} />
      <circle cx="15" cy="9" r="0.8" fill={fill} />
      <path
        d="M18 6V18"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 6L21 7.5L18 9"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GradualExposure;
