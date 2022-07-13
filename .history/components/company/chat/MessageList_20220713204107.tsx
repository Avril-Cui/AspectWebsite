import React from "react";
import { useAuth } from "../../../context/AuthContext";
import useMessages from "./useMessages";
import styles from "./MessageList.module.css";
import { useRef, useLayoutEffect } from "react";
import { userInfo } from "os";

function MessageList({ roomId }: any) {
  const containerRef = useRef(null);
  const { user } = useAuth();
  const messages = useMessages(roomId);
  // useLayoutEffect(() => {
  //     if (containerRef.current !== null){
  //         if (containerRef.current) {
  //             containerRef.current.scrollTop = containerRef.current.scrollHeight;
  //         }
  //     }
  // });
  if (user == null){
      const user = {uid: 'm1IuePskcggcoAirGxbUwLl9vxW2', email: 'avril_cui@stgeorges.edu', displayName: null}
  }
  console.log(user)

  return (
    <div className={styles.show_bottom}>
      <div className={styles.message_list_container} ref={containerRef}>
        <ul className={styles.message_list}>
          {messages.map((x) => (
            <Message key={x.id} message={x} isOwnMessage={x.uid === user.uid} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Message({ message, isOwnMessage }: any) {
  const { displayEmail, text } = message;
  const { user } = useAuth();

  return (
    <div>
      {isOwnMessage ? (
        <li>
          <h4 className={styles.sender_email}>
            <i>{displayEmail}</i>
          </h4>
          <div className={styles.message}>{text}</div>
        </li>
      ) : (
        <li className={styles.own_message}>
          <h4 className={styles.sender}>You</h4>
          <div className={styles.self_message_content}>
            <div>{text}</div>
          </div>
        </li>
      )}
    </div>
    // <li
    //   className={[styles.message, isOwnMessage && styles.own_message].join(" ")}
    // >
    //   <h4 className={styles.sender}>{isOwnMessage ? "You" : displayName}</h4>
    //   <div>{text}</div>
    // </li>
  );
}

export default MessageList;
