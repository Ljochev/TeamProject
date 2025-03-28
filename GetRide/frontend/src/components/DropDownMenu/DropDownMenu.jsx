// import { useState } from "react";
// import { FiChevronUp, FiChevronDown, FiLogOut } from "react-icons/fi";
// import { FaUserCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import styles from "./DropDownMenu.module.css";

// const DropdownMenu = ({ onLogout }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className={styles.dropdown}>
//       <button
//         className={styles.dropdownToggle}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <FaUserCircle size={28} />
//         {isOpen ? <FiChevronUp /> : <FiChevronDown />}
//       </button>

//       {isOpen && (
//         <div className={styles.dropdownMenu}>
//           <Link to="/voznji" className={styles.dropdownItem}>
//             🚗 Вашите возења
//           </Link>
//           <Link to="/inbox" className={styles.dropdownItem}>
//             💬 Сандаче
//           </Link>
//           <Link to="/profil" className={styles.dropdownItem}>
//             👤 Профил
//           </Link>
//           <Link to="/uplati" className={styles.dropdownItem}>
//             🏦 Уплата и поврат на средства
//           </Link>
//           <button
//             className={`${styles.dropdownItem} ${styles.logout}`}
//             onClick={onLogout}
//           >
//             <FiLogOut /> Oдјави се
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownMenu;
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronUp, FiChevronDown, FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./DropDownMenu.module.css";

const DropdownMenu = ({ onLogout }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownToggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaUserCircle size={28} />
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          <Link to="/voznji" className={styles.dropdownItem}>
            {t("dropDownOne")}
          </Link>
          <Link to="/inbox" className={styles.dropdownItem}>
            {t("dropDownTwo")}
          </Link>
          <Link to="/profil" className={styles.dropdownItem}>
            {t("dropDownThree")}
          </Link>
          <Link to="/uplati" className={styles.dropdownItem}>
            {t("dropDownFour")}
          </Link>
          <button
            className={`${styles.dropdownItem} ${styles.logout}`}
            onClick={onLogout}
          >
            <FiLogOut /> {t("dropDownButton")}
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
