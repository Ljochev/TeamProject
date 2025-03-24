// import React, { useState } from "react";
// import classes from "./PostRideForm.module.css";

// const PostRideForm = ({ onClose }) => {
//   const { t } = useTranslation();
//   const [formData, setFormData] = useState({
//     from: "",
//     pickupPoints: "",
//     passengers: "",
//     time: "",
//     destination: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Податоци за возење:", formData);
//     alert("Возењето е успешно објавено!");
//     onClose();
//   };

//   return (
//     <form className={classes.form} onSubmit={handleSubmit}>
//       <h2>Објави Возење</h2>
//       <label>
//         Место на тргнување:
//         <input
//           type="text"
//           name="from"
//           value={formData.from}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <label>
//         Каде може да ги собереш патниците:
//         <input
//           type="text"
//           name="pickupPoints"
//           value={formData.pickupPoints}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <label>
//         Број на патници:
//         <input
//           type="number"
//           name="passengers"
//           value={formData.passengers}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <label>
//         Време на тргнување:
//         <input
//           type="time"
//           name="time"
//           value={formData.time}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <label>
//         Дестинација:
//         <input
//           type="text"
//           name="destination"
//           value={formData.destination}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <button type="submit">Објави</button>
//     </form>
//   );
// };

// export default PostRideForm;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import classes from "./PostRideForm.module.css";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

const GOOGLE_MAPS_LIBRARIES = ["places"];

const PostRideForm = ({ onClose }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API,
    libraries: GOOGLE_MAPS_LIBRARIES,
  });

  const [formData, setFormData] = useState({
    from: "",
    pickupPoints: "",
    passengers: "",
    time: "",
    destination: "",
  });

  const [autocompleteFrom, setAutocompleteFrom] = useState(null);
  const [autocompletePickup, setAutocompletePickup] = useState(null);
  const [autocompleteDestination, setAutocompleteDestination] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Податоци за возење:", formData);
    alert(t("postRideFormAlert"));
    onClose();
  };

  const handlePlaceSelectFrom = () => {
    const place = autocompleteFrom.getPlace();
    if (place.geometry) {
      setFormData({ ...formData, from: place.formatted_address || place.name });
    }
  };

  const handlePlaceSelectDestination = () => {
    const place = autocompleteDestination.getPlace();
    if (place.geometry) {
      setFormData({
        ...formData,
        destination: place.formatted_address || place.name,
      });
    }
  };

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h2>{t("postRideFormTitle")}</h2>
      <label>
        Место на тргнување:
        <Autocomplete
          onLoad={(autocomplete) => setAutocompleteFrom(autocomplete)}
          onPlaceChanged={handlePlaceSelectFrom}
        >
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            required
            placeholder="Start location"
          />
        </Autocomplete>
      </label>
      <label>
        {t("postRideFormTwo")}
        <Autocomplete
          onLoad={(autocomplete) => setAutocompletePickup(autocomplete)}
        >
          <input
            type="text"
            name="pickupPoints"
            value={formData.pickupPoints}
            onChange={handleChange}
            required
          />
        </Autocomplete>
      </label>
      <label>
        {t("postRideFormThree")}
        <input
          type="number"
          name="passengers"
          value={formData.passengers}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        {t("postRideFormFour")}
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Дестинација:
        <Autocomplete
          onLoad={(autocomplete) => setAutocompleteDestination(autocomplete)}
          onPlaceChanged={handlePlaceSelectDestination}
        >
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
            placeholder="Destination"
          />
        </Autocomplete>
      </label>
      <button type="submit">{t("postRideFormButton")}</button>
    </form>
  );
};

export default PostRideForm;
