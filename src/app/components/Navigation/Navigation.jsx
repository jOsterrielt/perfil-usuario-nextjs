"use client";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navContainer}>
      <ul className={styles.listContainer}>
        <li className={styles.listItem}>
          <Link href="/about">
            <span
              className={`${styles.linkText} ${
                pathname === "/about" ? styles.active : ""
              }`}
            >
              Sobre mi
            </span>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/interests">
            <span
              className={`${styles.linkText} ${
                pathname === "/interests" ? styles.active : ""
              }`}
            >
              Intereses
            </span>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/contact">
            <span
              className={`${styles.linkText} ${
                pathname === "/contact" ? styles.active : ""
              }`}
            >
              Contacto
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
