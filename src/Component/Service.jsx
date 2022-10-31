import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Service extends Component {
  state = {
    services: [
      {
        icon: <FaShuttleVan color="orange" />,
        title: "Free Cocktails",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaBeer color="orange" />,
        title: "Endless Hiking",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaCocktail color="orange" />,
        title: "Free Shuttle",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaHiking color="orange" />,
        title: "Strongest Beer",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <div title="services" />
        <div className="services-center">
          {this.state.services.map((item) => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
