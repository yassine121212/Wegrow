import "./messenger.css";
 import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../store/authcontext";
import axios from "axios";
import { io } from "socket.io-client";
import logoimg from "../../images/W.svg";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
   const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [followings, setfollowings] = useState([])
  const socket = useRef();
  const user= useContext(AuthContext);
  const scrollRef = useRef();
  const notif=[];
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
     });
    
  }, []);
  console.log("notif")
   
  console.log(notif)
  console.log(arrivalMessage)
  const hanluser = async ()=>{
    try {
      const username=localStorage.getItem("username")
      const url = "http://localhost:8080/api/users/we/";
      const  res  = await axios.get(url + username);
      if(res.status===200)
      {
          console.log(res)
          setfollowings(res.data.user.followings)
          
        
      }
   


} catch (error) {
      if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
      ) {
        console.log("error following")
      }
  }
  }
  useEffect(() => {
    hanluser()
  }, []);
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user.id);
    socket.current.on("getUsers", (users) => {
      console.log("**********************")
      console.log(users)
     setOnlineUsers(
       followings?.filter((f) => users.some((u) => u.userId === f))
      );
     });
  }, [user,followings]);
 
  console.log("online users")

  console.log(onlineUsers)
  console.log("user followings")
  console.log(followings)
  
    const getConversations = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/conversations/" + user.id);
        if(res) setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
   useEffect(() => {
    getConversations();
  },[user._id]);
  
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat,arrivalMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user.id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user.id
    );

    socket.current.emit("sendMessage", {
      senderId: user.id,
      receiverId,
      text: newMessage,
    });
   console.log("eeeeeeeeeee")
    try {
      const res = await axios.post("http://localhost:8080/api/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth",color :"red" });
  }, [messages]);
  const changeListFriends=(e)=>{
   }
  return (
    <>
       <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends"/* onChange={changeListFriends}*/  className="chatMenuInput" />
            {conversations.map((c) => (
              <div key={c} onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div key={m} ref={scrollRef}>
                      <Message message={m} own={m.sender === user.id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <div>
               <img  className="logochat"  src={logoimg} alt=""></img>
               </div>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user.id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </div>
    </>
  );
}
