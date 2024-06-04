import React, { useRef } from "react";
import firebase from "firebase/compat/app";
import { onSnapshot } from "firebase/firestore";
import { contactCollection } from "./firebase";

export default function Socials(){
     
    function error1(){
        window.alert("Under construction! \n use social media below");
        
    }

    React.useEffect(()=>{
        onSnapshot(contactCollection, function())
    }, [])
    return(
        <>
        <div className="feedback" id="contact">
            <h2>Contact me for business</h2>
            <form >
                <div className="inputs">
                <label htmlFor="namebox">Name</label>
                <input type="text" placeholder="Enter your name" name="Fname" id="namebox"></input>
                </div>

                <div className="inputs">
                <label htmlFor="mailbox">Email</label>
                <input type="email" placeholder="Enter your email address" name="mail" id="mailbox"></input>
                </div>

                <div className="inputs">
                <label htmlFor="phonebox">Phone</label>
                <input type="numbers" placeholder="Enter your phone" name="phone-no" id="phonebox" ></input>
                </div>

                <div className="inputs">
                <label htmlFor="msgbox">Message</label>
                <div className="msgbx">
                <textarea placeholder="Enter your message" name="messagebox" id="msgbox" ></textarea>
                </div></div>
                <input onClick={error1} type="submit" value="send" id="sendBtn"></input>
            </form>
        </div>
        <div className="socials" id="socials">
            <h3>Kipchumba Alex</h3>
            <p>I always deliver on time. Feel free to interact with me through my social media accounts for work.</p>
        <div className="social-icons">
            <a href="https://www.instagram.com/aplus_dev?igsh=am04NG12cHA3eXUw">Instagram<img src="insta.png"></img></a>
            <a href="mailto:alexkebenei10@gmail.com">Gmail<img src="gmail.png"></img></a>
            <a href="https://x.com/AlecChumbah?s=09">X<img src="x1.png"></img></a>
            <a href="https://api.whatsapp.com/send?phone=+254115366805">Whatsapp<img src="whatsapp.png"></img></a>
        </div>
        </div>
        <div className="footer">
            <p>@2024, All rights reserved by Alex </p>
        </div>
        
        </>
    )
}