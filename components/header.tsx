import Link from "next/link";
import menuLinks from "@json/menu.json";
import { Logo, Button } from "@components/.";

export default function Header() {
  return (
    <header className="bg-gray flex justify-center bg-white shadow-md">
      <div className="content container flex items-center justify-between py-8">
        <Logo />
        <ul className="flex align-items-center">
          {menuLinks.header.map((menu, index) => (
            <li className="mx-6 font-bold" key={index}>
              <Link href={menu.link} passHref>
                <a>{menu.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="signin flex items-center">
          <h3>Sign in</h3>
          <Button text="Free demo" />
        </div>
      </div>
    </header>
  );
}
