import Image from "next/image";
import * as logo from "../../../public/VidlyLogo.png";

export const Logo = () => {
  return (
    <div>
      <Image className="h-xl w-auto" src={logo} alt="VidlyLogo" />
    </div>
  );
};
