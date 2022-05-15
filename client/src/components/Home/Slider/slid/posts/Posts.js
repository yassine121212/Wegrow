import React, { useEffect, useRef, useState } from 'react';
import { Modal, Button } from 'antd';
import "antd/dist/antd.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
import './Posts.css';
import logo from "../../../../../images/logo192.png";
import axios from "axios";
import {input,Card} from "antd"

function Post(){
  const username=localStorage.getItem("username");
  const id=localStorage.getItem("id");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {content,setContent} = useState('');
const [countries,setCountries] = useState([]);
const [countryMarch,setCountryMarch] = useState([]);
useEffect(() =>{
  const loadCountries = async () =>{
    const response = await axios.get("");
    setCountries(response.data)
  }
})
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
const desc = useRef();
const [file,setFile] = useState(null);
const handelSubmit = async (e) =>{
e.preventDefault()
const newPost ={
 userId:id,
 desc: desc.current.value
}
if(file){

  const fileName = Date.now() +file.name;
  const data = new FormData();
  data.append('file', file);
  data.append('fileName', fileName);
  newPost.img = fileName;
}
try{
 await axios.post("/upload");
}catch(err){

}
try{
  await axios.post("/posts",newPost);
  window.location.reload()
 }catch(err){}
 };

  return (
    <>
      <Button className="page" type="primary" onClick={showModal}>
       Poster Vos Services
      </Button>
      <Modal className="model" title=" Poster Vos Services" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className="shareTop">
        <img className="shareProfileImg" src={logo} alt="" />
     <input type="text" value={content} onChange ={(e)=> setContent(e.target.value)} placeholder={"What's in your mind "+username+" ?"}
     className='Posterinput' ref={desc}/>
     
     </div>
     <hr className="shareHr"/>
     <form className="shareBottom" onSubmit={handelSubmit}>
            <div className="shareOptions">
                <div className="shareOption">
                <label htmlFor="file" className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                    <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(
                      e.target.files[0])}/>
                </label>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
                </div>
      </div>
    </form>
      </Modal>
    </>
  );
};

export default Post;