/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import content from "@json/info-section.json";

export default function InfoSection() {
  function displayInfoText(service) {
    return (
      <div className="text wtext w-2/5">
        <h3 className="text-5xl font-bold my-4">{service.title}</h3>
        <p className="text-xl leading-8 my-4 text-gray-600 font-medium">
          {service.text}
        </p>
        <Link href={service.link}>
          <a className="text-xl font-semibold border-b-4 border-green-400 pb-2 text-gray-600">
            {service.linkName}
          </a>
        </Link>
      </div>
    );
  }
  return (
    <section className="container m-auto py-20 bg-white">
      <div className="patient-satisfaction">
        <h6 className="text-sm text-center text-green-500 font-bold">
          PATIENT SATISFACTION
        </h6>
        <h1 className="text-6xl m-auto text-center w-4/6 my-6 font-semibold text-gray-600">
          {content.intro.title}
        </h1>
        <p className="text-2xl w-3/4 text-center m-auto my-4 leading-9 text-gray-600">
          {content.intro.text}
        </p>

        <div className="source">
          <p className="text-right text-gray-400 text-sm">
            {content.intro.info}
          </p>
          <p className="text-right text-sm text-gray-400">
            {content.intro.category}
          </p>
        </div>
      </div>
      <div className="info-section container">
        {content.services.map((service, index) => {
          return service.position === "inverted" ? (
            <div
              key={index}
              className="info flex items-center justify-center my-16"
            >
              {displayInfoText(service)}
              <img
                className="max-w-2xl ml-12"
                src={service.image}
                height="100%"
                width="100%"
                alt={service.title}
              />
            </div>
          ) : (
            <div
              key={index}
              className="info flex items-center justify-center my-16"
            >
              <img
                src={service.image}
                className="max-w-2xl mr-12"
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
