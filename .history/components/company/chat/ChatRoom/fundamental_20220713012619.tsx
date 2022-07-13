import React from "react";
import { useState } from "react";
import { Landing } from "../ChatPages";
import styles from "./chat_styles.module.css"
import MessageInput from "../MessageInput";
import { chatRooms } from "../../../../chatRoom";
import { useParams } from "react-router-dom";
import { useRouter } from "next/router";


function Fundamental() {
  const [chat, setChat] = useState("Fundamental");
  // const params = useParams();
  const chat_name = "Fundamental"


  const room = chatRooms.find((x) => x.id == chat_name);
    console.log(chat_name)

  return (
    <div>
      {/* {chat_name} */}
      {chat === "FrontPage" && (<Landing />)}
      {chat === "Fundamental" && (
        <div>
          <button onClick={() => setChat("FrontPage")}>Back To Main</button>
          <div className={styles.messages_container}>
            <MessageInput roomId={room.id}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Fundamental;