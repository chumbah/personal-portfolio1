import React from "react";
import Skills from "./Skils";
import Socials from "./Socials";


export default function Navbar(){
const [like, setLike] = React.useState({
    fname:"Alex",
    isLike: false
  })
let likeIcon = like.isLike ? "like.png" : "unlike.png"

   function toggleLike(){
          setLike(prevLike => ({  
            ...prevLike, 
            isLike: !prevLike.isLike 
               
          }))
   }

   const [displayStyle, setDisplayStyle] = React.useState('none'); // Initial display style

  // Function to toggle display style
  const toggleDisplayStyle = () => {
    // Toggle between 'block' and 'none' display styles
    setDisplayStyle(displayStyle === 'block' ? 'none' : 'block'); 
    console.log("clicked")
  }

return (
 <>
 <div className="navbar">
    <div className="logo">KIPCHUMBA{/*<img src="./user2.png"></img>*/} </div>
    
    <div className="links">
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#socials">Socials</a></li>
    </ul></div>
    <div className="links-icon" onClick={toggleDisplayStyle}><img src="bars.png"></img> </div>
    </div>
    <div className="mobile-links" style={{ display: displayStyle }}>
   <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#socials">Socials</a></li>
    </ul></div>

{/*body */}
<div className="about-card" id="home">
  <div className="about-me">
  <h1>Hello!</h1>
  <h1>I'm Alex Kipchumba</h1>
<div className="dynamic-text">
  <ul>
  <li><p><span>A front-end developer</span></p></li>
  <li><p><span>A React developer</span></p></li>
  <li><p><span>I make custom web applications</span></p></li>
  </ul>
</div></div>
  <div className="about-image">
    <img src="user2.png"></img>
  </div></div>
  <div className="buttons-1">
  <button>Hire me</button>
  <button><a href="./alex-cv.pdf"download="Alex-cv">Download Cv</a></button>
  
</div>
    
  <div className="my-about" id="about">
    <div className="my-image">
      <img src="user2.png"></img>
    </div>
    <div className="my-skills">
      <h1>About</h1>
      <h3>Front-end Developer</h3>
      <h3>Web applications developer</h3>
      <p>I am a React developer based in Kenya with skills to bring your ideas to life.
        I have experience in Html, Css, React, Javascript, Mysql among others.
      </p>
    </div>
    <div className="buttons">
    <button>Hire me</button>
  <button><a href="./alex-cv.pdf"download="Alex-cv">Download Cv</a></button>
  </div></div>
  {/*
   <div className='contact'>
     <img src="user2.png"></img>
     <div className='likebtn'>
   <button className="like-element" onClick={toggleLike}>
     <img src={likeIcon}></img>
   </button></div>
   
   <h3>Alex Kipchumba</h3>
   <h5>The creator</h5>
</div>*/}
</>
)
}

