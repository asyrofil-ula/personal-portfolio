"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  GDSC,
  KDE,
  Oppia,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={Oppia}
              title="Oppia Foundation"
              subtitle="LAcE Team Member"
              date="November 2023 - present"
              para="lorem ipsum dolor sit amet.. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet."
            />
            <Exp_prop
              img={KDE}
              title="Season of KDE'24"
              subtitle="Mentee"
              date="January 2023 - present"
              para="-lorem ipsum dolor sit amet.. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. "
            />
            <Exp_prop
              img={GDSC}
              title="GDSC IIIT Kota"
              subtitle="Web Development Lead"
              date="August 2023 - present"
              para="- lorem ipsum dolor sit amet.. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet"
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
