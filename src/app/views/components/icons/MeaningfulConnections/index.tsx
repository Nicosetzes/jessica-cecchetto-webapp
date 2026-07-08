import type { SVG } from "@/types";

const MeaningfulConnections = ({
  fill,
  height,
  size,
  width,
  ...props
}: SVG) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      width={size || width || 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="6" cy="16" r="2" stroke={fill} strokeWidth="1.5" />
      <circle cx="18" cy="16" r="2" stroke={fill} strokeWidth="1.5" />
      <path
        d="M8 16C9.5 11.5 14.5 11.5 16 16"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 7L12 10"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MeaningfulConnections;
