import Link from "next/link";
import styles from "./styles.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">LOGO</Link>
      <Link href="/">Home</Link>
      <Link href="/about">Learn more</Link>
      <Link href="/auth">Log in</Link>
      <Link href="/auth">Sign up</Link>
      <Link href="/settings">Settings</Link>
    </div>
  );
}
