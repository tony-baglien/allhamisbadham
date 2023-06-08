const Container = (props) => {
    let hide = props.hide || false;
    return (
        <div
            className={`w-screen h-screen items-center justify-center flex-shrink-0 ${
                hide ? "hidden" : "flex"
            }`}
        >
            <div
                className={`relative w-1/2 h-1/2 bg-slate-200 shadow-xl rounded flex items-center justify-center flex-shrink-0" ${props.customClasses}`}
            >
                {props.children}
            </div>
        </div>
    );
};

export default Container;
