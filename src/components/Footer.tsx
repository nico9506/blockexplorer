import Image from "next/image";
import logo from "../app/favicon.ico";

const Footer = () => {
  return (
    <div className="border-black/10 border-t h-[40px] flex items-center justify-center px-5 font-bold text-white bg-zinc-700">
      <a
        className="flex justify-center items-center gap-1"
        href="https://github.com/nico9506/blockexplorer"
        target="_blank"
      >
        <Image src={logo} width={40} height={40} alt="github icon" />
        <span>nico9506</span>
      </a>
    </div>
  );
};

export default Footer;
