import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-black/10 border-b h-[40px] flex items-center justify-between px-5 bg-zinc-700 text-white font-bold">
      <div>Logo</div>
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
