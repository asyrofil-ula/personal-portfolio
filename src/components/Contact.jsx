/* eslint-disable react/no-unescaped-entities */
import {
  SiGithub,
  SiInstagram,
  SiGmail,
} from "react-icons/si";

import Logo from "../assets/logo.png";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="EXPERIENCE dark:bg-[#111827] p-5 mt-[5rem] font-['Poppins']  max-sm:p-2 "
      >
        <div className="bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#111827] dark:to-[#111827] dark:shadow-none rounded-2xl shadow-xl WRAPPER mx-2 flex justify-between p-7 mb-7 max-sm:flex-col-reverse max-sm:p-2">
          <div className="ABOUT p-7">
            <h2 className="text-[#00040f] font-semibold dark:text-slate-300 leading-7 text-xl tracking-wider max-sm:text-center">
              Asyrofil 'Ula
            </h2>
            <p className="text-gray-600 dark:text-slate-400 leading-[30.8px] mt-7 max-w-[400px] max-sm:text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              dolores laudantium tempora repellat quidem!
            </p>
            <div className="SOCIALS text-[#00040f] dark:text-white text-2xl flex gap-7 mt-5 max-sm:justify-evenly">
              <a
                href="https://github.com/asyrofil-ula"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.instagram.com/rofieee.id/"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiInstagram />
              </a>
              <a
                href="mailto:asyrofilula@gmail.com"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiGmail />
              </a>
            </div>
          </div>

          <div className="IMG p-0 max-sm:grid max-sm:place-content-center">
            <img
              src={Logo}
              alt="Asyrofil Ula"
              className="h-[200px] max-sm:h-[150px] border-[#00040fab] dark:border-slate-300 border-4 rounded-full mt-12"
            />
          </div>
        </div>

        <p className="text-[#00040f] dark:text-slate-300 mx-2 text-center capitalize tracking-widest max-sm:text-sm p-2">
          made with 💙 by Asyrofil 'Ula
        </p>
      </section>
    </>
  );
};
export default Contact;
