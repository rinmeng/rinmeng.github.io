import React from 'react';
import './output.css';
import mediaImage from './imgs/media.png';

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
                            <h2 className="text-4xl md:text-5xl text-center text-green-300">What does Rin do?</h2>
                            <p className="text-xl md:text-3xl text-center text-green-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt temporibus sequi quis
                                error animi. Necessitatibus numquam laboriosam dolor quasi debitis, deleniti ullam
                                dolores, repellendus libero eum optio totam placeat. Ad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
