import Project_prop from "./Project_prop";
import {portfolio, histogram, ebook, library} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiPython,
  SiVite,
  SiHtml5,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiBootstrap,
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="projects"
        className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-10" data-aos="fade-down">
          <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
            Projects
          </h1>

          <div
            className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
            data-aos="zoom-out-down"
          >
            <Project_prop
              title="Personal Portfolio"
              para="Personal portfolio website is a professional website that provides information about what you do, what services you may offer, and how to contact you or your company."
              img={portfolio}
              github_link="https://github.com/asyrofil-ula/personal-portfolio"
              html5={
                <Tooltip title="HTML5" arrow>
                  <IconButton>
                    <SiHtml5 className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
              javascript={
                <Tooltip title="JavaScript" arrow>
                  <IconButton>
                    <SiJavascript className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
              tailwindcss={
                <Tooltip title="TailWind CSS" arrow>
                  <IconButton>
                    <SiTailwindcss className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
              react={
                <Tooltip title="React" arrow>
                  <IconButton>
                    <SiReact className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
              vite={
                <Tooltip title="Vite" arrow>
                  <IconButton>
                    <SiVite className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
            />
            <Project_prop
              title="Histography-Images"
              para="Histography-Images is a website that displays a graph showing the number of pixels with a certain intensity in an image, be it an RGB or gray image."
              img={histogram}
              github_link="https://github.com/asyrofil-ula/histography-images"
              html5={
                <Tooltip title="HTML 5" arrow>
                  <IconButton>
                    <SiHtml5 className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
              javascript={
                <Tooltip title="JavaScript" arrow>
                  <IconButton>
                    <SiJavascript className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
              tailwindcss={
                <Tooltip title="TailWind CSS" arrow>
                  <IconButton>
                    <SiTailwindcss className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
              react={
                <Tooltip title="React" arrow>
                  <IconButton>
                    <SiReact className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
              python={
                <Tooltip title="Python" arrow>
                  <IconButton>
                    <SiPython className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
              vite={
                <Tooltip title="Vite" arrow>
                  <IconButton>
                    <SiVite className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
            />
            <Project_prop
              title="Ebook Mobile App"
              para="Ebook is book in digital form that can be read on a mobile phone "
              img={ebook}
              github_link="https://github.com/asyrofil-ula/ebook"
              react={
                <Tooltip title="React" arrow>
                  <IconButton>
                    <SiReact className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
              typescript={
                <Tooltip title="TypeScript" arrow>
                  <IconButton>
                    <SiTypescript className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
              firebase={
                <Tooltip title="Firebase" arrow>
                  <IconButton>
                    <SiFirebase className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
            />
            <Project_prop
              title="Library Website"
              para="E-library is a place where you can borrow a collection of books and other educational resources digitally or online "
              img={library}
              link=""
              github_link="https://github.com/asyrofil-ula/library-website"
              php={
                <Tooltip title="PHP" arrow>
                  <IconButton>
                    <SiPhp className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
              laravel={
                <Tooltip title="Laravel" arrow>
                  <IconButton>
                    <SiLaravel className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
              mysql={
                <Tooltip title="MySQL" arrow>
                  <IconButton>
                    <SiMysql className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
              bootstrap={
                <Tooltip title="Bootstrap" arrow>
                  <IconButton>
                    <SiBootstrap className="dark:text-slate-200 text-black" />
                  </IconButton>
                </Tooltip>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
