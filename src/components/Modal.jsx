import React from "react";
import { createPortal } from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import anime from "animejs";

function Modal({ handleModalClick }) {
    const handleOnHover = () => {
        anime({
            targets: ".heart",
            opacity: 1,
            top: "-200%",
            duration: 5000,
            autoplay: false,
        }).play();
    };
    return createPortal(
        <>
            <div
                className={`w-screen h-screen bg-blue-gray dark:bg-slate-800 dark:bg-opacity-80 absolute top-0 bg-opacity-80 flex items-center justify-center`}
            >
                <div className="w-3/4 h-4/6 bg-slate-300 dark:bg-dm-blue-light opacity-100">
                    <FontAwesomeIcon
                        className="text-5xl px-4 pt-2 dark:text-white cursor-pointer block"
                        icon={faClose}
                        onClick={handleModalClick}
                    />
                    <div className="px-8 dark:text-white">
                        <h3 className="text-3xl ">All Ham is Bad Ham</h3>
                        <h1 className="text-2xl mb-4">
                            A word randomizer...simple as that
                        </h1>
                        <p>
                            This site was made using a lot of things that were
                            new concepts to me like...
                        </p>
                        <ul className="ml-4 my-8 text-xl">
                            <li>
                                React (this isn't new, but I'm a but rusty 😅 )
                            </li>
                            <li>Tailwind CSS</li>
                            <li>Svelte</li>
                        </ul>
                        <p>
                            What wasn't a new concept for me, is what drove me
                            to make it
                        </p>
                        <p>
                            the
                            <span
                                className="inline relative px-2 cursor-pointer text-lg hover:text-pink-400 transition-colors"
                                onMouseEnter={handleOnHover}
                            >
                                love
                                <span className="heart absolute top-0 left-1/2 opacity-0 pointer-events-none ">
                                    ❤️
                                </span>
                            </span>
                            for my spouse and the love of niche inside jokes
                        </p>
                        <p className="text-xl mt-2 text-">
                            -Tony Baglien{" "}
                            <a href="https://www.tonybaglien.com/">
                                tonybaglien.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("modal")
    );
}

export default Modal;
