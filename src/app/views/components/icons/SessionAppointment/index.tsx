import type { SVG } from "@/types";

const SessionAppointment = ({ fill, height, size, width, ...props }: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    width={size || width || 24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="4"
      y="5"
      width="16"
      height="15"
      rx="2"
      stroke={fill}
      strokeWidth="1.5"
    />
    <path d="M8 3V7" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 3V7" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 9H20" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M9.5 14L11 15.5L14.5 12"
      stroke={fill}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SessionAppointment;
