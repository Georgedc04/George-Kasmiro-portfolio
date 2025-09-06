import { FaFacebookF,  FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">George Kasmiro</h3>
        <p className="text-lg font-normal text-gray-400">
          Computer Science & Cybersecurity Enthusiast
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Passionate about technology, ethical hacking, and network security. Working on projects that improve system protection and digital infrastructure.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 92588 85387</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">gkamsiro@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/georgedc04?igsh=MWJtNTJ1YWd3cHoyZg%3D%3D&utm_source=qr" target="_blank">
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/george-kasmiro-2211a42b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://www.facebook.com/share/19iiRCkttK/?mibextid=wwXIfr" target="_blank">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
