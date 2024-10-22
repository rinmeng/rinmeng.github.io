import bgImage from '../imgs/cal.jpeg';

function LandingPage() {
    return (
        <div id="landing" className=" w-screen h-screen relative overflow-hidden">
            <img
                className="absolute inset-0 object-cover w-full h-full brightness-75"
                src={bgImage}
                alt="cover"
            />
            <div className="relative flex flex-col justify-center items-center h-full p-4">
                <h1 className="text-5xl font-extrabold text-white text-center">
                    Rin Meng
                </h1>
                <h2 className="text-2xl font-light text-white text-center w-full">
                    <span className='text-red-400'>Third Year</span>
                    <br /><span className="text-slate-400">Computer Science</span> Major,
                    <br />Minoring in <span className="text-red-700">Data Science</span>
                    <br />Undergraduate at the
                    <br /><span className="text-teal-300">University of British Columbia</span>
                </h2>
                <a href="#about" className="btn">
                    Hello Rin!
                </a>
            </div>
        </div>
    );
}

export default LandingPage;