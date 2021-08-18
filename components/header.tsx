import Link from "next/link";
import menuLinks from "@json/menu.json";
import { Logo, Button } from "@components/.";

export default function Header() {
  return (
    <header className="bg-gray flex justify-center bg-white shadow-md fixed top-0 w-full">
      <div className="content container flex items-center justify-between py-4 px-4 lg:px-20 ">
        <Logo />
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
      </div>
    </header>
  );
}
