import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { useState } from "react";
import AboutModal from "./aboutModal";

const DarkmodeToggle = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark");
    }, [dark]);

    const handleDarkModeToggle = () => {
        setDark(!dark);
    };

    return (
        <div className="fixed top-0 w-screen h-max flex items-center justify-between">
            <AboutModal />
            <button
                className=" block text-5xl mr-24 h-[50px] w-[50px] dark:text-white"
                onClick={handleDarkModeToggle}
            >
                <FontAwesomeIcon
                    className={`block absolute top-4 transition-all duration-500  ${
                        dark ? "opacity-1" : " opacity-0 rotate-45"
                    }`}
                    icon={faCloudMoon}
                />
                <FontAwesomeIcon
                    className={`block absolute top-4 transition-all duration-500 rotate-45 ${
                        dark ? "opacity-0" : "opacity-1 rotate-90"
                    }`}
                    icon={faSun}
                />
            </button>
        </div>
    );
};

export default DarkmodeToggle;
