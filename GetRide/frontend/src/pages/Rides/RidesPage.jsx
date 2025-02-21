import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import FilterComp from "../../components/Filter/FilterComp";
import RidesComp from "../../components/Rides/RidesComp";
import classes from "./RidesPage.module.css";

const RidesPage = () => {
  const { t } = useTranslation();

  const [rides, setRides] = useState([]);
  const [filteredRides, setFilteredRides] = useState([]);

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await fetch("");
        if (!response.ok) {
          throw new Error("Error fetching rides data");
        }
        const data = await response.json();
        setRides(data);
        setFilteredRides(data);
      } catch (error) {
        console.error("Error fetching rides:", error);
      }
    };

    fetchRides();
  }, []);

  return (
    <div className={classes.container}>
      <FilterComp rides={rides} setFilteredRides={setFilteredRides} />
      <RidesComp rides={filteredRides} />
    </div>
  );
};
export default RidesPage;
