import type { SVG } from "@/types";

const SessionDuration = ({ fill, height, size, width, ...props }: SVG) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      width={size || width || 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="8" stroke={fill} strokeWidth="1.5" />
      <path
        d="M12 8V12"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 12L15 14"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M9 3H15" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export default SessionDuration;
