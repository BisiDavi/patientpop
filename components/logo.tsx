/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Logo({ offset }) {
  const mobileLogo = offset > 100 ? "/logo-white.png" : "/mobile-logo-gray.png";
  const visibleLogo = offset > 100 ? "lg:hidden" : "";
  return (
    <Link href="/" passHref>
      <a className="flex items-center">
        <div className="flex items-center lg:w-60 hidden lg:flex">
          <img src="/logo.png" alt="logo" />
          <img src="/logo_text.png" className={`${visibleLogo}`} alt="logo" />
        </div>
        <img src={mobileLogo} className="lg:hidden" alt="logo" />
      </a>
    </Link>
  );
}
