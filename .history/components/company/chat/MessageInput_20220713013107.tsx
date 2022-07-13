import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import { sendMessage } from '../../../config/firebase';
import './styles.css';

function MessageInput({ roomId }:any) {
    const { user } = useAuth();
    const [value, setValue] = React.useState('');

    const handleChange = (event:any) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event:any) => {
        event.preventDefault();
        sendMessage(roomId, user, value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit} className="message-input-container">
            <input
                type="text"
                placeholder="Enter a message"
                value={value}
                onChange={handleChange}
                className="message-input"
                required
                minLength={1}
            />
            <button type="submit" disabled={value.length < 1} className="send-message">
                Send
            </button>
        </form>
    );
}

export { MessageInput };