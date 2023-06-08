import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//TODO
// Back Feature
// Refine random word logic
//Dark MOde
// Feature: Add random phrase generator

import anime from "animejs";
import { useEffect, useRef, useState } from "react";

import Container from "./components/container";

function App() {
    const [playing, setPlaying] = useState(false);
    const [phrase, setPhrase] = useState("generic");
    const [showResults, setShowResults] = useState(false);
    //animations
    const animation = useRef(null);
    const wordAnimation = useRef(null);
    const shakeAnimation = useRef(false);

    const inputRef = useRef(null);

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
                    className={`word-${index} inline-block uppercase opacity-0 pl-8`}
                    key={index}
                >
                    {word}
                </span>
            );
        });

        return <div>{wordItems}</div>;
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
                            className="block mb-2 text-3xl text-gray-600"
                            htmlFor="phrase"
                        >
                            Enter your phrase
                        </label>
                        <input
                            className="w-full shadow appearance-none border-none rounded py-2 px-3 mb-4 text-2xl text-slate-600 uppercase focus:outline-none"
                            type="text"
                            id="phrase"
                            name="phrase"
                            ref={inputRef}
                        />
                    </div>
                    <button
                        className="block border-none shadow-lg py-2 px-6 text-3xl rounded-lg text-white bg-blue-gray"
                        type="submit"
                    >
                        Generate
                    </button>
                </form>
            </Container>
            <div className="resultsContainer w-fit text-8xl text-slate-900">
                {showResults ? <Results /> : null}
            </div>
        </>
    );
}

export default App;
