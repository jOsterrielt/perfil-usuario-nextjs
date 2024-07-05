"use client";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const AboutPage = () => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <h2>Sobre mi</h2>
        <p>
          Soy un fotógrafo de mascotas con más de cinco años de experiencia
          capturando la esencia y personalidad de nuestros amigos peludos.
          <br />
          <br />
          Mi pasión es crear recuerdos inolvidables para los dueños, combinando
          técnicas de fotografía creativa y un profundo amor por los animales.
          <br />
          <br />
          Además de la fotografía, disfruto explorando la naturaleza y pasando
          tiempo con mis propios compañeros de cuatro patas. Innovación y
          creatividad son los motores que guían mi trabajo cada día.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutPage;
