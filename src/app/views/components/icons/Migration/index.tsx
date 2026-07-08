import type { SVG } from "@/types";

const Migration = ({ fill, height, size, width, ...props }: SVG) => {
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
      <path d="M4 12H20" stroke={fill} strokeWidth="1.5" />
      <path
        d="M12 4C14.5 6.2 16 9 16 12C16 15 14.5 17.8 12 20"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M12 4C9.5 6.2 8 9 8 12C8 15 9.5 17.8 12 20"
        stroke={fill}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Migration;
