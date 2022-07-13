import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { chatRooms } from "../../../chatRoom";
import styles from "./landing.module.css";
import Fundamental from "./ChatRoom/fundamental";
import Technical from "./ChatRoom/technical";
import Quantatitative from "./ChatRoom/quantatitative";

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
  return (
    <>
      {chat === "FrontPage" && (
        <div>
          <h2 className={styles.pick}>Choose a Chat Room</h2>
          <ul className={styles.chat_room_list}>
            {chatRooms.map((room) => (
              <li key={room.id}>
                {/* <Link to={`/room/${room.id}`}>{room.title}</Link> */}
                <button onClick={() => setChat(room.id)}>{room.title}</button>
              </li>
            ))}
          </ul>
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
    </>
  );
}
