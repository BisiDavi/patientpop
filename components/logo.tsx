import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center w-60">
      <Image src="/logo.png" height="50px" width="50px" alt="logo" />
      <Image src="/logo_text.png" height="30%" width="100%" alt="logo" />
    </div>
  );
}
