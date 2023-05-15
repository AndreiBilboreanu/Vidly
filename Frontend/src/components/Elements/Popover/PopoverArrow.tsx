import * as RadixPopover from "@radix-ui/react-popover";
import React from "react";
type PopoverArrowProps = RadixPopover.PopoverArrowProps;

export const PopoverArrow = React.forwardRef<void, PopoverArrowProps>(
  ({ ...props }) => {
    return (
      <RadixPopover.Arrow
        {...props}
        className="h-xs w-lg fill-white "
      />
    );
  }
);

PopoverArrow.displayName = "PopoverArrow";

// export const PopoverArrow = RadixPopover.Arrow;
