/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import computer from "../assets/lottie/computer.json";
import { TypeAnimation } from "react-type-animation";
const About = () => {
  return (
    <>
      <section
        id="about"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins']  max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 flex justify-between max-sm:flex-col gap-7">
          <div className="INTRO text-[70px] leading-[80px] font-semibold max-sm:text-[50px] max-sm:leading-[70px] max-sm:font-semibold">
            <h3 className="text-[#00040f] dark:text-white">Hi,I'm</h3>
            <span className="bg-clip-text text-transparent bg-gradient-to-r  from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">
              Asyrofil 'Ula <br />
            </span>
            <div className="w-full h-[50px]">
            <TypeAnimation
              sequence={[
                "And I'm a Web Developer",
                1000,
                "And I'm a Backend Developer",
                1000,
                "And I'm a Frontend Developer",
                1000,
              ]}
              wrapper="div"
              speed={50}
              className="text-[#00040f] dark:text-white text-3xl"
              repeat={Infinity}
            />
            </div>
            <p className="ABOUT h-[full] text-xl max-sm:text-[15px] bg-clip-text text-transparent  bg-gradient-to-r  from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 max-w-[570px] mt-5 pl-1">
              Hi! I’m Asyrofil ‘Ula, I’m experienced with a deep dedication to
              creating good and efficient solutions through code. With a solid
              foundation in Programming, as well as a basic understanding of web
              tools and frameworks, I have embraced the ever-evolving web
              development with enthusiasm and dedication. Currently, based in
              Sumenep, Indonesia. 
            </p>
          </div>
          <Lottie
            animationData={computer}
            loop={true}
            className="max-w-[650px] shadow-xl rounded-xl border border-[#00040f]"
          />
        </div>
      </section>
    </>
  );
};
export default About;
