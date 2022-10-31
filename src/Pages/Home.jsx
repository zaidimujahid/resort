import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Component/Hero";
import Banner from "../Component/Banner";
import Service from "../Component/Service";
import FeaturedRooms from "../Component/FeaturedRooms";
import StyledHero from "../Component/StyledHero";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $499"
        >
          <Link to="/Rooms" className="btn-primary">
            our Rooms
          </Link>
        </Banner>
      </Hero>
      <Service />
      <FeaturedRooms />
      <StyledHero />
    </>
  );
};

export default home;
