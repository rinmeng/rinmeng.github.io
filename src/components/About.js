import React from 'react';
import mediaImage from '../imgs/media.png';

const About = () => {
    return (
        <div>
            <div id="about" className="my-5">
                &nbsp;
            </div>
            <div className="glass-slate p-5">
                <div >
                    <h1 className="text-6xl md:text-8xl text-center text-green-300 font-extrabold">About</h1>
                    <p className="text-2xl md:text-4xl text-center text-green-300">
                        {/* Add some introductory text here if needed */}
                    </p>
                </div>

                <div className="glass-slate flex justify-center items-center rounded-lg my-5">
                    <div className="flex flex-wrap lg:flex-nowrap">
                        <img className="size-full lg:size-1/2" src={mediaImage} alt="media" />
                        <div className="m-5">
                            <h2 className="text-4xl md:text-5xl text-center text-green-300">
                                Who am I?
                            </h2>
                            <p className="my-5 text-xl md:text-3xl text-center text-white">
                                I am a third-year Computer Science student at the
                                University of British Columbia Okanagan.
                                I am a passionate programmer and a quick learner.
                                I am always looking for new challenges and opportunities
                                to learn new things. I am currently looking for a co-op
                                position for the summer of 2025. I am interested in
                                software development, web development, and data science.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
