import Interests from "../components/Interests/Interests";
import Home from "../page";
import styles from "./Interests.module.css";

const InterestsPage = () => {
  return (
    <Home>
      <div className={styles.container}>
        <Interests />
      </div>
    </Home>
  );
};

export default InterestsPage;
