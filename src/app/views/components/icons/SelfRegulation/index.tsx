import type { SVG } from "@/shared/types";

const SelfRegulation = ({ fill, height, size, width, ...props }: SVG) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="8" stroke={fill} strokeWidth="1.5" />
      <path
        d="M8 10.5C9 9.7 10 9.7 11 10.5C12 11.3 13 11.3 14 10.5C15 9.7 16 9.7 17 10.5"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 13.5C9 12.7 10 12.7 11 13.5C12 14.3 13 14.3 14 13.5C15 12.7 16 12.7 17 13.5"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SelfRegulation;
