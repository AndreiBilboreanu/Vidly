import * as RadixPopover from "@radix-ui/react-popover";
import clsx from "clsx";
import React from "react";

type PopoverTriggerProps = {
  width?: number;
  height?: number;
} & RadixPopover.PopoverTriggerProps;

export const PopoverTrigger = React.forwardRef<void, PopoverTriggerProps>(
  ({ width, height, className, ...props }) => {
    return (
      <RadixPopover.Trigger
        {...props}
        className={clsx(
          `w-[${width}]`,
          `h-[${height}]`,
          "bg-white shadow-md flex flex-col",
          className
        )}
      >
        {props.children}
      </RadixPopover.Trigger>
    );
  }
);
PopoverTrigger.displayName = "PopoverTrigger";
