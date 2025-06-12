import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 280 50" 
    xmlns="http://www.w3.org/2000/svg" 
    aria-label="Culinary Canvas Logo"
    {...props}
  >
    <text 
      x="0" 
      y="38" 
      fontFamily="Playfair Display, serif" 
      fontSize="36" 
      className="fill-primary dark:fill-primary-foreground"
      fontWeight="700"
    >
      Culinary Canvas
    </text>
  </svg>
);
export default Logo;
