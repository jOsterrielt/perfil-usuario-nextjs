import Image from "next/image";
import styles from "./Header.module.css";

const Header = ({ name, profileImage }) => {
  return (
    <header className={styles.header}>
      <Image
        src={profileImage}
        alt={`${name}'s profile`}
        className={styles.img}
        width={150}
        height={150}
      />

      <h1 className={styles.name}>{name}</h1>
    </header>
  );
};

export default Header;
