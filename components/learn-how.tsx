import { Button } from "@components/.";
import { theme } from "@styles/colors";

export default function LearnHowSection() {
  return (
    <>
      <section className="flex justify-center flex-col m-auto">
        <div className="row-1 flex items-center py-20">
          <div className="learn-how w-1/2 text-white text-center">
            <h5 className="text-white text-sm font-bold text-gray-200 my-2">
              LEARN HOW
            </h5>
            <p className="text-2xl">Attract more patients</p>
          </div>
          <div className="learn-how w-1/2 text-white text-center">
            <h5 className="text-white text-sm font-bold text-gray-200 my-2">
              LEARN HOW
            </h5>
            <p className="text-2xl">Modernize your patient experience</p>
          </div>
        </div>
        <div className="row-2 bg-gray-700 py-32 flex items-center justify-around text-white">
          <h3 className="text-3xl w-1/3 leading-snug font-semibold">
            Discover the only complete practice growth platform in healthcare.
          </h3>
          <Button className="px-12 py-4 " text="Schedule a demo" />
        </div>
      </section>
      <style jsx>
        {`
          section.flex {
            background-color: ${theme.colors.green};
          }
          .row-2 {
            background-color: ${theme.colors.gray};
          }
        `}
      </style>
    </>
  );
}
