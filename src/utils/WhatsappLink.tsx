import React from "react";
import { FaWhatsapp } from "react-icons/fa";


const WhatsAppLink = () => {
    const whatsappLink = 'https://wa.me/qr/BOUD4BDXBOKSJ1';

    return (

        <div className="fixed top-[50%] cursor-pointer -rotate-90 right-0 text-center text-sm rounded-md px-5 py-2 bg-[#f9dddd] dark:bg-[#130e]  gap-2 translate-x-14 flex justify-center  items-center">

  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex gap-2">
  <p>Let's Chat</p>

            <FaWhatsapp size={20} color="#128C7E" />
        </a>
        </div>
      
    );
};

export default WhatsAppLink;