import type { SVG } from "@/shared/types";

const Anxiety = ({ fill, height, size, width, ...props }: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    width={size || width || 24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.5 10.5C3.3 9.9 4.1 9.9 4.9 10.5C5.7 11.1 6.5 11.1 7.3 10.5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16.7 10.5C17.5 9.9 18.3 9.9 19.1 10.5C19.9 11.1 20.7 11.1 21.5 10.5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 4C10.8 4 9.9 4.7 9.5 5.8C7.9 6 6.8 7.2 6.8 8.8C6.8 9.9 7.3 10.8 8.2 11.4C7.5 12 7.1 12.9 7.1 14C7.1 15.9 8.6 17.4 10.5 17.4H12M12 4C13.2 4 14.1 4.7 14.5 5.8C16.1 6 17.2 7.2 17.2 8.8C17.2 9.9 16.7 10.8 15.8 11.4C16.5 12 16.9 12.9 16.9 14C16.9 15.9 15.4 17.4 13.5 17.4H12"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 4V17.4"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10 8.2C9.4 8.6 9.4 9.4 10 9.8"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14 8.2C14.6 8.6 14.6 9.4 14 9.8"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Anxiety;
