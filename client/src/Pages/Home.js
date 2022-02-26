import React from "react";
import Caro from "../Component/Caro/Caro";
import Section from "../Component/Section/Section";
import Services from "../Component/Services/Services";
import Hero from "./Hero";
import Features from "../Component/Features/Features";
import Room from "../Component/Room/Room";
import Footer from "../Component/Footer/Footer";
import Contactus from "../Component/Contact Us/Contactus";
import Review from "../Component/Review/Review";
import Google from "../Component/Review/Google";

const Home = () => {
  return (
    <>
      <Caro />
      <Google />
      <Services />
      <Section />
      <Room />
      <Features />
      <Hero />
      <Contactus />
      <Footer />
    </>
  );
};

export default Home;
