const MasteryCard = ({ text, image }) => {
    return (
        <div className="relative m-5 point t200e zoomin group contact-item items-center z-0 max-w-30 ">
            <img className="max-w-24 lg:max-w-28 h-auto mx-auto my-10 " src={image} alt='icon' />
            <span className="strong-slate p-3 text-lg rounded-xl 
                               text-center absolute bottom-0 left-1/2 
                               transform -translate-x-1/2  -translate-y-full
                               opacity-0 scale-0 text-white font-medium 
                               group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 t200e z-10">
                {text}
            </span>
        </div>
    );
}

export default MasteryCard;
