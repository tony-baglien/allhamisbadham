/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Context } from "../store";

const Input = (props) => {
    const [, setPhrase] = useContext(Context);

    const handlePhraseChange = (e) => {
        setPhrase(e.target.value);
    };

    return (
        <div className="w-3/4">
            <label className={props.labelClass} htmlFor="phrase">
                {props.phrase}
            </label>
            <input
                className={props.inputClass}
                type="text"
                id="phrase"
                name="phrase"
                placeholder={props.placeholder}
                onChange={handlePhraseChange}
            />
        </div>
    );
};

export default Input;
