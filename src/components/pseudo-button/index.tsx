import cn from "classnames";
import React from "react";

import styles from "./styles.module.css";

interface IPseudoButtonProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: React.ReactNode;
  className?: string;
}

function PseudoButton({
  children,
  className,
  ...linkProps
}: IPseudoButtonProps) {
  return (
    <a className={cn(styles.button, className)} {...linkProps}>
      {children}
    </a>
  );
}

export default PseudoButton;
