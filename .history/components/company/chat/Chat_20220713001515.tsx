import styles from "./Chat.module.css";
import Button from "../../UI/Button";
import { useAuth } from "../../../context/AuthContext";
import { Router } from "next/router";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useRouter } from 'next/router';

const Chat = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  return (
    <div>
      <Button>
        <p className={styles.style_but}>
          {user ? (
            <Nav.Link
              className={styles.section}
              onClick={() => {
                logout();
                router.push("/login/login");
              }}
            >
              Log Out
            </Nav.Link>
          ) : (
            <Link className={styles.section} href="/login/login">
              Log In
            </Link>
          )}
        </p>
      </Button>
    </div>
  );
};

export default Chat;
