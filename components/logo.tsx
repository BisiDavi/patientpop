/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center w-60">
      <img src="/logo.png"  alt="logo" />
      <img src="/logo_text.png"  alt="logo" />
    </div>
  );
}
