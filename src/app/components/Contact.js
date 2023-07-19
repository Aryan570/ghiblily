"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false)
  const shouldsubmit=()=>{
    if(name && email && message && validmail(email) && validname(name) && message.length >4){
      return <button type="submit" value='Submit' onClick={(e)=>{handleSubmit(e)}} className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200  font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
    }
    else{
      return <button type="submit" value='Submit' disabled onClick={(e)=>{handleSubmit(e)}} className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200  font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 line-through">Submit</button>
    }
  }

  const validmail=(email)=>{
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( reg.test(email) ) {
       return true;
    }
    else{
      return false;
    }
  }
  const validname=(name)=>{
       if(name.match(/^[a-zA-Z]+$/) && name.length > 4 ){
        return true;
       }
       else{
        return false;
       }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success('🦄 Thanks for sending message! Have a nice day!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setSubmitted(true)
          setName('')
          setEmail('')
          setMessage('')
      let data = {
        name,
        email,
        message
      }
    fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
      }).then((res) => {
        console.log('Response received',res)
        if (res.status === 250) {
          console.log('Response succeeded!')
          
        }
      })
  };
  return (
    <section className="bg-gray-100 py-16">
      <ToastContainer />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 font-Pompiere">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="max-w-md mx-auto md:mr-8 mb-8 md:mb-0">
            <Image
              src="/../public/rises2trimmed.webp"
              alt="Contact Image"
              width={200} height={200}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-700 mb-6 text-lg">
              I would love to hear from you! If you have any questions, feedback, or inquiries, please feel free to reach out to me using the contact form.
            </p>
            <form method='POST' className="space-y-4">
              <div>
                <label htmlFor="name" className="text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  minLength={4}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-emerald-400 focus:border-emerald-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-emerald-400 focus:border-emerald-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  minLength={4}
                  className="resize-none w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-emerald-400 focus:border-emerald-400"
                  required
                ></textarea>
              </div>
              {shouldsubmit()}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

