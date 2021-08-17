import { Button } from "@components/.";

export default function HomeBanner() {
  return (
    <section className="home-banner w-100 flex justify-center items-start">
      <div className="container pt-20">
        <h1 className="text-5xl font-bold text-gray-600 leading-loose">
          Manage your
        </h1>
        <h1 className="text-5xl font-bold text-gray-600 leading-none mb-6">
          reputation
        </h1>
        <p className="text-xl text-gray-500 font-medium leading-8 w-96 mb-8">
          Get valuable feedback from more patients and experience the positive
          effects it has on your online reputation.
        </p>
        <Button className="py-4 ml-0" text="Request demo" />
      </div>
      <style>
        {`
          .home-banner{
            background-image:url("/homebanner.webp");
            background-position:center;
            background-size:cover;
            height:80vh;
          }
        `}
      </style>
    </section>
  );
}
