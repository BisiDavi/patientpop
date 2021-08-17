import { theme } from "@styles/colors";

export default function Button({ text, className, withIcon }: ButtonProps) {
  return (
    <>
      <button
        className={`${className} button text-white px-6 py-2 mx-4 rounded-full font-bold`}
      >
        {text}
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
