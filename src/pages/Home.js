import React from "react";
import { HeroSection, AboutUsSection, ContactUsSection } from "../components";
import Layout from "../layout/Layout";

const Home = () => (
  <Layout>
    <HeroSection />
    <AboutUsSection />
    <ContactUsSection />
  </Layout>
);

export default Home;
