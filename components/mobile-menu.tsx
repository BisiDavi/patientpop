/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import menuLinks from "@json/menu.json";
import { Hamburger } from "@components/.";

export default function Mobilemenu({
  showMobileMenu,
  mobileMenuHandler,
}: MobilemenuProps) {
  const hamburgerStyle = showMobileMenu ? "opened" : "";

  return (
    <div className="lg:hidden mobileMenu absolute top-0 h-screen bg-white w-full">
      <header className="flex items-center justify-between mx-6 my-4">
        <img src="./logo-white.png" alt="logo" />
        <Hamburger
          className={`lg:hidden" ${hamburgerStyle}`}
          btnClick={mobileMenuHandler}
        />
      </header>
      <div className="menu-links flex flex-col px-8">
        {menuLinks.header.map((link, index) => (
          <Link href={link.link} key={index} passHref>
            <a className="my-2">{link.name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}

interface MobilemenuProps {
  showMobileMenu: boolean;
  mobileMenuHandler: () => void;
}
