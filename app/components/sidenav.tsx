import Link from "next/link";
import NavLinks from "@/app/components/nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function SideNav() {
  return (
    <div className="flex flex-col h-full px-3 py-3 md:px-2">
      <Link
        className="mb-2 flex h-20 items-center justify-center rounded-md bg-[#1E1F22] p-4 md:h-40"
        href="/"
      >
        <div className="w-32 md:w-40">
          <Image
            src="/Path_of_Exile_Logo.png"
            className="block"
            width={200}
            height={100}
            alt="poe logo"
          />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-[#2b2d31] md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-[#2b2d31] text-[#959ba4] p-3 text-sm font-medium hover:bg-[#404249] hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
