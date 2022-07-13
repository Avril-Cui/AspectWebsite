import React from 'react';
import { getMessages } from '../../../config/firebase';

function useMessages(roomId:any) {
    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
        const unsubscribe = getMessages(roomId, setMessages);

        return unsubscribe;
    }, [roomId]);

    return messages;
}

export { useMessages };