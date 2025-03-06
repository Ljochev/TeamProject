import React, { useState, useEffect } from "react";
import classes from "./PassengersComp.module.css";

const PassengersComp = ({ onAdd, passengers }) => {
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
        <span>Возрасни (16+ год.)</span>
        <div>
          <button onClick={() => handleDecrement("adults")}>-</button>
          <span>{localPassengers.adults}</span>
          <button onClick={() => handleIncrement("adults")}>+</button>
        </div>
      </div>

      <div className={classes.passengerControl}>
        <span>Деца (4-15 год.)</span>
        <div>
          <button onClick={() => handleDecrement("children")}>-</button>
          <span>{localPassengers.children}</span>
          <button onClick={() => handleIncrement("children")}>+</button>
        </div>
      </div>

      <div className={classes.passengerControl}>
        <span>Бебиња (0-3 год.)</span>
        <div>
          <button onClick={() => handleDecrement("babies")}>-</button>
          <span>{localPassengers.babies}</span>
          <button onClick={() => handleIncrement("babies")}>+</button>
        </div>
      </div>

      <div className={classes.passengerControl}>
        <span>Патници со ограничено движење</span>
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
            <p>Нема додадени патници со ограничено движење.</p>
          ) : (
            reducedMobilityList.map((mobility, index) => (
              <div key={index} className={classes.reducedMobilityForm}>
                <div className={classes.formGroup}>
                  <label>Дата на раѓање:</label>
                  <input
                    type="date"
                    value={mobility.birthDate}
                    onChange={(e) =>
                      handleInputChange(index, "birthDate", e.target.value)
                    }
                  />
                </div>
                <div className={classes.formGroup}>
                  <label>Тип на инвалидитет:</label>
                  <select
                    value={mobility.disabilityType}
                    onChange={(e) =>
                      handleInputChange(index, "disabilityType", e.target.value)
                    }
                  >
                    <option value="">Изберете тип</option>
                    <option value="wheelchair">Инвалидска количка</option>
                    <option value="blindness">Слепило</option>
                    <option value="other">Друго</option>
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
        Додади
      </button>
    </div>
  );
};

export default PassengersComp;
