import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Modal from "./Modal";

const AboutModal = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalClick = () => {
        console.log("hello");
        setShowModal(!showModal);
    };

    return (
        <>
            <button
                className="ml-24 text-5xl py-3 dark:text-white"
                onClick={handleModalClick}
            >
                <FontAwesomeIcon icon={faQuestion} />
            </button>
            {showModal && <Modal handleModalClick={handleModalClick} />}
        </>
    );
};

export default AboutModal;
