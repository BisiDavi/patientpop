import { Button } from "@components/.";

export function Notify({ text, buttonText, className }: Notify) {
  return (
    <>
      <div
        className={` ${className} notify flex items-center py-4 justify-center fixed bottom-0 bg-white w-full`}
      >
        <p className="text-sm font-normal leading-4 text-center lg:text-lg lg:font-semibold text-gray-500 mb-0">
          {text}
        </p>
        <Button
          className="py-1 text-sm lg:text-md px-4 mx-2 lg:mx-8"
          text={buttonText}
        />
      </div>
      <style jsx>
        {`
          .notify.flex {
            box-shadow: 0 -3px 3px -3px rgba(0, 0, 0, 0.25);
          }
        `}
      </style>
    </>
  );
}

interface Notify {
  text: string;
  buttonText: string;
  className: string;
}

export default function FooterNotify() {
  return (
    <div className="footerNotify">
      <Notify
        text="Instantly see how you compare to other practices in your local area
          and specialty."
        buttonText="Compare"
        className="hidden lg:flex"
      />
      <Notify
        text="How do you compare to competitors?"
        buttonText="Go"
        className="flex lg:hidden"
      />
    </div>
  );
}
