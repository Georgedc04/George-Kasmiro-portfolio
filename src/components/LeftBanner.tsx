import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF,  FaLinkedinIn, FaReact, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["n Ethical Hacker.", " CS Engineer" ," Full Stack Developer.", " Graphic Desiner"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">George Kasmiro</span>
        </h1>
         <div className=" min-w-[280px] h-20">
            <h2 className="text-4xl font-bold text-white"> a<span>{text}</span> <Cursor cursorStyle="|" cursorColor="#ff014f" /> </h2>
         </div>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          I'm a Computer Science engineer specializing in cybersecurity, passionate about building secure and efficient solutions. I enjoy solving problems, learning new tech, and creating projects that make a real impact.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/georgedc04?igsh=MWJtNTJ1YWd3cHoyZg%3D%3D&utm_source=qr" target="_blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/george-kasmiro-2211a42b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
            >
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
