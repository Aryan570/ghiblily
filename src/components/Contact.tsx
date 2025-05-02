import Image from 'next/image'
import { useState } from 'react'
import picture from '@/../public/rises2trimmed.webp'
const Contact = () => {
    const [err, set_err] = useState<string>("");
    async function handle_submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const form_data = new FormData(form);
        const data = Object.fromEntries(form_data.entries());
        const res = await fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.status === 200) {
            form.reset();
            set_err("Mail sent successfully");
        } else {
            const error = await res.json()
            set_err(error.error);
        }
    }
    return (
        <div className='container flex flex-col lg:flex-row items-center justify-center mx-auto my-10 p-4'>
            <div className='container max-w-6xl flex flex-col lg:flex-row justify-center items-center overflow-hidden'>
                <Image className='rounded-lg shadow-lg mx-auto' src={picture} width={400} height={400} alt='rises' unoptimized />
                <div className='max-w-md mx-auto backdrop-blur-sm p-8 rounded-lg shadow-lg mt-4 lg:mt-0'>
                    <h3 className='font-semibold text-2xl mb-4'>Get in Touch</h3>
                    <p className="mb-6 text-lg">
                        I would love to hear from you! If you have any questions, feedback, or inquiries, please feel free to reach out to me using the contact form.
                    </p>
                    <form method='POST' onSubmit={handle_submit} className='flex flex-col space-y-4'>
                        <label htmlFor='name' className=''>Name</label>
                        <input className='w-full focus:outline-none border-2 px-2 py-2 rounded-md dark:border-gray-300 border-gray-500' type='text' name='name' minLength={3} required />
                        <label htmlFor='email' className=''>Email</label>
                        <input className='w-full focus:outline-none border-2 px-2 py-2 rounded-md dark:border-gray-300 border-gray-500' type='email' name='email' required />
                        <label htmlFor='message' className=''>Message</label>
                        <textarea className='resize-none w-full focus:outline-none border-2 px-2 py-2 rounded-md dark:border-gray-300 border-gray-500' name='message' rows={4} minLength={5} maxLength={2000} required />
                        <p className=''>{err}</p>
                        <button className='cursor-pointer float-left w-fit' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
