import styles from "./Interest.module.css";

const Interests = () => {
  const interests = [
    "Coding",
    "Mountain biking",
    "Leer",
    "Perros",
    "Musica",
    "Plantas",
  ];

  return (
    <section className={styles.section}>
      <h2>Intereses</h2>
      <ul className={styles.listContainer}>
        {interests.map((interest, index) => {
          return (
            <li key={index} className={styles.listItem}>
              <span>{interest}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Interests;
