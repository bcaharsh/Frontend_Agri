import React from 'react'
import axios from 'axios'

export default function Contact() {
   const contacthandler=(event)=>{
      const Name=event.target.Name.value
      const PhoneNumber=event.target.PhoneNumber.value
      const message=event.target.message.value
      const data={Name,PhoneNumber,message}
      axios.post('http://127.0.0.1:8000/apicontact/', data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
   }
  return (
    <>
      <div className="contact">
         <div className="container">
            <div className="row">
               <div className="col-md-12 ">
                  <div className="titlepage text_align_center">
                     <span>Our Contact</span>
                     <h2>Requste A Call Back</h2>
                  </div>
               </div>
               <div className="col-md-8 offset-md-2">
                  <form id="request" className="main_form" onSubmit={contacthandler}>
                     <div className="row">
                        <div className="col-md-12 ">
                           <input className="form_control" placeholder="Your Name" type="type" name="Name"/> 
                        </div>
                        <div className="col-md-12">
                           <input className="form_control" placeholder="Phone Number" type="type" name="PhoneNumber"/>                          
                        </div>
                       
                        <div className="col-md-12">
                           <input className="textarea" placeholder="Message" type="type" name="message"/> 
                        </div>
                        <div className="col-md-12">
                           <div className="group_btn">
                           <button className="send_btn">Send</button>
                         </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}
