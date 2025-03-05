import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Search.module.css";
import Input from "../Input/Input";
import MyButton from "../Button/MyButton";
import useGoogleMaps from "../../hooks/useGoogleMaps";
import { Autocomplete } from "@react-google-maps/api";

const Search = ({ vertical = false }) => {
  const navigate = useNavigate();
  const { isLoaded } = useGoogleMaps();
  const [date, setDate] = useState("");
  const [leaving, setLeaving] = useState("");
  const [arriving, setArriving] = useState("");
  const [duration, setDuration] = useState(null);
  const [directions, setDirections] = useState(null);

  const leavingRef = useRef(null);
  const arrivingRef = useRef(null);

  if (!isLoaded) {
    return <p>Loading</p>;
  }

  const handlePlaceSelect = (ref, setFunction) => {
    if (ref.current) {
      const place = ref.current.getPlace();
      if (place && place.formatted_address) {
        const cityName = place.formatted_address.split(",")[0]; // Extract only the city name
        setFunction(cityName);
      }
    }
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
          placeholder="Место на тргнување"
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
          placeholder="Место на пристигнување"
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
      <Input
        name={"passangers"}
        id={"passangers"}
        placeholder="Број на патници"
      />
      <MyButton
        name="Барај"
        className={vertical ? "searchButton" : "horizontalButton"}
        // onClick={() => navigate("/rides")}
        onClick={calculateDuration}
      />
      {duration && <p>Времетраење: {duration}</p>}
    </div>
  );
};

export default Search;
