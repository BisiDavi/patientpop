/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import content from "@json/info-section.json";

export default function InfoSection() {
  return (
    <section className="container m-auto p-24 bg-white">
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
      <div className="iinfo-section container">
        {content.services.map((service, index) => {
          return service.position === "inverted" ? (
            <div key={index} className="info flex items-center">
              <div className="text">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href={service.link}>
                  <a>{service.linkName}</a>
                </Link>
              </div>
              <img
                src={service.image}
                height="100%"
                width="100%"
                alt={service.title}
              />
            </div>
          ) : (
            <div key={index} className="info flex items-center">
              <img
                src={service.image}
                height="100%"
                width="100%"
                alt={service.title}
              />
              <div className="text">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href={service.link}>
                  <a>{service.linkName}</a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
