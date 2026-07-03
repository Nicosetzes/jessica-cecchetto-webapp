import type { SVG } from "@/shared/types";

const SelfEsteem = ({ fill, height, size, width, ...props }: SVG) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      width={size || width || 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="9" r="3" stroke={fill} strokeWidth="1.5" />
      <path
        d="M6 20C6.8 17.5 9.1 16 12 16C14.9 16 17.2 17.5 18 20"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 4L18.5 5.2L20 5.5L18.8 6.5L19.1 8L18 7.2L16.9 8L17.2 6.5L16 5.5L17.5 5.2L18 4Z"
        stroke={fill}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SelfEsteem;
