import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div>
      <h1 className={styles.register}>Register</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
