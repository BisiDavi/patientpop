import Image from "next/image";
import Link from "next/link";
import content from "@json/info-section.json";

export default function InfoSection() {
  return (
    <section>
      <div className="patient-satisfaction">
        <h6>PATIENT SATISFACTION</h6>
        <h1>{content.intro.title}</h1>
        <p>{content.intro.text}</p>

        <div className="source">
          <p>{content.intro.info}</p>
          <p>{content.intro.category}</p>
        </div>
      </div>
      <div className="info-section">
        {content.services.map((service, index) => {
          return service.position === "inverted" ? (
            <div key={index} className="info">
              <div className="text">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href={service.link}>
                  <a>{service.linkName}</a>
                </Link>
              </div>
              <Image
                src={service.image}
                height="50%"
                width="50%"
                alt={service.title}
              />
            </div>
          ) : (
            <div key={index} className="info">
              <Image
                src={service.image}
                height="400px"
                width="400px"
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
