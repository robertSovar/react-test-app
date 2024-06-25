import { useEffect } from "react";
import { useTheme } from "../../components/DarkModeTheme/DarkModeTheme";
import styles from "./DarkModeBtn.module.css";

const DarkModeBtn = () => {
  const { theme, toogleTheme } = useTheme();
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <button className={styles.darkModeBtnClass} onClick={toogleTheme}>
        Dark mode
      </button>
    </div>
  );
};

export default DarkModeBtn;
