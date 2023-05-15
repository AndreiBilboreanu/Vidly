import { Logo } from "../Elements/Logo/Logo";
import Link from "next/link";
export const Navbar = () => {
  return (
    <nav className="px-3xl h-4xl flex items-center">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex ">
        <Link href="/">
          <p>Pagina principală</p>
        </Link>
        <Link href="/">
          <p> Seriale</p>
        </Link>
        <Link href="/">
          <p>Filme</p>
        </Link>
        <Link href="/">
          <p>Lista mea</p>
        </Link>
      </div>
    </nav>
  );
};
