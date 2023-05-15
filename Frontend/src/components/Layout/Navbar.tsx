import Link from "next/link";
import * as Popover from "./../Elements/Popover/index";
import { Logo } from "../Elements/Logo/Logo";
import { NavigationLinks } from "../Elements/NavigationLinks/NavigationLinks";

export const Navbar = () => {
  return (
    <nav className="px-3xl h-4xl flex items-center text-white select-none">
      <Link href="/" className="mr-lg">
        <Logo />
      </Link>

      <NavigationLinks className={"hidden md:inline-flex [&>*]:ml-md"} />

      <Popover.Root>
        <Popover.Trigger asChild className={"block md:hidden"}>
          <p className="text-white font-bold">Răsfoire</p>
        </Popover.Trigger>
        <Popover.Content
          className="bg-black-light w-[18rem] h-[20rem] border-0 border-t-2 border-white"
          sideOffset={20}
        >
          <NavigationLinks
            className={
              "flex-col md:flex-row h-full justify-around items-center"
            }
          />
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Root>
    </nav>
  );
};
