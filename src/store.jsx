import React, { useState } from "react";

const initialState = {
    phrase: "default phrase",
};

export const Context = React.createContext();

const Store = ({ children }) => {
    const [phrase, setPhrase] = useState(initialState);

    return (
        <Context.Provider value={[phrase, setPhrase]}>
            {children}
        </Context.Provider>
    );
};

export default Store;
