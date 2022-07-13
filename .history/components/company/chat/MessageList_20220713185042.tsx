import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import useMessages from './useMessages';
import styles from "./MessageList.module.css";
import { useRef, useLayoutEffect } from 'react';

function MessageList({ roomId }:any) {
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

    return (
        <div className={styles.message_list_container} ref={containerRef}>
            <ul className={styles.message_list}>
                {messages.map((x) => (
                    <Message
                        key={x.id}
                        message={x}
                        isOwnMessage={x.uid === user.uid}
                    />
                ))}
            </ul>
        </div>
    );
}

function Message({ message, isOwnMessage }:any) {
    const { displayName, text } = message;

    return (
        <li className={[styles.message, isOwnMessage && styles.own_message].join(' ')}>
            <h4 className={styles.sender}>{isOwnMessage ? 'You' : displayName}</h4>
            <div>{text}</div>
        </li>
    );
}

export default MessageList;