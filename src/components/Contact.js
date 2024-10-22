import ContactCard from './subcomponents/ContactCard';
import githubLogo from '../imgs/icons/githublogo.png';
import linkedinLogo from '../imgs/icons/linkedinlogo.png';
import instagramLogo from '../imgs/icons/instagramlogo.png';
import tiktokLogo from '../imgs/icons/tiktoklogo.png';
import youtubeLogo from '../imgs/icons/youtubelogo.png';
import mailLogo from '../imgs/icons/maillogo.png';

const Contact = () => {
    const contacts = [];
    const addContact = (link, image, text) => contacts.push({ link, image, text });


    addContact("https://www.github.com/rinmeng", githubLogo, "github!");
    addContact("https://www.linkedin.com/in/rin-meng-b28910234/", linkedinLogo, "linkedin!");
    addContact("https://www.instagram.com/rin.m04/?theme=dark", instagramLogo, "instagram!");
    addContact("https://www.tiktok.com/@rin.trage", tiktokLogo, "tiktok!");
    addContact("https://www.youtube.com/@rinmeng", youtubeLogo, "youtube!");
    addContact("mailto:phurinmeng@gmail.com", mailLogo, "email!");


    return (
        <div>
            <div id="contactsection" className="my-5">
                &nbsp;
            </div>
            <div id="contact" className="m-5">
                <h1 className="text-6xl md:text-8xl text-center text-green-300 font-extrabold my-14">
                    Contacts
                </h1>
                <div className="flex justify-center items-center flex-wrap">
                    {contacts.map((contact, index) => (
                        <ContactCard
                            key={index}
                            link={contact.link}
                            image={contact.image}
                            text={contact.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contact;
