// import React from "react";
// import driving from "../../assets/safe-travel.jpg";
// import savings from "../../assets/savings-travel.jpg";
// import destinationImg from "../../assets/man-with-phone.jpg";
// import classes from "./Features.module.css";

// const Features = () => {
//   return (
//     <section>
//       <div className={classes.features}>
//         <img src={driving} alt="Возете се безбедно до вашата дестинација" />
//         <div>
//           <h2>Возете се безбедно до вашата дестинација</h2>
//           <p>
//             Преку нашата апликација имате можност да изберете со кого ќе
//             патувате. Лицата кои вршат превоз добиваат рејтинг и можете да
//             бидете сигурни при вашето возење
//           </p>
//         </div>
//       </div>
//       <div className={classes.features}>
//         <div>
//           <h2>Заштедете додека патувате</h2>
//           <p>
//             Имате можност да заштедите додека патувате. Поделете ги вашите
//             трошоци другите патници.
//           </p>
//         </div>
//         <img src={savings} alt="Заштедете додека патувате" />
//       </div>
//       <div className={classes.features}>
//         <img src={destinationImg} alt="Брзо најдете превоз до вашиот град" />
//         <div>
//           <h2>Брзо најдете превоз до вашиот град</h2>
//           <p>
//             Пребарајте активни огласи и пронајдете возач што ве води точно каде
//             што треба.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;
import React from "react";
import { useTranslation } from "react-i18next";
import driving from "../../assets/safe-travel.jpg";
import savings from "../../assets/savings-travel.jpg";
import destinationImg from "../../assets/man-with-phone.jpg";
import classes from "./Features.module.css";

const Features = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className={classes.features}>
        <img src={driving} alt="Возете се безбедно до вашата дестинација" />
        <div>
          <h2>{t("featuresTitleOne")}</h2>
          <p>{t("featuresDescOne")}</p>
        </div>
      </div>
      <div className={classes.features}>
        <div>
          <h2>{t("featuresTitleTwo")}</h2>
          <p>{t("featuresDescTwo")}</p>
        </div>
        <img src={savings} alt="Заштедете додека патувате" />
      </div>
      <div className={classes.features}>
        <img src={destinationImg} alt="Брзо најдете превоз до вашиот град" />
        <div>
          <h2>{t("featuresTitleThree")}</h2>
          <p>{t("featuresDescThree")}</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
