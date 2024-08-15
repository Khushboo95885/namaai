import Link from "next/link";
import styles from "../Navbar/navbar.module.scss";

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <Link href="../../About" className={styles.nav}>
          About
        </Link>
        <Link href="../../Main">
          <h1 className={styles.name}>ॐ नमः शिवाय</h1>
        </Link>
        <Link href="../../Contact" className={styles.nav}>
          Contact
        </Link>
      </div>
    </>
  );
}
