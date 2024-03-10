"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "regex",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "atlasmap",
    href: "/atlasmap",
    icon: DocumentDuplicateIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-[#2b2d31] text-[#959ba4] p-3 text-md font-medium hover:bg-[#404249] hover:text-white md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-[#404249] text-white": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

// #1E1F22
// #313338
// #404249
