import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Too short")
      .max(50, "Too long"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage
            name="password"
            component="div"
            className={styles.error}
          />
        </div>

        <button className={styles.submitButton} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
