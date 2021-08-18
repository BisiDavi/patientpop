/* eslint-disable @next/next/no-img-element */
import { theme } from "@styles/colors";

export default function Button({
  text,
  className,
  withIcon = true,
}: ButtonProps) {
  return (
    <>
      <button
        className={`${className} button flex items-center text-white lg:px-6 lg:py-2 mx-4 rounded-full font-bold`}
      >
        {text}
        {withIcon && (
          <img src="./arrow-icon.png" className="ml-6" alt="right icon" />
        )}
      </button>
      <style jsx>
        {`
          .button {
            background-color: ${theme.colors.green};
          }
        `}
      </style>
    </>
  );
}

interface ButtonProps {
  text: string;
  className?: string;
  withIcon?: boolean;
}
