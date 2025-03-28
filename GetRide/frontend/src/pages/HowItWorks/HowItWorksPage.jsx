// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import styles from "./HowItWorksPage.module.css";

// const sections = [
//   {
//     title: "Основни информации",
//     content: (
//       <div>
//         <h2>Идете на пат?</h2>
//         <p>
//           Пронајдете превоз со поуздан возач! Штедете патувајќи, дури и во
//           последен момент.
//         </p>
//         <img
//           src="https://cdn.blablacar.com/comuto3/images/rebranding/how_it_work_passenger_v2.jpg"
//           alt="Превоз со возач"
//         />
//         <h3>1. Пронајдете превоз</h3>
//         <p>
//           Само кажете ни каде патувате, од каде и кога заминувајте. Потоа
//           одберете превоз што најмногу ви одговара! Ако ви требаат повеќе
//           информации, секогаш можете да испратите порака до возачот пред да ја
//           направите резервацијата.
//         </p>
//         <p>
//           Погледнете ги профилите на возачите. Така ќе видите што другите
//           кажуваат за патувањето со нив. Прочитајте повеќе за Доверба и
//           безбедност.
//         </p>

//         <h3>2. Резервирајте преку интернет</h3>
//         <p>
//           Кликнете на резервацијата и потоа ќе го добиете бројот на возачот за
//           да стапите во контакт.
//         </p>
//         <p>
//           Возачот исто така може да биде контактиран со порака, откако ќе го
//           резервирате своето седиште.
//         </p>

//         <h3>3. Патувајте заедно</h3>
//         <p>
//           Уживајте во возењето и не заборавајте да го оцените вашето искуство!
//           Кога ќе го оцените возачот, ги зголемувате шансите да бидете оценети.
//         </p>
//         <p>Платете за патувањето во готово за време на возењето.</p>

//         <h2>Имате слободни места?</h2>
//         <p>
//           Споделете ги вашите меѓуградски патувања со патници и поделете ги
//           трошоците!
//         </p>
//         <img
//           src="https://cdn.blablacar.com/comuto3/images/rebranding/how_it_work_driver.jpg"
//           alt="Понудете превоз"
//         />

//         <h3>1. Понудете превоз</h3>
//         <p>
//           Само кажете каде патувате, кога и каде сакате патниците да се качат и
//           симнат.
//         </p>
//         <p>
//           Изберете едно од нашите предложени популарни места за качување и
//           симнување на патниците. Така ќе биде полесно за сите!
//         </p>

//         <h3>2. Вашите патници резервираат преку интернет</h3>
//         <p>
//           Кога патникот ќе го резервира своето седиште, ќе ви го испратиме
//           неговиот телефонски број.
//         </p>
//         <p>
//           Можете да ги прегледате информациите за вашето возење и патниците во
//           секое време.
//         </p>

//         <h3>3. Патувајте заедно</h3>
//         <p>
//           Раговарајте, слушајте музика заедно или едноставно уживајте во тивкото
//           возење со другите патници.
//         </p>

//         <h3>4. Патниците ви плаќаат во готово</h3>
//         <p>
//           Патниците ќе ви платат за користењето на услугите во готово и за време
//           на возењето.
//         </p>
//       </div>
//     ),
//   },
//   {
//     title: "Како да понудите превоз?",
//     content: (
//       <div>
//         <h2>Чекор 1: Поставете го возењето</h2>
//         <p>
//           Изберете градови на тргнување и пристигнување, и ако е потребно,
//           додадете транзитни точки низ кои планирате да поминете. Изберете датум
//           и време на тргнување.
//         </p>

//         <h2>Чекор 2: Додадете детали</h2>
//         <p>
//           Одберете цена по патник, број на слободни места и изберете дали сакате
//           да понудите максимално двајца патници на задното седиште за поголема
//           удобност. Додадете детали за возењето, како што се дозволени димензии
//           за багаж и дали сте подготвени да застанете по пат.
//         </p>

//         <h2>Чекор 3: Потврда</h2>
//         <p>
//           Одберете како сакате да управувате со резервациите - автоматски или
//           рачно управување. Објавете ја понудата и веднаш ќе стане видлива на
//           платформата за да патниците можат да направат резервација.
//         </p>

//         <p>
//           <strong>Понудете превоз сега!</strong>
//         </p>
//       </div>
//     ),
//   },
//   {
//     title: "Оценување на возењето",
//     content: (
//       <div>
//         <h2>Зошто имаме оцени?</h2>
//         <p>
//           Оценките се препораки и помагаат во донесување на одлуки при избор на
//           превоз. Оставете оцена следниот пат кога ќе патувате и споделете ги
//           Вашите искуства со другите.
//         </p>

//         <h2>Како да оставите оцена?</h2>
//         <p>
//           Оцените можете да ги оставите ден по патувањето. Ќе бидете потсетени
//           преку e-mail и известувања на профилот.
//         </p>

//         <h2>Како се оценува?</h2>
//         <p>
//           1. Одберете дали е членот што го оценувате возач или патник.
//           <br />
//           2. Изберете одговор што најдобро го опишува Вашата искуство.
//           <br />
//           3. Напишете краток опис на Вашето искуство, напишете дали стигнал на
//           време или како беше во текот на патувањето.
//           <br />
//           Немате инспирација? Запрашајте се дали би ја препорачале оваа личност
//           на Вашето семејство.
//         </p>

//         <h2>Оценување на возачот</h2>
//         <p>
//           Ако сте патник, можете анонимно да го оцените возачот. Просечната
//           оценка ќе биде прикажана на профилот на возачот.
//         </p>

//         <h2>Одговор на оцена</h2>
//         <p>
//           Ако добиете негативна оцена, можете да одговорите на неа, а Вашиот
//           одговор ќе биде прикажан под оцената на Вашиот профил.
//         </p>

//         <p>
//           <strong>Погледнете ги вашите оценки!</strong>
//         </p>
//       </div>
//     ),
//   },
//   {
//     title: "Подесување на Вашиот налог",
//     content: (
//       <div>
//         <h2>Се пријавивте, но треба и да го уредите Вашиот профил</h2>
//         <p>
//           Еве како да ги уредите Вашите лични податоци, да управувате со
//           известувањата и да го потврдите Вашиот профил.
//         </p>

//         <h3>Промена на лични податоци</h3>
//         <p>
//           Без разлика дали сте патник или возач, ажурирањето на Вашата сметка е
//           задолжително. Кога ќе се најавите, одете на Вашата сметка за да:
//         </p>
//         <ul>
//           <li>
//             Измените поставки на сметката: Дознајте каде да ги пронајдете и
//             ажурирајте ги Вашите лични податоци.
//           </li>
//           <li>
//             Променете Вашата e-mail адреса: Како да додадете или да ја ажурирате
//             Вашата e-mail адреса.
//           </li>
//           <li>
//             Промените или ресетирате Вашата лозинка: Разберете како да ја
//             креирате или ажурирате Вашата лозинка.
//           </li>
//           <li>
//             Управувајте со известувањата: Како да управувате со начините на кои
//             примате известувања на GetRide.
//           </li>
//         </ul>

//         <h3>Потврда на Вашиот профил</h3>
//         <p>
//           Потврдувањето на Вашиот профил ја изградува довербата во нашата
//           заедница и помага другите членови да се чувствуваат побезбедно кога
//           патуваат со Вас. За да добиете значка „Потврден профил“, треба да
//           направите неколку работи:
//         </p>

//         <ul>
//           <li>
//             Потврдување на Вашиот идентитет: Информации и решавање на проблеми
//             во врска со испраќањето на Вашиот личен документ преку нашиот
//             безбеден систем за верификација — што не го споделуваме со никого.
//           </li>
//           <li>
//             Потврда на Вашиот телефонски број: Видете како да додадете,
//             ажурирате и да го потврдите Вашиот телефонски број.
//           </li>
//           <li>
//             Потврда на Вашата e-mail адреса: Видете како да додадете или
//             ажурирате Ваша e-mail адреса.
//           </li>
//         </ul>

//         <p>
//           Безбедноста на Вашите лични податоци е многу важна. За повеќе
//           информации за тоа како ги чуваме Вашите лични податоци, погледнете ја
//           нашата Политика за приватност.
//         </p>
//       </div>
//     ),
//   },
//   {
//     title: "Како да направите налог?",
//     content: `
//     Регистрирањето е комплетно бесплатно! Само одете на getride.mk и кликнете на ------ и следете ги упатствата.
//     Можете да се регистрирате користејќи било што од наведеното:
//     - E-mail адреса
//     - Фејсбук налог
//     По регистрацијата, ќе бидат потребни уште некои информации пред да можете да резервирате превоз, па потрудете се да го уредите својот профил.
//   `,
//   },
//   {
//     title: "Како се утврдува цена и како се плаќа?",
//     content: `
//     Цените се фиксни кога возачот нуди превоз. За нив не се преговара и цените се исти за сите патници.
//     Цената секогаш се заснова на препорака и калкулација која ја дава GetRide врз основа на планот на патувањето и реалните трошоци кои ги има возачот.
//     Возачите можат во разумни граници да влијаат на таа цена, да ја вклучат удобноста на возилото или нивната подготвеност да се одвојат од главниот пат.
//     Цената не може да биде поголема од горната граница која ја утврдува GetRide, за да се осигура дека трошоците ќе се поделат на фер начин и дека возачот нема да оствари профит.
//     Општо, цената по место претставува една третина од цената на горивото потребно за патувањето; кога возачот има тројца патници, тој ги покрива сите трошоци за гориво.
//     Плаќањето на возачот е едноставно. Платете во готово на денот на патувањето.
//     Запомнете само едно – понесете точен износ!
//   `,
//   },
// ];

// const HowItWorksPage = () => {
//   const [activeSection, setActiveSection] = useState(null);

//   const handleToggle = (index) => {
//     setActiveSection(activeSection === index ? null : index);
//   };

//   const { t } = useTranslation();
//   return (
//     <div className={styles.container}>
//       <h1>Како функционира GetRide?</h1>
//       <div>
//         {sections.map((section, index) => (
//           <div key={index} className={styles.section}>
//             <h2 onClick={() => handleToggle(index)}>{section.title}</h2>
//             {activeSection === index && (
//               <div className={styles.sectionContent}>{section.content}</div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HowItWorksPage;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./HowItWorksPage.module.css";

const HowItWorksPage = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState(null);

  const handleToggle = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    {
      title: t("basicInfo"),
      content: (
        <div>
          <h2>{t("basicInfoFirstTitle")}</h2>
          <p>{t("basicInfoFirstDesc")}</p>
          <img
            src="https://cdn.blablacar.com/comuto3/images/rebranding/how_it_work_passenger_v2.jpg"
            alt="Превоз со возач"
          />
          <h3>{t("basicInfoFirstTitleOne")}</h3>
          <p>{t("basicInfoFirstDescOne")}</p>
          <p>{t("basicInfoFirstDescOne1")}</p>

          <h3>{t("basicInfoFirstTitleTwo")}</h3>
          <p>{t("basicInfoFirstDescTwo")}</p>
          <p>{t("basicInfoFirstDescTwo2")}</p>

          <h3>{t("basicInfoFirstTitleThree")}</h3>
          <p>{t("basicInfoFirstDescThree")}</p>
          <p>{t("basicInfoFirstDescThree3")}</p>

          <h2>{t("basicInfoSecondTitle")}</h2>
          <p>{t("basicInfoSecondDesc")}</p>
          <img
            src="https://cdn.blablacar.com/comuto3/images/rebranding/how_it_work_driver.jpg"
            alt="Понудете превоз"
          />

          <h3>{t("basicInfoSecondTitleOne")}</h3>
          <p>{t("basicInfoSecondDescOne")}</p>
          <p>{t("basicInfoSecondDescOne1")}</p>

          <h3>{t("basicInfoSecondTitleTwo")}</h3>
          <p>{t("basicInfoSecondDescTwo")}</p>
          <p>{t("basicInfoSecondDescTwo2")}</p>

          <h3>{t("basicInfoSecondTitleThree")}</h3>
          <p>{t("basicInfoSecondDescThree")}</p>

          <h3>{t("basicInfoSecondTitleFour")}</h3>
          <p>{t("basicInfoSecondDescFour")}</p>
        </div>
      ),
    },
    {
      title: t("account"),
      content: <div>{t("accountDesc")}</div>,
    },
    {
      title: t("setAccount"),
      content: (
        <div>
          <h2>{t("setAccountFirstTitle")}</h2>
          <p>{t("setAccountFirstDesc")}</p>

          <h2>{t("setAccountSecondTitle")}</h2>
          <p>{t("setAccountSecondDesc")}</p>
          <ul>
            <li>
              <li>{t("setAccountSecondDescListOne")}</li>
            </li>
            <li>{t("setAccountSecondDescListTwo")}</li>
            <li>{t("setAccountSecondDescListThree")}</li>
            <li>{t("setAccountSecondDescListFour")}</li>
          </ul>

          <h2>{t("setAccountThirdTitle")}</h2>
          <p>{t("setAccountThirdDescOne")}</p>

          <ul>
            <li>{t("setAccountThirdDescListOne")}</li>
            <li>{t("setAccountThirdDescListTwo")}</li>
            <li>{t("setAccountThirdDescListThree")}</li>
          </ul>

          <p>{t("setAccountThirdDescTwo")}</p>
        </div>
      ),
    },
    {
      title: t("rideOffer"),
      content: (
        <div>
          <h2>{t("rideOfferTitleOne")}</h2>
          <p>{t("rideOfferStepOne")}</p>

          <h2>{t("rideOfferTitleTwo")}</h2>
          <p>{t("rideOfferStepTwo")}</p>

          <h2>{t("rideOfferTitleThree")}</h2>
          <p>{t("rideOfferStepThree")}</p>

          <p>
            <strong>{t("rideOfferStepThree3")}</strong>
          </p>
        </div>
      ),
    },
    {
      title: t("price"),
      content: (
        <div>
          <p>{t("priceDescOne")}</p>
          <p>{t("priceDescTwo")}</p>
          <p>{t("priceDescThree")}</p>
          <p>
            <strong>{t("priceDescFour")}</strong>
          </p>
        </div>
      ),
    },
    {
      title: t("rating"),
      content: (
        <div>
          <h2>{t("ratingFirstTitle")}</h2>
          <p>{t("ratingFirstDesc")}</p>

          <h2>{t("ratingSecondTitle")}</h2>
          <p>{t("ratingSecondDesc")}</p>
          <p>
            <ul>
              <li>{t("ratingSecondDescListOne")}</li>
              <li>{t("ratingSecondDescListTwo")}</li>
              <li>{t("ratingSecondDescListThree")}</li>

              <li>{t("ratingSecondDescListFour")}</li>
            </ul>
          </p>

          <h2>{t("ratingThirdTitle")}</h2>
          <p>{t("ratingThirdDesc")}</p>

          <h2>{t("ratingFourthTitle")}</h2>
          <p>{t("ratingFourthDescOne")}</p>

          <p>
            <strong>{t("ratingFourthDescTwo")}</strong>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <h1>{t("titleHowItWorks")}</h1>
      <div>
        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2 onClick={() => handleToggle(index)}>{section.title}</h2>
            {activeSection === index && (
              <div className={styles.sectionContent}>{section.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksPage;
