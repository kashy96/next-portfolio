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
                    "cursor-pointer overflow-hidden relative card h-[20rem] rounded-md shadow-xl max-w-full mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[#1A202E]" // Updated to bg-color
                    )}
                >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-col justify-between h-full">
                        {/* Web Development Icon */}
                        <div className="mb-4 text-gray-50 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-50">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5v14l11-7-11-7z" />
                            </svg>
                        </div>

                        {/* Text content at the bottom */}
                        <div className="mt-auto">
                            <h1 className="font-bold text-xl md:text-2xl text-gray-50 text-center">
                                Web Development
                            </h1>
                            <p className="font-normal text-sm text-gray-50 text-center my-4">
                                Build custom, high-performance websites and web applications using modern frontend and backend technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-full w-full group/card">
                <div
                    className={cn(
                    "cursor-pointer overflow-hidden relative card h-[20rem] rounded-md shadow-xl max-w-full mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[#1A202E]" // Updated to bg-color
                    )}
                >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-col justify-between h-full">
                        {/* ERP Solutions Icon */}
                        <div className="mb-4 text-gray-50 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-50">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5v14l11-7-11-7z" />
                            </svg>
                        </div>

                        {/* Text content at the bottom */}
                        <div className="mt-auto">
                            <h1 className="font-bold text-xl md:text-2xl text-gray-50 text-center">
                                ERP Solutions
                            </h1>
                            <p className="font-normal text-sm text-gray-50 text-center my-4">
                                Develop tailored ERP systems that streamline and automate your business processes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-full w-full group/card">
                <div
                    className={cn(
                    "cursor-pointer overflow-hidden relative card h-[20rem] rounded-md shadow-xl max-w-full mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[#1A202E]" // Updated to bg-color
                    )}
                >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-col justify-between h-full">
                        {/* CMS Development Icon */}
                        <div className="mb-4 text-gray-50 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-50">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4z" />
                            </svg>
                        </div>

                        {/* Text content at the bottom */}
                        <div className="mt-auto">
                            <h1 className="font-bold text-xl md:text-2xl text-gray-50 text-center">
                                CMS Development
                            </h1>
                            <p className="font-normal text-sm text-gray-50 text-center my-4">
                                Build dynamic and easy-to-manage CMS platforms for efficient content management.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-full w-full group/card">
                <div
                    className={cn(
                    "cursor-pointer overflow-hidden relative card h-[20rem] rounded-md shadow-xl max-w-full mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[#1A202E]" // Updated to bg-color
                    )}
                >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-col justify-between h-full">
                        {/* Full Stack Applications Icon */}
                        <div className="mb-4 text-gray-50 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-50">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" />
                            </svg>
                        </div>

                        {/* Text content at the bottom */}
                        <div className="mt-auto">
                            <h1 className="font-bold text-xl md:text-2xl text-gray-50 text-center">
                                Full Stack Applications
                            </h1>
                            <p className="font-normal text-sm text-gray-50 text-center my-4">
                                Design and develop complete web applications with both frontend and backend expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-full w-full group/card">
                <div
                    className={cn(
                    "cursor-pointer overflow-hidden relative card h-[20rem] rounded-md shadow-xl max-w-full mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[#1A202E]" // Updated to bg-color
                    )}
                >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-col justify-between h-full">
                        {/* API Development & Integration Icon */}
                        <div className="mb-4 text-gray-50 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-50">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m7-7H5" />
                            </svg>
                        </div>

                        {/* Text content at the bottom */}
                        <div className="mt-auto">
                            <h1 className="font-bold text-xl md:text-2xl text-gray-50 text-center">
                                API Development & Integration
                            </h1>
                            <p className="font-normal text-sm text-gray-50 text-center my-4">
                                Create and integrate scalable APIs (REST & GraphQL) to enhance data flow and connectivity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-full w-full group/card">
                <div
                    className={cn(
                    "cursor-pointer overflow-hidden relative card h-[20rem] rounded-md shadow-xl max-w-full mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[#1A202E]" // Updated to bg-color
                    )}
                >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-col justify-between h-full">
                        {/* Database Architecture Icon */}
                        <div className="mb-4 text-gray-50 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-50">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18M3 9h18M3 14h18M3 19h18" />
                            </svg>
                        </div>

                        {/* Text content at the bottom */}
                        <div className="mt-auto">
                            <h1 className="font-bold text-xl md:text-2xl text-gray-50 text-center">
                                Database Architecture & Optimization
                            </h1>
                            <p className="font-normal text-sm text-gray-50 text-center my-4">
                                Optimize and design efficient databases for scalability, performance, and reliability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default Services