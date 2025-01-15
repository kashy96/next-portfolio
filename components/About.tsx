import React from 'react'
import Image from 'next/image'
import MyImage from "../public/my-pic.jpg"
import { Button } from './ui/button'

const About = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'my-resume.pdf';
        link.download = 'My resume';
        link.click();
    };

    return (
        <div className='my-10'>
            <div className="text-center relative w-fit mx-auto mb-10">
                <h2 className="text-yellow-400 font-semibold text-3xl uppercase tracking-widest">
                    About Me
                </h2>
                <div className="relative mt-2">
                    <div className="absolute inset-0 h-[2px] bg-gray-600"></div>
                    <div className="mx-auto h-[2px] w-12 bg-yellow-400 relative z-10"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
                <div className="flex justify-center w-full">
                    <Image src={MyImage} alt="testing" className="w-full rounded-lg shadow-lg" />
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl md:text-4xl lg:text-4xl text-white relative z-20">
                        {`Hi there, I'm Muhammad Kashif`}
                    </h2>
                    <p className='text-xl md:text-2xl lg:text-3xl text-primary'>Full stack developer</p>
                    <div className="space-y-5 text-white">
                        <p className="text-base md:text-lg">
                            I am a Full Stack Developer with a strong focus on building scalable and efficient web applications. My expertise spans both front-end and back-end development, ensuring smooth user experiences and robust functionality. I am passionate about creating clean, maintainable code and delivering high-performance solutions.
                        </p>
                        <div className="space-y-5">
                            <p><strong>Birthday:</strong> Feb 13, 1996</p>
                            <p><strong>Phone:</strong> +92 346 8743023</p>
                            <p><strong>Email:</strong> engrmuhammadkashif96@gmail.com</p>
                            <p><strong>From:</strong> Kohi Barmol, Mardan, Pakistan.</p>
                            <p><strong>Language:</strong> English, Urdu, Pashto</p>
                            <p><strong>Freelance:</strong> Available</p>
                        </div>
                        <Button className='text-black text-md mt-5' onClick={handleDownload} >Download CV</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About