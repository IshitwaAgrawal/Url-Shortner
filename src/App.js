import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Statistics from "./components/Statistics";
import CallToAction from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <CallToAction />
      <Statistics />
      <Footer />
    </>
  );
};

export default App;
