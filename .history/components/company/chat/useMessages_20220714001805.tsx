import React from "react";
import { getMessages } from "../../../config/firebase";
import { useState } from "react";

function useMessages(roomId: any) {
  const [messages, setMessages] = useState<any[]>([]);

  React.useEffect(() => {
    const unsubscribe = getMessages(roomId, setMessages);

    return unsubscribe;
  }, [roomId]);

  return messages;
}

export default useMessages;
