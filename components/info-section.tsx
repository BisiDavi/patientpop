/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import content from "@json/info-section.json";

export default function InfoSection() {
  function displayInfoText(service) {
    return (
      <div className="text lg:w-2/5 order-2 lg:order-none px-10 lg:px-0">
        <h3 className="text-2xl font-medium text-gray-800 lg:text-5xl lg:font-bold my-4">
          {service.title}
        </h3>
        <p className="text-lg font-normal leading-6 lg:text-xl lg:leading-8 my-4 text-gray-600 lg:font-medium">
          {service.text}
        </p>
        <Link href={service.link}>
          <a className="text-md lg:text-xl font-semibold border-b-4 border-green-400 pb-2 text-gray-600">
            {service.linkName}
          </a>
        </Link>
      </div>
    );
  }
  return (
    <section className="container m-auto py-20 bg-white">
      <div className="patient-satisfaction px-6 lg:px-0">
        <h6 className="text-sm text-center text-green-500 font-bold">
          PATIENT SATISFACTION
        </h6>
        <h1 className="text-2xl lg:text-5xl m-auto text-center w-5/6 lg:w-2/5 my-6 lg:font-medium text-gray-700 lg:leading-tight">
          {content.intro.title}
        </h1>
        <p className="text-xl font-normal leading-7 lg:text-xl lg:leading-8 my-4 text-gray-500 lg:font-normal lg:w-1/2 lg:m-auto">
          {content.intro.text}
        </p>

        <div className="source flex items-center lg:flex-col lg:items-end xl:mr-32">
          <p className="text-right text-gray-400 text-xs">
            {content.intro.info}
          </p>
          <p className="text-right text-xs text-gray-400">
            {content.intro.category}
          </p>
        </div>
      </div>
      <div className="info-section container">
        {content.services.map((service, index) => {
          return service.position === "inverted" ? (
            <div
              key={index}
              className="info flex flex-col lg:flex-row items-center justify-center my-16"
            >
              {displayInfoText(service)}
              <img
                className="max-w-2xl xl:ml-12 order-1 px-6 lg:px-0 lg:order-none"
                src={service.image}
                height="100%"
                width="100%"
                alt={service.title}
              />
            </div>
          ) : (
            <div
              key={index}
              className="info md:flex-col lg:flex-row lg:flex items-center justify-center my-16"
            >
              <img
                src={service.image}
                className="max-w-2xl xl:mr-12 order-1 px-6 lg:px-0 lg:order-none"
                height="100%"
                width="100%"
                alt={service.title}
              />
              {displayInfoText(service)}
            </div>
          );
        })}
      </div>
    </section>
  );
}
