import React from "react";

function Contacts(){
    return(
        <section className="container relative md:min-h-screen h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r dark:border-slate-700">
                <div className="absolute inset-0 bg-[url(https://images.pexels.com/photos/20387249/pexels-photo-20387249/free-photo-of-summer-resort-with-pool.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-center bg-cover" />
                    <a href="contact" className="relative z-20 flex items-center text-4xl font-lg font-bold">
                        Contact Us
                    </a>
                    
                </div>

                <div className="container p-5 lg:pr-60 lg:pl-20">
                <h2 className="text-4xl font-semibold leading-10 mb-11">Get in Touch</h2>
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Name" />
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Email" />
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Phone" />
                
                <textarea className="w-full text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-md border border-gray-200 focus:outline-none p-4 mb-10" placeholder=" write your message here." rows={10} cols={30}>
                </textarea>
                <button className="w-20 mx-auto rounded h-12 text-white text-base font-semibold leading-6 transition-all duration-200 hover:bg-[rgb(163,1,63)] bg-[rgb(205,1,80)] shadow-sm">Send</button>
            </div>
            <div className='my-5 text-3xl'>
                    <h1>
                        Location
                    </h1>
                </div>
        </section>
    )
}

export default Contacts;