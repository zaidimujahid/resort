import React from "react";
import Hero from "../Component/Hero";
import Banner from "../Component/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../Component/RoomsContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Check our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
