import { useState } from "react";
import Link from "next/link";
import menuLinks from "@json/menu.json";
import useViewport from "@hooks/useViewport";
import { Logo, Button, Hamburger, Mobilemenu } from "@components/.";

export default function Header() {
  const { offset } = useViewport();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const headerStyle = offset > 100 ? "bg-white" : "";

  function mobileMenuHandler() {
    setShowMobileMenu(!showMobileMenu);
  }

  const hamburgerStyle = showMobileMenu ? "opened" : "";

  return (
    <header
      className={`bg-gray flex justify-center ${headerStyle} lg:bg-white lg:shadow-md fixed top-0 w-full`}
    >
      <nav className="content container flex items-center justify-between p-2 lg:px-20 ">
        <Logo offset={offset} />
        <ul className="lg:flex hidden kwitems-center">
          {menuLinks.header.map((menu, index) => (
            <li className="mx-6 font-bold" key={index}>
              <Link href={menu.link} passHref>
                <a>{menu.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="signin hidden lg:flex items-center">
          <h3>Sign in</h3>
          <Button text="Free demo" />
        </div>
        <Hamburger
          className={`lg:hidden" ${hamburgerStyle}`}
          btnClick={mobileMenuHandler}
        />
      </nav>
      {showMobileMenu && (
        <Mobilemenu
          showMobileMenu={showMobileMenu}
          mobileMenuHandler={mobileMenuHandler}
        />
      )}
    </header>
  );
}
