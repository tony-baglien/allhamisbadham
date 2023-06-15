import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//TODO
// Refine random word logic
// Feature: insert phrase into input
// feature: add an explanation icon and modal (linking to github)

import anime from "animejs";
import { useEffect, useRef, useState } from "react";

import Container from "./components/container";
import ClickMoreBtn from "./components/ClickMoreBtn";
import GoAgainBtn from "./components/GoAgainBtn";

function App() {
    const [playing, setPlaying] = useState(false);
    const [phrase, setPhrase] = useState("generic");
    const [showResults, setShowResults] = useState(false);
    //animations
    const animation = useRef(null);
    const wordAnimation = useRef(null);
    const shakeAnimation = useRef(false);

    const inputRef = useRef(null);
    const allHamRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputRef.current.value.length === 0) {
            shakeAnimation.current.play();
            return;
        }
        playing ? animation.current.pause() : animation.current.play();
        setPhrase(inputRef.current.value);
        setPlaying(true);
    };

    const handleBackClick = () => {
        setShowResults(false);
        inputRef.current.value = "";
        anime({
            targets: ".inputContainer",
            translateY: 0,
            easing: "easeOutElastic(1, .6)",
            duration: 3000,
            autoplay: false,
        }).play();
    };

    const handleAutoFill = () => {
        inputRef.current.value = "All HAM IS BAD HAM IF YOU ARE SAGE";
    };

    useEffect(() => {
        animation.current = anime({
            targets: ".inputContainer",
            translateY: "200%",
            direction: "forwards",
            easing: "easeInElastic(1, .6)",
            duration: 2000,
            autoplay: false,
            complete: () => {
                setPlaying(false);
                setShowResults(true);
            },
        });
        shakeAnimation.current = anime({
            targets: ".inputContainer",
            translateX: [
                {
                    value: 16 * -1,
                },
                {
                    value: 16,
                },
                {
                    value: 16 / -2,
                },
                {
                    value: 16 / 2,
                },
            ],
            value: 0,
            duration: 250,
            autoplay: false,
        });
    }, []);

    //TODO: WOrk on animation stagger
    useEffect(() => {
        wordAnimation.current = anime({
            targets: ".resultsContainer span",
            opacity: 1,
            rotate: [{ value: 180 }, { value: 360, delay: 1000 }],
            direction: "forwards",
            autoplay: false,
            duration: 2000,
            delay: anime.stagger(100, { start: 500 }),
        }).play();
    }, [showResults]);

    const Results = () => {
        let words = phrase.split(" ");
        const shuffledArray = words.sort(() => Math.random() - 0.5);

        let wordItems = shuffledArray.map((word, index) => {
            return (
                <span
                    className={`word-${index} inline-block uppercase opacity-0
                     pl-8`}
                    key={index}
                >
                    {word}
                </span>
            );
        });

        return (
            <div className="resultsContainer w-fit text-8xl text-slate-900 dark:text-slate-200">
                <div className="">{wordItems}</div>
                <ClickMoreBtn input={inputRef.current.value} />
                <GoAgainBtn handleClick={handleBackClick} />
            </div>
        );
    };

    return (
        <>
            <Container customClasses="inputContainer" hide={showResults}>
                <form
                    onSubmit={handleSubmit}
                    className="w-full h-full flex items-center justify-center flex-col"
                >
                    <div className="w-3/4">
                        <label
                            className="block mb-2 text-3xl text-gray-600 dark:text-gray-200"
                            htmlFor="phrase"
                        >
                            Enter your phrase
                        </label>
                        <input
                            className="w-full shadow appearance-none border-none rounded py-2 px-3 mb-4 text-2xl dark:bg-dm-green-light text-slate-600 dark:text-gray-200 uppercase focus:outline-none"
                            type="text"
                            id="phrase"
                            name="phrase"
                            ref={inputRef}
                        />
                    </div>
                    <button
                        className="block border-none shadow-lg py-2 px-6 text-3xl rounded-lg text-white bg-blue-gray dark:bg-dm-green-light"
                        type="submit"
                    >
                        Generate
                    </button>
                    <button
                        ref={allHamRef}
                        onClick={handleAutoFill}
                        className="mt-8 text-base underline text-green-light dark:text-white hover:text-green-dark transition-colors"
                    >
                        All Ham is bad ham...
                    </button>
                </form>
            </Container>
            {showResults ? <Results /> : null}
        </>
    );
}

export default App;
