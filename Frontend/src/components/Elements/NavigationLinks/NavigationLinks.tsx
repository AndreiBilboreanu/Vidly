import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";

export const NavigationLinks = ({ className }: { className: string }) => {
  const router = useRouter();
  return (
    <div className={clsx("flex font-semibold", className)}>
      <Link
        href="/"
        className={clsx(
          router.pathname === "/"
            ? "text-white font-bold pointer-events:none cursor-default "
            : "text-grey-lighter hover:text-grey-dark transition ease-in-out duration-300"
        )}
      >
        Pagina principală
      </Link>
      <Link
        href="/"
        className={clsx(
          router.pathname === "/series"
            ? "text-white font-bold pointer-events:none cursor-default"
            : "text-grey-lighter hover:text-grey-dark transition ease-in-out duration-300"
        )}
      >
        Seriale
      </Link>
      <Link
        href="/"
        className={clsx(
          router.pathname === "/movies"
            ? "text-white font-bold pointer-events:none cursor-default"
            : "text-grey-lighter hover:text-grey-dark transition ease-in-out duration-300"
        )}
      >
        Filme
      </Link>
      <Link
        href="/"
        className={clsx(
          router.pathname === "/my-list"
            ? "text-white font-bold pointer-events:none cursor-default"
            : "text-grey-lighter hover:text-grey-dark transition ease-in-out duration-300"
        )}
      >
        Lista mea
      </Link>
    </div>
  );
};
