import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-black/10 border-b h-[40px] flex items-center justify-between px-5 bg-zinc-700 text-white font-bold">
      <svg
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="fill-white"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path d="M15.927 23.959l-9.823-5.797 9.817 13.839 9.828-13.839-9.828 5.797zM16.073 0l-9.819 16.297 9.819 5.807 9.823-5.801z"></path>{" "}
        </g>
      </svg>

      <h2>Ethereum Block Explorer</h2>

      <ul className="flex items-center gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
