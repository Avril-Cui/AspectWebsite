import { Link } from "react-router-dom";
import { chatRooms } from "../../../chatRoom";
import styles from "./landing.module.css";

function Landing() {
  return (
    <>
      <h2>Choose a Chat Room</h2>
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

export default Landing;