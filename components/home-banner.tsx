import { Button } from "@components/.";

export default function HomeBanner() {
  return (
    <>
      <section className="home-banner flex justify-center items-start h-screen">
        <div className="container lg:pt-20 lg:ml-40 mt-20 lg:mt-0 items-center lg:items-start flex flex-col">
          <h1 className="text-center lg:text-left text-3xl lg:text-6xl font-bold text-gray-700 xl:w-1/4 my-2 leading-tight lg:mt-24">
            Manage your reputation
          </h1>
          <p className="text-center lg:text-left text-lg text-gray-500 font-medium leading:4 lg:leading-8 lg:w-96 mt-6 mb-8">
            Get valuable feedback from more patients and experience the positive
            effects it has on your online reputation.
          </p>
          <Button className="py-2 lg:py-4 ml-0 lg:w-40" text="Request demo" />
        </div>
      </section>
      <style jsx>
        {`
          .home-banner {
            background-image: url("/homebanner.webp");
            background-position: center;
            background-size: cover;
          }
        `}
      </style>
    </>
  );
}
