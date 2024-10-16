import './output.css';
import MasteryCard from './MasteryCard.js';
import html5Logo from './imgs/icons/html5logo.png';
import css3Logo from './imgs/icons/css3logo.png';
import javascriptLogo from './imgs/icons/jslogo.png';
import javaLogo from './imgs/icons/javalogo.svg';
import pythonLogo from './imgs/icons/pythonlogo.png';
import seleniumLogo from './imgs/icons/seleniumlogo.png';
import markdownLogo from './imgs/icons/markdownlogo.png';
import latexLogo from './imgs/icons/latexlogo.png';
import rlogo from './imgs/icons/rlogo.png';
import rstudioLogo from './imgs/icons/rstudiologo.png';
import tailwindcssLogo from './imgs/icons/tailwindcsslogo.png';
import csharpLogo from './imgs/icons/csharplogo.png';
import assemblyLogo from './imgs/icons/assemblylogo.png';
import reactjsLogo from './imgs/icons/reactjslogo.png';
import androidstudioLogo from './imgs/icons/androidstudiologo.png';
import gitlogo from './imgs/icons/gitlogo.png';
import mysqlLogo from './imgs/icons/mysqllogo.png';
import phpLogo from './imgs/icons/phplogo.png';
import excelLogo from './imgs/icons/excellogo.png';

const Mastery = () => {
    const mastery = [];
    const mastering = [];
    const experienced = [];
    const addMastery = (text, image) => mastery.push({ text, image });
    const addMastering = (text, image) => mastering.push({ text, image });
    const addExperienced = (text, image) => experienced.push({ text, image });

    addMastery("HTML5", html5Logo);
    addMastery("CSS3", css3Logo);
    addMastery("Java", javaLogo);
    addMastery("Python", pythonLogo);
    addMastery("Markdown", markdownLogo);
    addMastery("LaTeX", latexLogo);

    addMastering("JavaScript", javascriptLogo);
    addMastering("R", rlogo);
    addMastering("MySQL", mysqlLogo);
    addMastering("Git", gitlogo);
    addMastering("TailwindCSS", tailwindcssLogo);
    addMastering("ReactJS", reactjsLogo);
    addMastering("Android Studio", androidstudioLogo);
    addMastering("RStudio", rstudioLogo);

    addExperienced("Selenium", seleniumLogo);
    addExperienced("C#/CSharp", csharpLogo);
    addExperienced("Assembly", assemblyLogo);
    addExperienced("PHP", phpLogo);
    addExperienced("Excel", excelLogo);

    return (
        <div>
            <div id="mastery" className="my-5">&nbsp;</div>
            <div className="glass-slate p-5">
                <div className="my-5">
                    <h1 className="text-6xl md:text-8xl text-center text-green-300 font-extrabold">Mastery</h1>
                    <p className="text-2xl md:text-3xl text-center text-white m-5">
                        These are the skills I have mastered throughout my learnings in UBCO and outside, on my personal time.
                    </p>
                    <div className="flex flex-wrap justify-center items-center my-5">
                        {mastery.map((masteryItem, index) => (
                            <MasteryCard key={index} text={masteryItem.text} image={masteryItem.image} />
                        ))}
                    </div>
                </div>
                <div className="my-5">
                    <h1 className="text-5xl md:text-7xl text-center text-green-300 font-extrabold">Mastering</h1>
                    <p className="text-2xl md:text-3xl text-center text-white m-5">
                        These are the skills I am still learning. I have a good understanding of them, but I am not yet proficient.
                    </p>
                    <div className="flex flex-wrap justify-center items-center my-5">
                        {mastering.map((masteringItem, index) => (
                            <MasteryCard key={index} text={masteringItem.text} image={masteringItem.image} />
                        ))}
                    </div>
                </div>
                <div className="my-5">
                    <h1 className="my-5 text-4xl md:text-6xl text-center text-green-300 font-extrabold">Experienced</h1>
                    <p className="text-2xl md:text-3xl text-center text-white m-5">
                        These are the skills I have experience with, but I am not currently learning or mastering them.
                    </p>
                    <div className="flex flex-wrap justify-center items-center my-5">
                        {experienced.map((experiencedItem, index) => (
                            <MasteryCard key={index} text={experiencedItem.text} image={experiencedItem.image} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Mastery;
