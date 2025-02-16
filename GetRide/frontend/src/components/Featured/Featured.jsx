import React from "react";
import Card from "../Card/Card";
import Reserved from "../../assets/reserved.png";
import driver from "../../assets/driver.png";
import destination from "../../assets/destination.png";
import calendar from "../../assets/calendar.png";

const Featured = () => {
  return (
    <section className="featured">
      <Card
        imgSrc={destination}
        title="пронајди дестинација"
        description={
          "jsahddfjsdh jsadh jhsajd hasjdh jsahddfjsdh jsadh jhsajd hasjdhjsahddfjsdh jsadh jhsajd hasjdh jsahddfjsdh jsadh jhsajd hasjdh"
        }
      />
      <Card
        imgSrc={driver}
        title="пронајди возач"
        description={
          "jsahddfjsdh jsadh jhsajd hasjdh jsahddfjsdh jsadh jhsajd hasjdhjsahddfjsdh jsadh jhsajd hasjdh jsahddfjsdh jsadh jhsajd hasjdh"
        }
      />

      <Card
        imgSrc={Reserved}
        title="резервирај"
        description={
          "jsahddfjsdh jsadh jhsajd hasjdh jsahddfjsdh jsadh jhsajd hasjdhjsahddfjsdh jsadh jhsajd hasjdh jsahddfjsdh jsadh jhsajd hasjdh"
        }
      />
      <Card
        imgSrc={calendar}
        title="пристигни на време"
        description={
          "jsahddfjsdh jsadh jhsajd hasjdh jsahddfjsdh jsadh jhsajd hasjdhjsahddfjsdh jsadh jhsajd hasjdh jsahddfjsdh jsadh jhsajd hasjdh"
        }
      />
    </section>
  );
};

export default Featured;
