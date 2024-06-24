import { useState } from "react";
import styles from "./Events.module.css";

function Events() {
  const [value, setValue] = useState(0);
  return (
    <div className={styles.counterDiv}>
      Click counter:
      <span>{value}</span>
      <button
        className={[styles.buttons, styles.incrementBtn].join(" ")}
        onClick={() => setValue(value + 1)}
      >
        Increment
      </button>
      <button
        className={[styles.buttons, styles.decrementBtn].join(" ")}
        onClick={() => setValue(value - 1)}
      >
        Decrement
      </button>
      <button
        className={[styles.buttons, styles.resetBtn].join(" ")}
        onClick={() => setValue(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Events;
