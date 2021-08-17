import { Button } from "@components/.";

export default function Notify() {
  return (
    <div className="flex items-center py-4 justify-center fixed bottom-0 bg-white w-full">
      <p className="text-xl font-semibold text-gray-500 mb-0">
        Instantly see how you compare to other practices in your local area and
        specialty.
      </p>
      <Button className="py-1 mx-8" text="Compare" />
    </div>
  );
}
