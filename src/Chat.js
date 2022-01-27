import { AttachFile, SearchOutlined } from '@mui/icons-material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MoreVert from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import { Avatar, IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./Chat.css";
import db from './firebase';

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ));

            db.collection('rooms')
                .doc(roomid)
                .collection("messages")
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) =>
                 doc.data())
                    ));
        }
    }, [roomId]);
    

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("you type>>>", input);
        
        setInput("");
    };
    return (
        <div className="chat">
            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_header">
                    <h3>{roomName}</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className='chat_headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                {message.map((message) => (
                    <p className={`chat_message ${true && "chat_reciever"}`}>
                        <span className="chat_name">
                            {message.name}</span>
                        {message.message}
                        <span className="chat_timestamp">3:56pm
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>

                    </p>
                ))}
               
            </div>
            <div className='chat_footer'>
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)}
                        placeholder="Type a message" type="text" />
                    <button onClick={sendMessage}type="submit">Send a message</button>
                </form>
                <MicIcon />

            </div>
        </div>
    );
}

export default Chat
