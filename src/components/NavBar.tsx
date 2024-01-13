"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FunctionComponent, useEffect, useState } from "react";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <span
        className="hover:text-green-500"
        onClick={() => setActiveItem(name)}
      >
        {name}
      </span>
    </Link>
  ) : null;
};

export function NavBar() {
  const [activeItem, setActiveItem] = useState<string>("");
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/Projects") setActiveItem("Projects");
    if (pathname === "/Resume") setActiveItem("Resume");
  }, [pathname]);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold text-green-500 text-xl border-b-4 border-green-700 md:text-2xl">
        {activeItem}
      </span>
      <div className="text-red-500 text-lg space-x-5 flex">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/Projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/Resume"
        />
      </div>
    </div>
  );
}
