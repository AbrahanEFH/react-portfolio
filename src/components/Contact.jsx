import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/f6ffa7fe-7fa7-4861-9a8f-488ac4278fb6" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#00CFC8]'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - Abrahandev@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-md' type="text" placeholder='Name' name='name' />
            <input className=' bg-[#ccd6f6] my-4 p-2 rounded-md' type="text" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 rounded-md' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center rounded-lg hover:bg-[#00CFC8] hover:border-[#00CFC8]' >Let's work together </button>
        </form>
    </div>
  )
}

export default Contact
