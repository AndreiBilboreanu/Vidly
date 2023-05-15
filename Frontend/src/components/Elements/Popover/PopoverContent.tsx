import * as RadixPopover from "@radix-ui/react-popover";
import clsx from "clsx";
import React from "react";

type PopoverContentProps = {
  width?: number;
  height?: number;
} & RadixPopover.PopoverContentProps;

export const PopoverContent = React.forwardRef<void, PopoverContentProps>(
  ({ width, height, className, ...props }) => {
    return (
      <RadixPopover.Content
        {...props}
        className={clsx(
          `w-[${width}]`,
          `h-[${height}]`,
          "bg-white shadow-md flex flex-col",
          className
        )}
      >
        {props.children}
      </RadixPopover.Content>
    );
  }
);
PopoverContent.displayName = "PopoverContent";
