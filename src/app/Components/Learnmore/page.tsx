import styles from "./learn.module.scss";
const Learnmore = () => {
  return (
    <>
      <div>
        <button type="button" className={styles.button}>
          <div className={styles["button-top"]}>Go</div>
          <div className={styles["button-bottom"]}></div>
          <div className={styles["button-base"]}></div>
        </button>
      </div>
    </>
  );
};
export default Learnmore;
