import type { SVG } from "@/shared/types";

const Depression = ({ fill, height, size, width, ...props }: SVG) => {
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
        d="M8 16H16C18.2 16 20 14.2 20 12C20 9.8 18.2 8 16 8C15.5 5.7 13.5 4 11 4C8.5 4 6.4 5.8 6 8C3.8 8.3 2 10.1 2 12.3C2 14.4 3.8 16 6 16H8Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M9 18L9 20"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 18L12 21"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15 18L15 20"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Depression;
