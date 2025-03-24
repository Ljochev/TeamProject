// import React from 'react'
// import { Link } from 'react-router-dom';
// import  styles  from './LogPage.module.css';

// const LogPage = ({logData}) => {
//     return (
//       <div className={styles.log_page_wrap}>
//       <div className={styles.log_page_info}>
//         <div>
//         <h1>ЗАПОЧНИ ГО ТВОЕТО ПАТУВАЊЕ!</h1>
//         <span>Секое споделено возење е чекор кон почиста планета и подобар свет за идните генерации!</span>
//         </div>
//         <div className={styles.log_page_logo}>
//         <Link to='/'>
//         Home Page
//         </Link>
//           <p>ourDomain.com</p>
//         </div>
//       </div>
//       <div className={styles.log_section}>
//       {/* <img className={styles.log_rocket} src={rocket}/> */}
//       {/* <Link to='/'><img className={styles.mentor_logo_img} src={MentorLogo}/></Link> */}
//       <Link to='/'>Home Page</Link>

//       <div className={styles.log_section_component}>
//       {logData}
//       </div>
//       </div>
//     </div>
//     )

//   }

//   export default LogPage

import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./LogPage.module.css";

const LogPage = ({ logData }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.log_page_wrap}>
      <div className={styles.log_page_info}>
        <div>
          <h1>{t("logPageTitle")}</h1>
          <span>{t("logPageDesc")}</span>
        </div>
        <div className={styles.log_page_logo}>
          <Link to="/">{t("home")}</Link>
          <p>ourDomain.com</p>
        </div>
      </div>
      <div className={styles.log_section}>
        {/* <img className={styles.log_rocket} src={rocket}/> */}
        {/* <Link to='/'><img className={styles.mentor_logo_img} src={MentorLogo}/></Link> */}
        <Link to="/">{t("home")}</Link>

        <div className={styles.log_section_component}>{logData}</div>
      </div>
    </div>
  );
};

export default LogPage;
