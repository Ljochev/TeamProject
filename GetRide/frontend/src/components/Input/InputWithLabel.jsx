import styles from "./InputWithLabel.module.css";


const InputWithLabel = ({ label="", ...props }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} />
    </div>
  );
};


export default InputWithLabel;