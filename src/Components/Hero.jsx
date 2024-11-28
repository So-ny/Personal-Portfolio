/**
 * @copyright 2024 Syon Chau
 * @license Apache-2.0
 */


import { useEffect, useRef } from "react";
import Typed from "typed.js";

/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";


const Hero = () => {
    const typedElement = useRef(null); // Ref for the element to type into

    useEffect(() => {
      const options = {
        strings: [
          "Building Scalable Modern Websites For The Future",
          "Creating Responsive and Interactive Designs",
          "Developing Efficient Web Applications",
        ],
        typeSpeed: 20,
        backSpeed: 30,
        loop: true,
      };
  
      const typed = new Typed(typedElement.current, options);
  
      return () => {
        typed.destroy(); // Cleanup on component unmount
      };
    }, []);
  return (
    <section 
    id = "home"
    className="pt-28 lg:pt-36">
        <div className="container lg:grid lg:grid-cols-2 items-center 
        lg:gap-10">

            <div>

                <div className="flex items-center gap-3">

                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img 
                        src="/images/elmo burning.jpeg"
                        width = {40}
                        height = {40} 
                        alt="Syon Chau portrait"
                        className="img-cover"
                        />
                    </figure>
                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping">

                            </span>
                        </span>
                        Available For Work
                    </div>
                </div>
                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                    <span ref={typedElement}></span>
                </h2>
                <div className="flex items-center gap-3">
                    <ButtonPrimary 
                    href = "/images/Syon_Chau_Resume.docx.pdf"
                    label="Download CV"
                    icon = "download"
                    download
                    /> 

                    <ButtonOutline 
                    href = "#about"
                    label = "Scroll down"
                    icon = "arrow_downward"
                    />
                </div>
            </div>
            

            <div className="hidden lg:block">
                <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25%
                via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                    <img 
                    src="/images/professional-img.png"
                    width = {416}
                    height = {600} 
                    alt="Syon Chau"
                    className="relative w-full h-full translate-y-[20px]" 
                    />
                </figure>
            </div>

        </div>
    </section>
)
}

export default Hero