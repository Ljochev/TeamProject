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

const PostRideForm = ({ onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    from: "",
    pickupPoints: "",
    passengers: "",
    time: "",
    destination: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Податоци за возење:", formData);
    alert(t("postRideFormAlert"));
    onClose();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h2>{t("postRideFormTitle")}</h2>
      <label>
        {t("postRideFormOne")}
        <input
          type="text"
          name="from"
          value={formData.from}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        {t("postRideFormTwo")}
        <input
          type="text"
          name="pickupPoints"
          value={formData.pickupPoints}
          onChange={handleChange}
          required
        />
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
        {t("postRideFormFive")}
        <input
          type="text"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">{t("postRideFormButton")}</button>
    </form>
  );
};

export default PostRideForm;
