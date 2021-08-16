import Image from "next/image";
export default function Logo() {
  return (
    <div>
      <Image src="/logo.png" height="100px" width="100px" alt="logo" />
    </div>
  );
}
