import { Logo } from "../Logo/Logo";

export const Navbar = () => {
  return (
    <nav className="px-3xl h-4xl flex items-center">
      <Logo />
      <div className="flex ">
        <p>Pagina principală</p>
        <p> Seriale</p>
        <p>Filme</p>
        <p>Lista mea</p>
      </div>
    </nav>
  );
};
