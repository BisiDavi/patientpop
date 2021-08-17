import Layout from "@layout/layout";
import { HomeBanner, InfoSection, LearnHowSection } from "@components/.";

export default function Home() {
  return (
    <Layout title="Doctor Reputation Management to Grow Your Practice | PatientPop">
      <HomeBanner />
      <InfoSection />
      <LearnHowSection />
    </Layout>
  );
}
