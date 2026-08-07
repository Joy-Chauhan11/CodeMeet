import { useEffect, useRef, useState } from "react";

export default function ChatPanel({
  socket,
  roomId,
  currUser,
  messages,
  setMessages,
  message,
  setMessage,
}) {
  
  const bottomRef = useRef(null);

  // ==========================
  // Receive Messages
  // ==========================
  useEffect(() => {
  if (!socket) return;

  const handleReceive = (data) => {
    setMessages((prev) => [...prev, data]);
  };

  socket.on("receive-message", handleReceive);

  return () => {
    socket.off("receive-message", handleReceive);
  };
}, [socket, setMessages]);

  // ==========================
  // Auto Scroll
  // ==========================
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // ==========================
  // Send Message
  // ==========================
  const sendMessage = () => {
    if (!socket) return;

    const text = message.trim();

    if (!text) return;

    socket.emit("send-message", {
      roomId,
      sender: {
        id: currUser.id,
        name: currUser.fullName,
        image: currUser.imageUrl,
      },
      message: text,
    });

    setMessage("");
  };

  // ==========================
  // Enter Key
  // ==========================
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="h-full flex flex-col bg-base-100">

      {/* ================= Messages ================= */}

      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {messages.length === 0 && (
          <div className="h-full flex items-center justify-center text-base-content/50">
            No messages yet 👋
          </div>
        )}

        {messages.map((msg, index) => {
          const isMe = msg.sender.id === currUser.id;

          return (
            <div
              key={index}
              className={`chat ${isMe ? "chat-end" : "chat-start"}`}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={msg.sender.image}
                    alt={msg.sender.name}
                  />
                </div>
              </div>

              <div className="chat-header text-xs mb-1">
                {msg.sender.name}
              </div>

              <div
                className={`chat-bubble ${
                  isMe
                    ? "chat-bubble-primary"
                    : ""
                }`}
              >
                {msg.message}
              </div>

              <div className="chat-footer opacity-60 text-xs">
                {new Date(msg.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          );
        })}

        <div ref={bottomRef} />

      </div>

      {/* ================= Input ================= */}

      <div className="border-t border-base-300 p-3">

        <div className="flex gap-2">

          <input
            type="text"
            className="input input-bordered flex-1"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button
            className="btn btn-primary"
            onClick={sendMessage}
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
}