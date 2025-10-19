import React from "react";
import Banner from "./Banner";
import Catagories from "./Catagories";
import HeroSection from "./HeroSection";
import TrendingProducts from "../shop/TrendingProducts";
import DealSection from "./DealSection";
import PromoBanner from "./PromoBanner";
import Blogs from "../blogs/Blogs";

const Home = () => {
  return (
    <>
      <Banner />
      <Catagories />
      <HeroSection />
      <TrendingProducts />
      <DealSection />
      <PromoBanner />
      <Blogs />
    </>
  );
};

export default Home;
