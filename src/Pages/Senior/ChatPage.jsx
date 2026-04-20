import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import "../../assets/css/senior/chat.css";
import { useChatStore } from "../../store/useChatStore";

export default function ChatPage() {

    const { userId } = useParams();
    const user = JSON.parse(localStorage.getItem("user")) || {};

    const {
        conversations,
        messages,
        fetchConversations,
        fetchMessages,
        sendMessage,
        loading
    } = useChatStore();

    const [selectedUser, setSelectedUser] = useState(userId || null);
    const [text, setText] = useState("");

    // ✅ Fetch conversation list
    useEffect(() => {
        if (user?.user_id) {
            fetchConversations({ user_id: user.user_id });
        }
    }, [user?.user_id]);

    // ✅ Fetch messages when user selected
    useEffect(() => {
        if (selectedUser) {
            fetchMessages({
                sender_id: user.user_id,
                receiver_id: selectedUser
            });
        }
    }, [selectedUser]);

    // ✅ Send message
    const handleSend = async () => {
        if (!text.trim()) return;

        try {
            await sendMessage({
                sender_id: user.user_id,
                receiver_id: selectedUser,
                message: text
            });

            setText("");

            fetchMessages({
                sender_id: user.user_id,
                receiver_id: selectedUser
            });

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="dashboard-page">
            <Navbar />

            <div className="container chat-container">

                <div className="chat-main">

                    {/* 🔹 LEFT: USERS LIST */}
                    <div className="chat-sidebar">
                        <h5>Chats</h5>

                        {conversations.length === 0 ? (
                            <p className="empty">No conversations</p>
                        ) : (
                            conversations.map((c) => (
                                <div
                                    key={c.user_id}
                                    className={`chat-user ${selectedUser == c.user_id ? "active" : ""}`}
                                    onClick={() => setSelectedUser(c.user_id)}
                                >
                                    {c.name}
                                </div>
                            ))
                        )}
                    </div>

                    {/* 🔹 RIGHT: CHAT BOX */}
                    <div className="chat-box">

                        {!selectedUser ? (
                            <div className="no-chat">
                                <p>Select a user to start chatting</p>
                            </div>
                        ) : (
                            <>
                                {/* MESSAGES */}
                                <div className="chat-messages">
                                    {messages.map((m) => (
                                        <div
                                            key={m.message_id}
                                            className={`msg ${m.sender_id === user.user_id ? "msg-right" : "msg-left"}`}
                                        >
                                            {m.message}
                                        </div>
                                    ))}
                                </div>

                                {/* INPUT */}
                                <div className="chat-input">
                                    <input
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        placeholder="Type message..."
                                    />
                                    <button onClick={handleSend} disabled={loading}>
                                        Send
                                    </button>
                                </div>
                            </>
                        )}

                    </div>

                </div>

            </div>
        </div>
    );
}