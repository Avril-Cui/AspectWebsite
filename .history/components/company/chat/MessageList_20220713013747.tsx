import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import useMessages from './useMessages';
import styles from "./MessageList.module.css";
import { useRef, useLayoutEffect } from 'react';

function MessageList({ roomId }:any) {
    const containerRef = useRef(null);
    const { user } = useAuth();
    const messages = useMessages(roomId);

    useLayoutEffect(() => {
        if (containerRef.current !== null){
            if (containerRef.current) {
                containerRef.current.scrollTop = containerRef.current.scrollHeight;
            }
        }
    });

    return (
        <div className="message-list-container" ref={containerRef}>
            <ul className="message-list">
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
        <li className={['message', isOwnMessage && 'own-message'].join(' ')}>
            <h4 className="sender">{isOwnMessage ? 'You' : displayName}</h4>
            <div>{text}</div>
        </li>
    );
}

export default MessageList;