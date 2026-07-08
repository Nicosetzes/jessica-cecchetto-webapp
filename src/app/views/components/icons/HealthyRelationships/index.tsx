import type { SVG } from "@/types";

const HealthyRelationships = ({ fill, height, size, width, ...props }: SVG) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="9" cy="12" r="4" stroke={fill} strokeWidth="1.5" />
      <circle cx="15" cy="12" r="4" stroke={fill} strokeWidth="1.5" />
      <path
        d="M12 9V15"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HealthyRelationships;
