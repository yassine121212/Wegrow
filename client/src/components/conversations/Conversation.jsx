import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== localStorage.getItem("id"));

    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/users/friend/?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
     <div className="conversation">
                            <img className="conversationImg" src={"http://localhost:8080/static/"+user?.profilePicture} alt=""></img>

      <span className="conversationName">{user?.userName}</span>
    </div>
   );
}
