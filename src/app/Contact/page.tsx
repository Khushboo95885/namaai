import Image from "next/image";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles["card-switch"]}>
          <label className={styles.switch}>
            <input type="checkbox" className={styles.toggle} />
            <span className={styles.slider}></span>
            <span className={styles["card-side"]}></span>
            <div className={styles["flip-card__inner"]}>
              <div className={styles["flip-card__front"]}>
                <div className={styles.title}>Contact Me!</div>
                <form className={styles["flip-card__form"]} action="">
                  <input
                    className={styles["flip-card__input"]}
                    name="name"
                    placeholder="name"
                    type="text"
                  />
                  <input
                    className={styles["flip-card__input"]}
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                  <button className={styles["flip-card__btn"]}>
                    Let`s go!
                  </button>
                </form>
              </div>
              <div className={styles["flip-card__back"]}>
                <div className={styles.title}>Subscribe to US</div>
                <form className={styles["flip-card__form"]} action="">
                  <input
                    className={styles["flip-card__input"]}
                    placeholder="Name"
                    type="text"
                  />
                  <input
                    className={styles["flip-card__input"]}
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                  <input
                    className={styles["flip-card__input"]}
                    name="Organisation"
                    placeholder="Organisation"
                    type="text"
                  />
                  <button className={styles["flip-card__btn"]}>Confirm!</button>
                </form>
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className={styles.imgContact}>
        <Image
          src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg?size=626&ext=jpg&ga=GA1.1.1493941918.1708099460&semt=ais"
          width={400}
          height={400}
          alt="contactimage"
        />
      </div>
    </div>
  );
}
