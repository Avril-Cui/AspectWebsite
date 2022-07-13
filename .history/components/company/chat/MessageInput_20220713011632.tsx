import { useAuth } from '../../../context/AuthContext';
import { sendMessage } from '../../../config/firebase';
import { useState } from 'react';
import styles from "MessageInput.module.css";

function MessageInput({ roomId }: any) {
    const { user } = useAuth();
    const [value, setValue] = useState('');

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        sendMessage(roomId, user, value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.message_input_container}>
            <input
                type="text"
                placeholder="Enter a message"
                value={value}
                onChange={handleChange}
                className={styles.message_input}
                required
                minLength={1}
            />
            <button type="submit" disabled={value < '1'} className={styles.send_message}>
                Send
            </button>
        </form>
    );
}

export { MessageInput };