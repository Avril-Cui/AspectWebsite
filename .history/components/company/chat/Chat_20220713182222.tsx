import styles from "./Chat.module.css";
import { useAuth } from "../../../context/AuthContext";
import { Router } from "next/router";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";
import ChatPages from "./ChatPages";

const Chat = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  return (
    <div>
      <div className={styles.chat_header}>
        <p className={styles.icon}>🔥 🚀 💬</p>
        <button>
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
        </button>
      </div>

      <div className={styles.messages_container}>
        <ChatPages />
      </div>
    </div>
  );
};

export default Chat;
