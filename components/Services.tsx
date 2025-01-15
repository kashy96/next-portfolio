import React from 'react'
import { cn } from "@/lib/utils"

const Services = () => {
  return (
    <div className='flex flex-col gap-5 my-20'>
       
        <div className="text-center relative w-fit mx-auto mb-10">
            <h2 className="text-yellow-400 font-semibold text-3xl uppercase tracking-widest">
                Services
            </h2>
            <div className="relative mt-2">
                <div className="absolute inset-0 h-[2px] bg-gray-600"></div>
                <div className="mx-auto h-[2px] w-12 bg-yellow-400 relative z-10"></div>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className="max-w-full w-full group/card">
                <div
                    className={cn(
                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-full mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fit=crop&w=1650&h=800&q=80')] bg-cover"
                    )}
                >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-row items-center space-x-4 z-10"></div>
                    <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        Web Development
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                        Build custom, high-performance websites and web applications using modern frontend and backend technologies.
                    </p>
                    </div>
                </div>
            </div>
            <div className="max-w-full w-full group/card">
                <div
                    className={cn(
                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-full mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGVycF9zb2x1dGlvbnxlbnwwfHx8fDE2NzY3MDkzMjA&ixlib=rb-1.2.1&q=80')] bg-cover"
                    )}
                >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-row items-center space-x-4 z-10"></div>
                    <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        ERP Solutions
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                        Develop tailored ERP systems that streamline and automate your business processes.
                    </p>
                    </div>
                </div>
            </div>
            <div className="max-w-full w-full group/card">
                <div
                    className={cn(
                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-full mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[url('https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNvbnRlbnQgbWFuYWdlbWVudHxlbnwwfHx8fDE2NzY3MDk2NTI&ixlib=rb-1.2.1&q=80')] bg-cover"
                    )}
                >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-row items-center space-x-4 z-10"></div>
                    <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        CMS Development
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                        Build dynamic and easy-to-manage CMS platforms for efficient content management.
                    </p>
                    </div>
                </div>
            </div>

            <div className="max-w-full w-full group/card">
                <div
                    className={cn(
                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-full mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
                    )}
                >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-row items-center space-x-4 z-10"></div>
                    <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        Full Stack Applications
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                        Design and develop complete web applications with both frontend and backend expertise.
                    </p>
                    </div>
                </div>
            </div>

            <div className="max-w-full w-full group/card">
                <div
                    className={cn(
                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-full mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXceSygEMnYSa34hHMAnsfo7fpjwOJgfg_vQ&s')] bg-cover"
                    )}
                >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-row items-center space-x-4 z-10"></div>
                    <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        API Development & Integration
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                        Create and integrate scalable APIs (REST & GraphQL) to enhance data flow and connectivity.
                    </p>
                    </div>
                </div>
            </div>

            <div className="max-w-full w-full group/card">
                <div
                    className={cn(
                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-full mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fit=crop&w=1650&h=800&q=80')] bg-cover"
                    )}
                >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-row items-center space-x-4 z-10"></div>
                    <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        Database Architecture & Optimization
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                        Optimize and design efficient databases for scalability, performance, and reliability.
                    </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Services