import Image from "next/image";
import * as logo from "../../../../public/VidlyLogo.png";

export const Logo = () => {
  return (
    <div>
      <Image className="h-2xl w-auto" src={logo} alt="VidlyLogo" />
    </div>
  );
};
