import anime from "animejs";
import { useState, useRef, useEffect } from "react";

const ClickMoreBtn = (props) => {
    const clickAnimation = useRef(null);
    let [clickMore, setClickMore] = useState(false);

    useEffect(() => {
        clickAnimation.current = anime({
            targets: ".clickMoreBtn",
            opacity: 1,
            translateY: 20,
            duration: 1000,
            delay: 3000,
            autoplay: false,
        }).play();
    }, [clickMore]);

    const handleClick = () => {
        navigator.clipboard.writeText(props.input);
        setClickMore(true);
    };
    return (
        <div
            className={`clickMoreBtn w-max text-2xl cursor-pointer opacity-0 pl-8 ${
                !clickMore ? "hover:text-slate-500" : ""
            } transition-colors`}
            onClick={handleClick}
        >
            {clickMore ? "Copied!" : "Click to Copy"}
        </div>
    );
};

export default ClickMoreBtn;
