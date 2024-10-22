
import logo from '../imgs/rmlogo.png';

const Copyright = () => {
    return (
        <div className="text-center text-white mp5 opacity-75">
            <p>&#169; 2024 rin meng &#9829;
                <br />All rights reserved. Website presented to you by
                <span className="flex justify-center items-center">
                    <a href="https://rinmeng.github.io" target="_blank" rel="noopener noreferrer">
                        <img className="w-24 h-auto" src={logo} alt="rin meng logo" />
                    </a>
                </span>
                See <a href="https://github.com/rinmeng/rinmeng.github.io?tab=AGPL-3.0-1-ov-file" target="_blank" rel="noopener noreferrer"
                    className="underline hover:text-slate-900 t200e">GitHub</a> for more info on licensing.
            </p>
        </div>
    );
}

export default Copyright;