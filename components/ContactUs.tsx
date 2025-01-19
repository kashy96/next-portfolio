import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LinkedInIcon, YouTubeIcon, FacebookIcon, GitHubIcon } from "@/components/icons"
import { Resend } from "resend";
import { EmailTemplate } from "./email-template";

const ContactUs: React.FC = () => {

  // const resend = new Resend(process.env.RESEND_API_KEY);
  const resend = new Resend('re_bVUxtmki_Jqp5sunAHbYmkxYUsYEUVG2j');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (key: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const sendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();  // Optional: Prevents the default behavior (like page reload)
  
    try {
      const emailTemplate = await EmailTemplate({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
  
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['engrmuhammadkashif96@gmail.com'],
        subject: formData.subject,
        react: emailTemplate,
      });
      console.log('data is', data);
      
      if (error) {
        console.log(error);
        return alert("Error sending email: " + error);
      }
  
      alert("Email sent successfully!");
    } catch (error) {
      console.log(error);
      
      console.error(error);
      alert('Failed to generate email template');
    }
  };
  
  

  return (
    <section className=" text-white my-20">
        {/* Section Title */}
        <div className="text-center relative w-fit mx-auto mb-10">
            <h2 className="text-yellow-400 font-semibold text-3xl uppercase tracking-widest">
              Contact
            </h2>
            <div className="relative mt-2">
              <div className="absolute inset-0 h-[2px] bg-gray-600"></div>
              <div className="mx-auto h-[2px] w-12 bg-yellow-400 relative z-10"></div>
            </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section: Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Just Say Hello</h3>
            <div className="space-y-5">
              {/* Name Input */}
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={(e)=>handleChange('name', e.target.value)}
                required
                className="bg-gray-800 text-white"
              />
              {/* Email Input */}
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={(e)=>handleChange('email', e.target.value)}
                required
                className="bg-gray-800 text-white"
              />
              {/* Subject Input */}
              <Input
                type="text"
                name="subject"
                placeholder="Your Subject"
                onChange={(e)=>handleChange('subject', e.target.value)}
                required
                className="bg-gray-800 text-white"
              />
              {/* Message Textarea */}
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                onChange={(e)=>handleChange('message', e.target.value)}
                required
                className="bg-gray-800 text-white"
              />
              {/* Submit Button */}
              <Button
                onClick={sendEmail}
                className="bg-yellow-500 text-black hover:bg-yellow-600 w-full"
              >
                Send Message
              </Button>
            </div>
          </div>

          {/* Right Section: Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400 mb-6">
                {`I'd love to hear from you! Whether you have a question, need assistance, or just want to say hello, feel free to reach out to me. I'm here to help and ensure your experience is smooth and enjoyable.`}
            </p>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center">
                <span className="text-yellow-500 mr-3">📧</span>
                <div>
                  <p>engrmuhammadkashif@gmailc.com</p>
                  <p>info@support.com</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-center">
                <span className="text-yellow-500 mr-3">📞</span>
                <div>
                  <p>+92 346 8743023</p>
                  <p>+92 311 2003358</p>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-center">
                <span className="text-yellow-500 mr-3">📍</span>
                <div>
                  <p>Katlang Mardan, Pakistan</p>
                  <p>Kohi barmol, near Makkhi masjid Shahwand</p>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mt-6">
              Visit my social profile and get connected
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61563124620707"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 text-2xl"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-kashif-928655142/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:text-blue-950 text-2xl"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-600 text-2xl"
              >
               <YouTubeIcon />
              </a>
              <a
                href="https://github.com/kashy96"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
              >
               <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ContactUs;
