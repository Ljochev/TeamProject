import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import classes from "./PassengersComp.module.css";

const PassengersComp = ({ onAdd, passengers }) => {
  const { t } = useTranslation();
  const [localPassengers, setLocalPassengers] = useState({
    ...passengers,
    reducedMobility: [...(passengers.reducedMobility || [])],
  });
  const [isReducedMobilityOpen, setIsReducedMobilityOpen] = useState(false);

  const [reducedMobilityList, setReducedMobilityList] = useState(
    passengers.reducedMobility || []
  );

  const handleIncrement = (type) => {
    setLocalPassengers((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const handleDecrement = (type) => {
    setLocalPassengers((prev) => ({
      ...prev,
      [type]: Math.max(prev[type] - 1, 0),
    }));
  };

  const handleAddReducedMobility = () => {
    const updatedReducedMobility = [
      ...reducedMobilityList,
      { birthDate: "", disabilityType: "", isValid: false },
    ];

    setReducedMobilityList(updatedReducedMobility);

    setLocalPassengers((prev) => ({
      ...prev,
      reducedMobility: updatedReducedMobility,
      reducedMobilityCount: updatedReducedMobility.length,
    }));
  };

  const handleRemoveReducedMobility = () => {
    if (reducedMobilityList.length > 0) {
      const updatedReducedMobility = reducedMobilityList.slice(0, -1);

      setReducedMobilityList(updatedReducedMobility);

      setLocalPassengers((prev) => ({
        ...prev,
        reducedMobility: updatedReducedMobility,
        reducedMobilityCount: updatedReducedMobility.length,
      }));
    }
  };

  useEffect(() => {
    setLocalPassengers((prev) => ({
      ...prev,
      reducedMobility: reducedMobilityList,
      reducedMobilityCount: reducedMobilityList.length,
    }));
  }, [passengers, reducedMobilityList]);

  const handleInputChange = (index, field, value) => {
    const updatedReducedMobility = reducedMobilityList.map((item, i) => {
      if (i === index) {
        const updatedItem = { ...item, [field]: value };
        updatedItem.isValid =
          updatedItem.birthDate !== "" && updatedItem.disabilityType !== "";
        return updatedItem;
      }
      return item;
    });

    setReducedMobilityList(updatedReducedMobility);

    const validReducedMobility = updatedReducedMobility.filter(
      (item) => item.isValid
    );
    setLocalPassengers((prev) => ({
      ...prev,
      reducedMobility: validReducedMobility,
      reducedMobilityCount: validReducedMobility.length,
    }));
  };

  const handleAdd = () => {
    const updatedPassengers = {
      ...localPassengers,
      reducedMobility: localPassengers.reducedMobility.filter(
        (item) => item.isValid
      ),
    };

    console.log("Sending updated passengers:", updatedPassengers);
    onAdd(updatedPassengers);
  };

  return (
    <div className={classes.passengerSelection}>
      <div className={classes.passengerControl}>
        <span>{t("passengersCompOne")}</span>
        <div>
          <button onClick={() => handleDecrement("adults")}>-</button>
          <span>{localPassengers.adults}</span>
          <button onClick={() => handleIncrement("adults")}>+</button>
        </div>
      </div>

      <div className={classes.passengerControl}>
        <span>{t("passengersCompTwo")}</span>
        <div>
          <button onClick={() => handleDecrement("children")}>-</button>
          <span>{localPassengers.children}</span>
          <button onClick={() => handleIncrement("children")}>+</button>
        </div>
      </div>

      <div className={classes.passengerControl}>
        <span>{t("passengersCompThree")}</span>
        <div>
          <button onClick={() => handleDecrement("babies")}>-</button>
          <span>{localPassengers.babies}</span>
          <button onClick={() => handleIncrement("babies")}>+</button>
        </div>
      </div>

      <div className={classes.passengerControl}>
        <span>{t("passengersCompFour")}</span>
        <div>
          <button onClick={handleRemoveReducedMobility}>-</button>
          <span>{localPassengers.reducedMobility?.length || 0}</span>
          <button onClick={handleAddReducedMobility}>+</button>
        </div>
        {reducedMobilityList.length > 0 && isReducedMobilityOpen === false && (
          <button onClick={() => setIsReducedMobilityOpen(true)}>▼</button>
        )}
      </div>

      {isReducedMobilityOpen && (
        <div className={classes.passengerDetails}>
          {reducedMobilityList.length === 0 ? (
            <p>{t("passengersCompFive")}</p>
          ) : (
            reducedMobilityList.map((mobility, index) => (
              <div key={index} className={classes.reducedMobilityForm}>
                <div className={classes.formGroup}>
                  <label>{t("passengersCompSix")}</label>
                  <input
                    type="date"
                    value={mobility.birthDate}
                    onChange={(e) =>
                      handleInputChange(index, "birthDate", e.target.value)
                    }
                  />
                </div>
                <div className={classes.formGroup}>
                  <label>{t("passengersCompSeven")}</label>
                  <select
                    value={mobility.disabilityType}
                    onChange={(e) =>
                      handleInputChange(index, "disabilityType", e.target.value)
                    }
                  >
                    <option value="">{t("passengersCompEight")}</option>
                    <option value="wheelchair">
                      {t("passengersCompNine")}
                    </option>
                    <option value="blindness">{t("passengersCompTen")}</option>
                    <option value="other">{t("passengersCompEleven")}</option>
                  </select>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      <button
        className={classes.addButton}
        onClick={handleAdd}
        disabled={
          reducedMobilityList.length > 0 &&
          reducedMobilityList.some((item) => !item.isValid)
        }
      >
        {t("passengersCompButton")}
      </button>
    </div>
  );
};

export default PassengersComp;
