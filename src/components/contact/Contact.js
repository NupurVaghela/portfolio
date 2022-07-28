import React from 'react'
import "./contact.css";
const Contact = () => {

    function clickHandler(){
        alert("submitted");
      }
     
  return (
      <div className="container" id="contact">
   
   <div className="h1">
         <h1>Contact Me</h1>
    
   </div>
   <div className="form">
           <form>
               <label>Your Name</label>
               <input type="text" placeholder='Enter Your Name'></input>
               <label>Email</label>
               <input type="email" placeholder='Email'></input>
               <label>Message</label>
               <textarea rows="6" placeholder=" Message "></textarea>
               <button className="btn" onClick={clickHandler}>Submit</button>
           </form>
       </div>  
  
   </div>
  )
}

export default Contact;
