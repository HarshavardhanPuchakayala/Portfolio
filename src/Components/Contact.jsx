import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <section className="ContactSection" id='Contact'>
        <div className="ContactContent">
                <h2 className="sectionTitle">Get in touch</h2>
                <span className="sectionSubtitle">contact Me</span>
        </div>
        <div className="contactContainer">

          <div className='ContactConnet'>
                <h1 className="ContactHeading">Let's Connect</h1>
                <p className="ContactTest">I'm currently looking for new opportunities,my inbox is always open.Whether you have a question or just want to say hi,I'll try my best to get back to you!</p>
                <div className="ContactIcons">
                    <a href="https://www.linkedin.com/in/harshavardhan-puchakayala/" target='_blank'>
                    <ion-icon name="logo-linkedin"></ion-icon>
                    </a>

                    <a href="https://github.com/HarshavardhanPuchakayala"  target='_blank'>
                    <ion-icon name="logo-github"></ion-icon>
                    </a>
                </div>
          </div>
           
            <div className="ContactContentForm">
                <form action="" className="ContactForm">

                <div className="ContactFormDiv">
                        <label htmlFor="" className="ContactFormTag">Name</label>
                        <input type="text" name='name'  className='ContactFormInput' placeholder='Enter your name' required/>
                    </div>

                    <div className="ContactFormDiv">
                        <label htmlFor="" className="ContactFormTag">E-Mail</label>
                        <input type="email" name='email' className='ContactFormInput' placeholder='Enter your email' required />
                    </div>

                    <div className="ContactFormDiv">
                        <label htmlFor="" className="ContactFormTag">Message</label>
                        <textarea name='name' className='ContactFormInput'  placeholder="Let's talk about..." required ></textarea> 
                    </div>
                    <button className='SubmitButton'  type='submit' >Send message</button>
                </form>
            </div>
        </div>
    </section>
  )
}
{
    /*
    import { db } from './Firebase'
import {collection, addDoc} from 'firebase/firestore'




     const [ email,setEmail]=useState()
    const [ name,setName]=useState()
    const [message,setMessage]=useState()
    const dbref = collection(db, 'userInfo')
    const send = async () =>{
        try{
                await addDoc(dbref, {Name:name, Email:email,Message:message})
                alert()
        }catch(error){
        }
    }
    
    */
}