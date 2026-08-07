import { useState } from "react";
import { Video, MessageCircle } from "lucide-react";

import VideoPanel from "./VideoPanel";
import ChatPanel from "./ChatPanel";

export default function CollaborationPanel({
  socket,
  roomId,
  session,
  currUser,
  messages,
  setMessages,
  message,
  setMessage,
}) {
  const [activeTab, setActiveTab] = useState("video");

  return (
    <div className="h-full flex flex-col bg-base-100 border border-base-300 rounded-xl overflow-hidden">

      {/* Header */}
      <div className="flex border-b border-base-300">

        <button
          onClick={() => setActiveTab("video")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 transition
            ${
              activeTab === "video"
                ? "bg-primary text-primary-content"
                : "hover:bg-base-200"
            }`}
        >
          <Video size={18} />
          Video
        </button>

        <button
          onClick={() => setActiveTab("chat")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 transition
            ${
              activeTab === "chat"
                ? "bg-primary text-primary-content"
                : "hover:bg-base-200"
            }`}
        >
          <MessageCircle size={18} />
          Chat
        </button>

      </div>

      {/* Body */}
      <div
  className={`h-full ${
    activeTab === "video" ? "block" : "hidden"
  }`}
>
  <VideoPanel
    socket={socket}
    roomId={roomId}
    session={session}
  />
</div>

<div
  className={`h-full ${
    activeTab === "chat" ? "block" : "hidden"
  }`}
>
  <ChatPanel
    socket={socket}
    roomId={roomId}
    currUser={currUser}
    messages={messages}
    setMessages={setMessages}
    message={message}
    setMessage={setMessage}
  />
</div>

    </div>
  );
}