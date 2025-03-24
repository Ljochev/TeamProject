// import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import classes from "./Search.module.css";
// import Input from "../Input/Input";
// import MyButton from "../Button/MyButton";
// import PassengersComp from "../Passengers/PassengersComp";
// import useGoogleMaps from "../../hooks/useGoogleMaps";
// import { Autocomplete } from "@react-google-maps/api";

// const Search = ({ vertical = false }) => {
//   const { t } = useTranslation();
//   const navigate = useNavigate();
//   const { isLoaded } = useGoogleMaps();
//   const [date, setDate] = useState("");
//   const [leaving, setLeaving] = useState("");
//   const [arriving, setArriving] = useState("");
//   const [duration, setDuration] = useState(null);
//   const [directions, setDirections] = useState(null);
//   const [showPassengersComp, setShowPassengersComp] = useState(false);
//   const [passengerInputValue, setPassengerInputValue] = useState("");
//   const [passengers, setPassengers] = useState({
//     adults: 0,
//     children: 0,
//     babies: 0,
//     reducedMobility: [],
//   });

//   const leavingRef = useRef(null);
//   const arrivingRef = useRef(null);

//   if (!isLoaded) {
//     return <p>Loading</p>;
//   }

//   const handlePlaceSelect = (ref, setFunction) => {
//     if (ref.current) {
//       const place = ref.current.getPlace();
//       if (place && place.formatted_address) {
//         const cityName = place.formatted_address.split(",")[0]; // Extract only the city name
//         setFunction(cityName);
//       }
//     }
//   };

//   const handleSearch = () => {
//     const queryParams = new URLSearchParams({
//       leaving,
//       arriving,
//       date,
//     }).toString();
//     navigate(`/rides?${queryParams}`);
//   };

//   const calculateDuration = () => {
//     if (!leaving || !arriving) {
//       alert("Please enter both locations");
//       return;
//     }

//     const directionsService = new window.google.maps.DirectionsService();
//     directionsService.route(
//       {
//         origin: leaving,
//         destination: arriving,
//         travelMode: window.google.maps.TravelMode.DRIVING,
//       },
//       (result, status) => {
//         if (status === "OK") {
//           const durationText = result.routes[0].legs[0].duration.text;
//           setDuration(durationText);
//         } else {
//           console.error("Error fetching directions:", status);
//         }
//       }
//     );
//   };

//   const togglePassengersComp = () => {
//     setShowPassengersComp(!showPassengersComp);
//   };

//   const updatePassengerInput = (updatedPassengers) => {
//     setPassengers((prevPassengers) => {
//       const newPassengers = {
//         ...prevPassengers,
//         adults: updatedPassengers.adults,
//         children: updatedPassengers.children,
//         babies: updatedPassengers.babies,
//         reducedMobility: updatedPassengers.reducedMobility,
//       };

//       const totalPassengers =
//         newPassengers.adults +
//         newPassengers.children +
//         newPassengers.babies +
//         newPassengers.reducedMobility.length;

//       const passengerLabel = totalPassengers === 1 ? "патник" : "патници";

//       setPassengerInputValue(`${totalPassengers}  ${passengerLabel}`);
//       setShowPassengersComp(false);

//       return newPassengers;
//     });
//   };

//   return (
//     <div className={vertical ? classes.searchHome : classes.search}>
//       <Autocomplete
//         options={{
//           componentRestrictions: { country: ["mk", "gr", "rs"] },
//           types: ["(cities)"],
//         }}
//         onLoad={(autocomplete) => (leavingRef.current = autocomplete)}
//         onPlaceChanged={() => handlePlaceSelect(leavingRef, setLeaving)}
//       >
//         <Input
//           name={"leaving"}
//           id={"leaving"}
//           placeholder="Место на тргнување"
//           value={leaving}
//           onChange={(e) => setLeaving(e.target.value)}
//         />
//       </Autocomplete>
//       <Autocomplete
//         options={{
//           componentRestrictions: { country: ["mk", "gr", "rs"] },
//           types: ["(cities)"],
//         }}
//         onLoad={(autocomplete) => (arrivingRef.current = autocomplete)}
//         onPlaceChanged={() => handlePlaceSelect(arrivingRef, setArriving)}
//       >
//         <Input
//           name={"arriving"}
//           id={"arriving"}
//           placeholder="Место на пристигнување"
//           value={arriving}
//           onChange={(e) => setArriving(e.target.value)}
//         />
//       </Autocomplete>
//       <Input
//         type="date"
//         name={"date"}
//         id={"date"}
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//       />
//       <div className={classes.passengerInputContainer}>
//         <Input
//           name={"passangers"}
//           id={"passangers"}
//           placeholder="Број на патници"
//           readOnly
//           value={passengerInputValue}
//           onClick={togglePassengersComp}
//         />
//         <button className={classes.buttonToggle} onClick={togglePassengersComp}>
//           ▼
//         </button>
//       </div>

//       {showPassengersComp && (
//         <PassengersComp onAdd={updatePassengerInput} passengers={passengers} />
//       )}

//       <MyButton
//         name="Барај"
//         className={vertical ? "searchButton" : "horizontalButton"}
//         onClick={handleSearch}
//       />
//     </div>
//   );
// };

// export default Search;

import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import classes from "./Search.module.css";
import Input from "../Input/Input";
import MyButton from "../Button/MyButton";
import PassengersComp from "../Passengers/PassengersComp";
import useGoogleMaps from "../../hooks/useGoogleMaps";
import { Autocomplete } from "@react-google-maps/api";

const Search = ({ vertical = false }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isLoaded } = useGoogleMaps();
  const [date, setDate] = useState("");
  const [leaving, setLeaving] = useState("");
  const [arriving, setArriving] = useState("");
  const [duration, setDuration] = useState(null);
  const [directions, setDirections] = useState(null);
  const [showPassengersComp, setShowPassengersComp] = useState(false);
  const [passengerInputValue, setPassengerInputValue] = useState("");
  const [passengers, setPassengers] = useState({
    adults: 0,
    children: 0,
    babies: 0,
    reducedMobility: [],
  });

  const leavingRef = useRef(null);
  const arrivingRef = useRef(null);

  if (!isLoaded) {
    return <p>Loading</p>;
  }

  const handlePlaceSelect = (ref, setFunction) => {
    if (ref.current) {
      const place = ref.current.getPlace();
      if (place && place.formatted_address) {
        const cityName = place.formatted_address.split(",")[0];
        setFunction(cityName);
      }
    }
  };

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      leaving,
      arriving,
      date,
    }).toString();
    navigate(`/rides?${queryParams}`);
  };

  const calculateDuration = () => {
    if (!leaving || !arriving) {
      alert("Please enter both locations");
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: leaving,
        destination: arriving,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          const durationText = result.routes[0].legs[0].duration.text;
          setDuration(durationText);
        } else {
          console.error("Error fetching directions:", status);
        }
      }
    );
  };

  const togglePassengersComp = () => {
    setShowPassengersComp(!showPassengersComp);
  };

  const updatePassengerInput = (updatedPassengers) => {
    setPassengers((prevPassengers) => {
      const newPassengers = {
        ...prevPassengers,
        adults: updatedPassengers.adults,
        children: updatedPassengers.children,
        babies: updatedPassengers.babies,
        reducedMobility: updatedPassengers.reducedMobility,
      };

      const totalPassengers =
        newPassengers.adults +
        newPassengers.children +
        newPassengers.babies +
        newPassengers.reducedMobility.length;

      const passengerLabel =
        totalPassengers === 1 ? t("searchDescOne") : t("searchDescOneOne");

      setPassengerInputValue(`${totalPassengers}  ${passengerLabel}`);
      setShowPassengersComp(false);

      return newPassengers;
    });
  };

  return (
    <div className={vertical ? classes.searchHome : classes.search}>
      <Autocomplete
        options={{
          componentRestrictions: { country: ["mk", "gr", "rs"] },
          types: ["(cities)"],
        }}
        onLoad={(autocomplete) => (leavingRef.current = autocomplete)}
        onPlaceChanged={() => handlePlaceSelect(leavingRef, setLeaving)}
      >
        <Input
          name={"leaving"}
          id={"leaving"}
          placeholder={t("searchDescTwo")}
          value={leaving}
          onChange={(e) => setLeaving(e.target.value)}
        />
      </Autocomplete>
      <Autocomplete
        options={{
          componentRestrictions: { country: ["mk", "gr", "rs"] },
          types: ["(cities)"],
        }}
        onLoad={(autocomplete) => (arrivingRef.current = autocomplete)}
        onPlaceChanged={() => handlePlaceSelect(arrivingRef, setArriving)}
      >
        <Input
          name={"arriving"}
          id={"arriving"}
          placeholder={t("searchDescThree")}
          value={arriving}
          onChange={(e) => setArriving(e.target.value)}
        />
      </Autocomplete>
      <Input
        type="date"
        name={"date"}
        id={"date"}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <div className={classes.passengerInputContainer}>
        <Input
          name={"passangers"}
          id={"passangers"}
          placeholder={t("searchDescFour")}
          readOnly
          value={passengerInputValue}
          onClick={togglePassengersComp}
        />
        <button className={classes.buttonToggle} onClick={togglePassengersComp}>
          ▼
        </button>
      </div>

      {showPassengersComp && (
        <PassengersComp onAdd={updatePassengerInput} passengers={passengers} />
      )}

      <MyButton
        name={t("searchButton")}
        className={vertical ? "searchButton" : "horizontalButton"}
        onClick={handleSearch}
      />
    </div>
  );
};

export default Search;
