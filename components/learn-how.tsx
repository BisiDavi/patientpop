import { Button } from "@components/.";

export default function LearnHowSection() {
  return (
    <section>
      <div className="learn-how">
        <h5>LEARN HOW</h5>
        <p>Attract more patients</p>
      </div>
      <div>
        <h5>LEARN HOW</h5>
        <p>Modernize your patient experience</p>
      </div>
      <div>
        <h3>
          Discover the only complete practice growth platform in healthcare.
        </h3>
        <Button className="bg-green" text="Schedule a demo" />
      </div>
    </section>
  );
}
