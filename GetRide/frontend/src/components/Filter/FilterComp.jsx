import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import classes from "./FilterComp.module.css";

const FilterComp = ({ rides, setFilteredRides }) => {
  const { t } = useTranslation();

  const [sortBy, setSortBy] = useState("");
  const [timeFilter, setTimeFilter] = useState([]);
  const [preferences, setPreferences] = useState({
    maxTwoPassengers: false,
    petsAllowed: false,
    smokingAllowed: false,
  });

  const applyFilters = (
    sortValue = sortBy,
    timeValue = timeFilter,
    preferences = preferences
  ) => {
    let filtered = [...rides];

    if (timeValue.length > 0) {
      filtered = filtered.filter((ride) => {
        const [hours] = ride.departureTime.split(":").map(Number);
        return (
          (timeValue.includes("before-06") && hours < 6) ||
          (timeValue.includes("06-12") && hours >= 6 && hours < 12) ||
          (timeValue.includes("12-18") && hours >= 12 && hours < 18) ||
          (timeValue.includes("after-18") && hours >= 18)
        );
      });
    }

    Object.keys(preferences).forEach((key) => {
      if (preferences[key]) filtered = filtered.filter((ride) => ride[key]);
    });

    const sortOptions = {
      time: (a, b) => a.departureTime.localeCompare(b.departureTime),
      price: (a, b) => a.price - b.price,
      duration: (a, b) => a.duration - b.duration,
      rating: (a, b) => a.rating - b.rating,
    };

    if (sortOptions[sortValue]) filtered.sort(sortOptions[sortValue]);

    setFilteredRides(filtered);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    applyFilters(value, timeFilter, preferences);
  };

  const handleTimeFilterChange = (value) => {
    setTimeFilter((prev) =>
      prev.includes(value)
        ? prev.filter((time) => time !== value)
        : [...prev, value]
    );
  };

  const handlePreferenceChange = (key) => {
    setPreferences((prev) => {
      const updatedPreferences = { ...prev, [key]: !prev[key] };
      applyFilters(sortBy, timeFilter, updatedPreferences);
      return updatedPreferences;
    });
  };

  const resetFilters = () => {
    setSortBy("");
    setTimeFilter([]);
    setPreferences({
      maxTwoPassengers: false,
      petsAllowed: false,
      smokingAllowed: false,
    });
    setFilteredRides(rides);
  };

  return (
    <div className={classes.sidebar}>
      <div className={classes.header}>
        <h4>{t("filterCompTitleOne")}</h4>
        <button className={classes.resetButton} onClick={resetFilters}>
          {t("filterCompButtonOne")}
        </button>
      </div>

      {["time", "price", "duration", "rating"].map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="sortBy"
            value={option}
            checked={sortBy === option}
            onChange={() => handleSortChange(option)}
          />
          {option === "time" && t("filterCompSortOne")}
          {option === "price" && t("filterCompSortTwo")}
          {option === "duration" && t("filterCompSortThree")}
          {option === "rating" && t("filterCompSortFour")}
        </label>
      ))}

      <h4>{t("filterCompTitleTwo")}</h4>
      {["before-06", "06-12", "12-18", "after-18"].map((value, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={value}
            checked={timeFilter.includes(value)}
            onChange={() => handleTimeFilterChange(value)}
          />
          {value === "before-06" && t("filterCompTimeOne")}
          {value === "06-12" && "06:00 - 12:00"}
          {value === "12-18" && "12:00 - 18:00"}
          {value === "after-18" && t("filterCompTimeTwo")}
        </label>
      ))}

      <h4>{t("filterCompTitleThree")}</h4>
      {Object.entries(preferences).map(([key, value]) => (
        <label key={key} className={value ? classes.selected : ""}>
          <input
            type="checkbox"
            checked={value}
            onChange={() => handlePreferenceChange(key)}
          />
          {key === "maxTwoPassengers" && t("filterCompBenefitsOne")}
          {key === "petsAllowed" && t("filterCompBenefitsTwo")}
          {key === "smokingAllowed" && t("filterCompBenefitsThree")}
        </label>
      ))}

      <button className={classes.filterButton} onClick={applyFilters}>
        {t("filterCompButtonTwo")}
      </button>
    </div>
  );
};

export default FilterComp;
