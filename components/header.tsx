import Link from "next/link";
import menuLinks from "@json/menu.json";
import { Logo, Button } from "@components/.";

export default function Header() {
  return (
    <header className="bg-gray">
      <div className="content container">
        <Logo />
        <ul className="flex align-items-center">
          {menuLinks.header.map((menu, index) => (
            <li key={index}>
              <Link href={menu.link} passHref>
                <a>{menu.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <h3>Sign in</h3>
        <Button className="p-20" text="Free demo" />
      </div>
    </header>
  );
}
