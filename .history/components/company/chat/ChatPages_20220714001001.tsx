import React from "react";
import { useState } from "react";
import Link from "next/link";
import styles from "./landing.module.css";
import Fundamental from "./ChatRoom/fundamental";
import Technical from "./ChatRoom/technical";
import Quantatitative from "./ChatRoom/quantatitative";
import Main from "./ChatRoom/main";
import { useAuth } from "../../../context/AuthContext";
import { useRouter } from "next/router";
import { Nav } from "react-bootstrap";

// import Landing from "./landing";

function ChatPages() {
  return (
    <div>
      <Landing />
    </div>
  );
}

export default ChatPages;

export function Landing() {
  const [chat, setChat] = useState("FrontPage");
  const { user, logout } = useAuth();
  const router = useRouter();
  return (
    <>
      {chat === "FrontPage" && (
        <div>
          <h2 className={styles.heading}>
            Share Unique Opinions With Friends!
          </h2>
          <p className={styles.slogan}>Join Different Chat Groups To...</p>
          <div className={styles.functions}>
            <p>
              1️⃣ <b>Hear</b> diverse voices.
            </p>
            <p>
              2️⃣ <b>Make</b> group decisions.
            </p>
            <p>
              3️⃣ <b>Learn</b> from others.
            </p>
            <p>
              4️⃣ <b>Meet</b> new people.
            </p>
            <p>
              1️⃣ <b>Get</b> familiar with finance.
            </p>
          </div>

          <h2 className={styles.pick}>Choose a Chat Room</h2>
          {user ? (
            <ul className={styles.chat_room_list}>
              <li key={"Main"}>
                <div>
                  <button onClick={() => setChat("Main")}>Main</button>
                </div>
              </li>
              <li key={"Fundamental"}>
                <div>
                  <button onClick={() => setChat("Fundamental")}>
                    Fundamental
                  </button>
                </div>
              </li>
              <li key={"Technical"}>
                <div>
                  <button onClick={() => setChat("Technical")}>
                    Technical
                  </button>
                </div>
              </li>
              <li key={"Quantitative"}>
                <div>
                  <button onClick={() => setChat("Quantitative")}>
                    Quantitative
                  </button>
                </div>
              </li>
            </ul>
          ) : (
            <ul className={styles.chat_room_list}>
            <li key={"main"}>
              <div>
                <button>
                  <Link className={styles.section} href="/login/login">
                    Main
                  </Link>
                </button>
              </div>
            </li>
            <li key={"fundamental"}>
              <div>
                <button>
                  <Link className={styles.section} href="/login/login">
                    Fundamental
                  </Link>
                </button>
              </div>
            </li>
            <li key={"technical"}>
              <div>
                <button>
                  <Link className={styles.section} href="/login/login">
                    Technical
                  </Link>
                </button>
              </div>
            </li>
            <li key={"quantitative"}>
              <div>
                <button>
                  <Link className={styles.section} href="/login/login">
                    Quantitative
                  </Link>
                </button>
              </div>
            </li>
          </ul>
          )}
        </div>
      )}
      {chat === "Fundamental" && (
        <div>
          <Fundamental />
        </div>
      )}
      {chat === "Technical" && (
        <div>
          <Technical />
        </div>
      )}
      {chat === "Quantitative" && (
        <div>
          <Quantatitative />
        </div>
      )}
      {chat === "Main" && (
        <div>
          <Main />
        </div>
      )}
    </>
  );
}
