import type { SVG } from "@/shared/types";

const Expatriate = ({ fill, height, size, width, ...props }: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    width={size || width || 24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 21C12 21 18 15.7 18 10.5C18 7.2 15.3 4.5 12 4.5C8.7 4.5 6 7.2 6 10.5C6 15.7 12 21 12 21Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10.5" r="2.5" stroke={fill} strokeWidth="1.5" />
    <path d="M12 8V13" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M9.5 10.5H14.5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10.9 8.3C10.3 9 10 9.7 10 10.5C10 11.3 10.3 12 10.9 12.7"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M13.1 8.3C13.7 9 14 9.7 14 10.5C14 11.3 13.7 12 13.1 12.7"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Expatriate;
