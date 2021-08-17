import { Button } from "@components/.";

export default function HomeBanner() {
  return (
    <>
      <section className="home-banner w-100 flex justify-center items-start h-screen">
        <div className="container pt-20 ml-40">
          <h1 className="text-6xl font-bold text-gray-700 w-1/4 my-2 leading-tight mt-24">
            Manage your reputation
          </h1>
          <p className="text-xl text-gray-500 font-medium leading-8 w-96 mt-6 mb-8">
            Get valuable feedback from more patients and experience the positive
            effects it has on your online reputation.
          </p>
          <Button className="py-4 ml-0" text="Request demo" />
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
