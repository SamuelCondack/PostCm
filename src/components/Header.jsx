import styles from "./Header.module.scss";
import postCmLogo from "../assets/postcm-logo.webp"

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={postCmLogo} alt="logo" />
    </header>
  );
}
