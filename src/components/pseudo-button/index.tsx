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
  type: "primary" | "secondary";
  size: "small" | "big";
}

function PseudoButton({
  children,
  className,
  type,
  size,
  ...linkProps
}: IPseudoButtonProps) {
  return (
    <a
      className={cn(styles.button, styles[type], styles[size], className)}
      {...linkProps}
    >
      {children}
    </a>
  );
}

PseudoButton.defaultProps = {
  type: "primary",
  size: "small"
};

export default PseudoButton;
