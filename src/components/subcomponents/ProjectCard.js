
import React from 'react';


const ProjectCard = ({ text, description, image, alt, link, toolTipImages }) => {
    return (

        <div className="glass-slate rounded-lg  flex flex-col w-96 h-auto group hover:zoomin-sm t200e mp5 m-10">
            <a href={link} target="_blank" rel="noreferrer">
                <img className="w-full h-3/4 object-cover" src={image} alt={alt} />
                <h2 className="m-5 text-3xl md:text-4xl font-normal text-center text-green-300">{text}</h2>
            </a>
            <p className="text-xl md:text-2xl text-center text-white ">{description}</p>
            <div className="my-5 flex flex-wrap justify-center items-center opacity-25 group-hover:opacity-100 t200e">
                {toolTipImages.map((image, index) => (
                    <img key={index} className="max-w-10 max-h-10 m-2" src={image} alt="tooltip" />
                ))}
            </div>


        </div>


    );
};

export default ProjectCard;
