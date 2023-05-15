import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar({ text, href }) {
  return (
    <Link href={href} className={styles.link}>
      {text}
    </Link>
  );
}
