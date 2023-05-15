import * as RadixPopover from "@radix-ui/react-popover";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";

type PopoverTriggerProps = {
  width?: number;
  height?: number;
} & RadixPopover.PopoverTriggerProps;

export const PopoverTrigger = React.forwardRef<void, PopoverTriggerProps>(
  ({ width, height, className, ...props }) => {
    const [arrow, setArrow] = React.useState(false);
    const arrowRevert = () => {
      if (arrow)
        return (
          <ChevronUpIcon className="h-6 w-6  rotate-0 transition ease-in-out duration-150" />
        );
      else
        return (
          <ChevronUpIcon className="h-6 w-6 rotate-180 transition ease-in-out duration-150" />
        );
    };
    return (
      <RadixPopover.Trigger
        {...props}
        onClick={() => setArrow(!arrow)}
        className={clsx(
          `w-[${width}]`,
          `h-[${height}]`,
          "cursor-pointer",
          className
        )}
      >
        <div className="flex">
          {props.children}
          {arrowRevert()}
        </div>
      </RadixPopover.Trigger>
    );
  }
);
PopoverTrigger.displayName = "PopoverTrigger";
