const Container = (props) => {
    let hide = props.hide || false;
    return (
        <div
            className={`relative min-w-1/2 h-1/2 bg-slate-200 shadow-xl rounded flex items-center justify-center flex-shrink-0" ${
                props.customClasses
            } ${hide ? "hidden" : "flex"}`}
        >
            {props.children}
        </div>
    );
};

export default Container;
