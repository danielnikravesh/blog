import cn from "classnames";
import React from "react";

import styles from "./styles.module.css";

interface ITooltipProps {
  children: React.ReactNode;
  className?: string;
}

function Tooltip({ children, className }: ITooltipProps) {
  return <div className={cn(styles.wrapper, className)}>{children}</div>;
}

export default Tooltip;
