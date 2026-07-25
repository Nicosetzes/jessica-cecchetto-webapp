import type { SVG } from "@/types";

const SessionFee = ({ fill, height, size, width, ...props }: SVG) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      width={size || width || 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 8V16C4 17.1 4.9 18 6 18H13.5C14 18 14.5 17.8 14.9 17.4L19.4 12.9C20.2 12.1 20.2 10.9 19.4 10.1L14.9 5.6C14.5 5.2 14 5 13.5 5H6C4.9 5 4 5.9 4 7V8Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="11.5" r="1" stroke={fill} strokeWidth="1.5" />
    </svg>
  );
};

export default SessionFee;
