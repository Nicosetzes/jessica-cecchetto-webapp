type HamburgerProps = {
  fill?: string;
  filled?: boolean;
  height?: number;
  size?: number;
  width?: number;
} & React.SVGProps<SVGSVGElement>;

const Hamburger = ({
  fill = "var(--color-text-light)",
  filled,
  height,
  size,
  width,
  ...props
}: HamburgerProps) => {
  return (
    <svg
      width={size || width || 40}
      height={size || height || 40}
      viewBox="0 0 40 28"
      fill={filled ? fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0V4H40V0H0ZM0 12V16H40V12H0ZM0 24V28H40V24H0Z" fill={fill} />
    </svg>
  );
};

export default Hamburger;
