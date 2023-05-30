import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useContext } from "react";

import Input from "./components/Input";
import { Context } from "./store";

function App() {
    const [phrase] = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`the phrase you entered was : ${phrase}`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-screen h-screen bg-blue-powder flex items-center justify-center flex-col"
        >
            <Input
                labelClass="block mb-2 text-3xl text-gray-800"
                phrase="Enter your phrase"
                inputClass="w-full shadow appearance-none border-none rounded py-2 px-3 mb-4 text-2xl text-blue-gray uppercase focus:outline-none"
                placeholder=""
            />
            <button
                className="block border-none shadow-lg py-2 px-6 text-3xl rounded-lg text-white bg-blue-gray"
                type="submit"
            >
                Generate
            </button>
        </form>
    );
}

export default App;
