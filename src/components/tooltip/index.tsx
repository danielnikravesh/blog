/* Used https://reacttraining.com/reach-ui/tooltip as the base */

import Portal from "@reach/portal";
import { TooltipPopup, TooltipProps, useTooltip } from "@reach/tooltip";

import React from "react";

import styles from "./styles.module.css";

const centered = (triggerRect: DOMRect, tooltipRect: DOMRect) => {
  const triggerCenter = triggerRect.left + triggerRect.width / 2;
  const left = triggerCenter - tooltipRect.width / 2;
  const maxLeft = window.innerWidth - tooltipRect.width - 2;

  const result = {
    left: Math.min(Math.max(2, left), maxLeft) + window.scrollX,
    top: triggerRect.top - 7 - tooltipRect.height + window.scrollY
  };

  return result as DOMRect;
};

function ModifiedTooltip({ children, label, ariaLabel }: TooltipProps) {
  const [trigger, tooltip] = useTooltip();

  const { isVisible, triggerRect } = tooltip;

  return (
    <>
      {React.cloneElement(children as React.ReactElement, trigger)}

      {isVisible && (
        <Portal>
          <div
            className={styles.triangle}
            style={{
              left: triggerRect && triggerRect.left - 4 + triggerRect.width / 2,
              top: triggerRect && triggerRect.top + window.scrollY - 7
            }}
          />
        </Portal>
      )}
      <TooltipPopup
        {...tooltip}
        label={label}
        ariaLabel={ariaLabel}
        className={styles.wrapper}
        position={centered}
      />
    </>
  );
}

export default ModifiedTooltip;
