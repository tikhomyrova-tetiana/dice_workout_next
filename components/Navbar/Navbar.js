import { Link } from "@mui/material";
import styles from "./styles.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/" underline="hover">
        LOGO
      </Link>
      <Link href="/" underline="hover">
        Home
      </Link>
      <Link href="/about" underline="hover">
        Learn more
      </Link>
      <Link href="/auth" underline="hover">
        Log in
      </Link>
      <Link href="/auth" underline="hover">
        Sign up
      </Link>
      <Link href="/settings" underline="hover">
        Settings
      </Link>
    </div>
  );
}
