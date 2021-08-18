/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <a className="flex items-center w-60">
        <img src="/logo.png" alt="logo" />
        <img src="/logo_text.png" alt="logo" />
      </a>
    </Link>
  );
}
