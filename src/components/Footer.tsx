import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../assets";
import { FadeIn } from "./FadeIn";

const Footer = () => {
  // Quick navigation links
  const renderLinks = (links: { name: string; href: string }[]) =>
    links.map((item, idx) => (
      <li key={idx}>
        <a
          href={item.href}
          className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
        >
          {item.name}
          <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
        </a>
      </li>
    ));

  return (
    <FadeIn className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      {/* Logo & Social */}
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/georgedc04"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/george-kasmiro-2211a42b4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://www.facebook.com/share/19iiRCkttK/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {renderLinks([
            { name: "My Projects", href: "#projects" },
            { name: "Services", href: "#services" },
            { name: "Testimonials", href: "#testimonials" },
          ])}
        </ul>
      </div>

      {/* Resources */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Resources
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <a
              href="/George_Kasmiro_CV.pdf" // put your CV in the public folder
              download
              className="hover:text-designColor duration-300 cursor-pointer"
            >
              Resume / CV
            </a>
          </li>
          <li>
            <a href="/privacy-policy" className="hover:text-designColor duration-300">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:text-designColor duration-300">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>

      {/* Connect */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Connect
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {renderLinks([
            { name: "LinkedIn", href: "https://www.linkedin.com/in/george-kasmiro-2211a42b4" },
            { name: "Portfolio Source Code", href: "https://github.com/Georgedc04/George-Kasmiro-portfolio.git" },
            { name: "Support", href: "#contact" },
          ])}
        </ul>
      </div>
    </FadeIn>
  );
};

export default Footer;
