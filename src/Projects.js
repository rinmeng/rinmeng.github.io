import React from 'react';
import './output.css';
import media from './imgs/media.png';
import ProjectCard from './ProjectCard.js';
import seleniumLogo from './imgs/icons/seleniumlogo.png';
import pythonLogo from './imgs/icons/pythonlogo.png';
import html5Logo from './imgs/icons/html5logo.png';
import jsLogo from './imgs/icons/jslogo.png';
import css3Logo from './imgs/icons/css3logo.png';
import markdownLogo from './imgs/icons/markdownlogo.png';
import tailwindcssLogo from './imgs/icons/tailwindcsslogo.png';
import reactjsLogo from './imgs/icons/reactjslogo.png';
import gitLogo from './imgs/icons/gitlogo.png';
import seacWebsite from './imgs/seacwebsite.png';
import rmwebsite from './imgs/rmwebsite.png';
import ubcobookingbot from './imgs/ubcobookingbot.png';
import kdtwebsite from './imgs/kdtwebsite.png';
import nodejsLogo from './imgs/icons/nodejslogo.png';


const Projects = () => {
    const projects = [];

    const addProject = (text, description, image, alt, link, toolTipImages) => {
        projects.push({ text, description, image, alt, link, toolTipImages });
    };

    addProject(
        "This Website",
        "There are many stages to my personal website development. Where I went from a simple HTML/CSS website, to TailwindCSS, and now to ReactJS + TailwindCSS.",
        rmwebsite,
        "South East Asian Club's Website Image",
        "https://github.com/rinmeng/rinmeng.github.io",
        [html5Logo, css3Logo, jsLogo, nodejsLogo, tailwindcssLogo, reactjsLogo]
    );
    addProject(
        "South East Asian Club's Website",
        "I was the Web Developer for the club and was in charge of the website development and maintenance.",
        seacWebsite,
        "South East Asian Club's Website Image",
        "https://seacsuo.github.io/",
        [html5Logo, css3Logo, jsLogo, nodejsLogo, reactjsLogo, tailwindcssLogo, gitLogo]
    );
    addProject(
        "KPop Dance Team's Website",
        "I oversaw the Digital Producer role where I was in charge of their website development, maintenance, and video editing. Pending port to ReactJS + TailwindCSS workframe!",
        kdtwebsite,
        "KPop Dance Team's Website Image",
        "https://kdtsuo.github.io/",
        [html5Logo, css3Logo, jsLogo]
    );


    addProject(
        "UBCO Booking Bot",
        "This is a project that I worked on during my time at UBCO. It is a Python + Selenium bot that uses an advanced time-based algorithm to book study rooms in UBCO.",
        ubcobookingbot,
        "UBCO Booking Bot Image",
        "https://github.com/rinmeng/UBCOBookingBot",
        [pythonLogo, seleniumLogo, markdownLogo]
    );

    return (
        <div>
            <div id="projects" className="my-5">
                &nbsp;
            </div>

            <div>
                <h1 className="text-6xl md:text-8xl text-center text-green-300 font-extrabold">Projects</h1>
                <div className="flex justify-center items-center flex-wrap my-10">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            text={project.text}
                            description={project.description}
                            image={project.image}
                            alt={project.alt}
                            link={project.link}
                            toolTipImages={project.toolTipImages}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

