"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import picture from '@/../public/rises2trimmed.webp'
const Contact = () => {
    const [err, set_err] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    useEffect(() => {
        const second = setTimeout(() => {
            set_err("");
        }, 3000);
        return () => {
            clearTimeout(second);
        }
    }, [err])

    async function handle_submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.currentTarget;
        const form_data = new FormData(form);
        const data = Object.fromEntries(form_data.entries());
        try {
            const res = await fetch("/api/mail", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            })

            const result = await res.json()

            if (res.status === 200) {
                form.reset()
                set_err("✅ Mail sent successfully! I'll get back to you soon.")
            } else {
                set_err(`❌ ${result.error || "Failed to send email"}`)
            }
        } catch (error) {
            console.error("Form submission error:", error)
            set_err("❌ Network error. Please check your connection and try again.")
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <div className='container flex flex-col lg:flex-row items-center justify-center mx-auto my-10 p-4 z-20'>
            <div className='container max-w-6xl flex flex-col lg:flex-row justify-center items-center overflow-hidden'>
                <Image className='rounded-lg shadow-lg mx-auto' src={picture} width={400} height={400} alt='rises' unoptimized />
                <div className='max-w-md mx-auto p-8 rounded-lg mt-4 lg:mt-0'>
                    <h3 className='font-semibold text-2xl mb-4'>Get in <span className='decoration-wavy underline decoration-1 underline-offset-2'>touch</span></h3>
                    <p className="mb-6 text-lg">
                        I would love to hear from you! If you have any questions, feedback, or inquiries, please feel free to reach out to me using the contact form.
                    </p>
                    <form method='POST' onSubmit={handle_submit} className='flex flex-col space-y-4'>
                        <label htmlFor='name' className=''>Name</label>
                        <input className='w-full focus:outline-none border-2 px-2 py-2 rounded-md dark:border-gray-300 border-gray-500 bg-emerald-600/60' type='text' name='name' minLength={3} disabled={isSubmitting} required />
                        <label htmlFor='email' className=''>Email</label>
                        <input className='w-full focus:outline-none border-2 px-2 py-2 rounded-md dark:border-gray-300 border-gray-500 bg-emerald-600/60' type='email' name='email' disabled={isSubmitting} required />
                        <label htmlFor='message' className=''>Message</label>
                        <textarea className='scrollbar-hide resize-none w-full focus:outline-none border-2 px-2 py-2 rounded-md dark:border-gray-300 border-gray-500 bg-emerald-600/60' name='message' disabled={isSubmitting} rows={4} minLength={5} maxLength={2000} required />
                        <p className=''>{err}</p>
                        <button className='cursor-pointer float-left w-fit dark:bg-gray-100 dark:text-emerald-700 bg-emerald-600 text-gray-100 rounded-md px-2 py-2' type='submit'>{!isSubmitting ? 'Submit' : 'Submitting...'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
