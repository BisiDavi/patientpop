export default function Button({ text, className }: ButtonProps) {
  return <button className={className}>{text}</button>;
}

interface ButtonProps {
  text: string;
  className: string;
}
