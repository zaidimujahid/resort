import React from "react";
function Practice() {
  const Data = [
    {
      id: 401,
      name: "there",
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
    },
    {
      id: 402,
      name: "there",
    },
    {
      id: 403,
      name: "there",
    },
    {
      id: 405,
      name: "there",
    },
  ];
  return (
    <div>
      {Data.map((used) => (
        <div key={used.id}>
          <h6>{used.name}</h6>
          <p>{used.description}</p>
          <p>{used.id}</p>
        </div>
      ))}
    </div>
  );
}
export default Practice;
