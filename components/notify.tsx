import { Button } from "@components/.";

export default function Notify() {
  return (
    <>
      <div className="notify flex items-center py-4 justify-center fixed bottom-0 bg-white w-full">
        <p className="text-sm leading-4 text-center lg:text-lg font-semibold text-gray-500 mb-0">
          Instantly see how you compare to other practices in your local area
          and specialty.
        </p>
        <Button className="py-1 mx-8" text="Compare" />
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
