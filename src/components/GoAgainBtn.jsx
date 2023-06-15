import anime from "animejs";
import { useState, useRef, useEffect } from "react";

const GoAgainBtn = (props) => {
    const clickAnimation = useRef(null);
    let [goAgain, setGoAgain] = useState(false);

    useEffect(() => {
        clickAnimation.current = anime({
            targets: ".clickMoreBtn",
            opacity: 1,
            translateY: 20,
            duration: 1000,
            delay: 3000,
            autoplay: false,
            complete: () => {
                setGoAgain(false);
            },
        }).play();
    }, [goAgain]);

    return (
        <div
            className="clickMoreBtn w-max text-2xl cursor-pointer opacity-0 pl-8 hover:text-slate-500 transition-colors"
            onClick={() => {
                props.handleClick();
                setGoAgain(true);
            }}
        >
            Go Again?
        </div>
    );
};

export default GoAgainBtn;
