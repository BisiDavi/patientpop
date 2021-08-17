export default function Button({ text, className, withIcon }: ButtonProps) {
  return (
    <button
      className={`${className} bg-green-500 text-white px-6 py-2 mx-4 rounded-full font-bold`}
    >
      {text}
    </button>
  );
}

interface ButtonProps {
  text: string;
  className?: string;
  withIcon?: boolean;
}
