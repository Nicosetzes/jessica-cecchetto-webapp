import type { SVG } from "@/shared/types";

const EmotionalExpression = ({ fill, height, size, width, ...props }: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    viewBox="0 0 24 24"
    width={size || width || 24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 5H18C19.7 5 21 6.3 21 8V13C21 14.7 19.7 16 18 16H11L7 19V16H6C4.3 16 3 14.7 3 13V8C3 6.3 4.3 5 6 5Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M12 12.8L10.4 11.2C9.8 10.6 9.8 9.6 10.4 9C11 8.4 12 8.5 12.5 9.1L12 9.6L11.5 9.1C12 8.5 13 8.4 13.6 9C14.2 9.6 14.2 10.6 13.6 11.2L12 12.8Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EmotionalExpression;
