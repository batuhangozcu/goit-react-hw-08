import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.home}>
      <h1>Welcome to the Phonebook App</h1>
      <p className={styles.desc}>Your personal contact management solution.</p>
      <p className={styles.info}>
        Manage your contacts easily and efficiently.
      </p>
    </div>
  );
}
