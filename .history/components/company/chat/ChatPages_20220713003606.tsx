import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { chatRooms } from "../../../chatRoom";
import styles from "./landing.module.css";

// import Landing from "./landing";

function ChatPages() {
  const [chart, setChart] = useState(1);
  return (
    <div>
      <Landing />
    </div>
  );
}

export default ChatPages;


export function Landing() {
    return (
      <>
        <h2 className={styles.pick}>Choose a Chat Room</h2>
        <ul className={styles.chat_room_list}>
          {chatRooms.map((room) => (
            <li key={room.id}>
              {/* <Link to={`/room/${room.id}`}>{room.title}</Link> */}
              {room.title}
            </li>
          ))}
        </ul>
      </>
    );
  }
