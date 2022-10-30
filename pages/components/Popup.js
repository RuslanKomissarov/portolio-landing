const Popup = ({ type, header, mainBody, secondaryBody }) => {

    const bg = "";

    switch (type) {
        case "error":
            bg = "px-4 shadow-lg block w-max mx-auto rounded-lg text-center my-6 bg-gradient-to-b from-red-300 to-red-400";
            break;
        case "success":
            bg = "px-4 shadow-lg block w-max mx-auto rounded-lg text-center my-6 bg-gradient-to-b from-teal-400 to-cyan-400";
            break;
        default:
            throw new Error(`Popup type of invalid type. Type ${type} does not equals any of known types for this element.`)
    }

    return (
        <div className={bg}>
            <div className="text-xl pt-4 font-bold">{header}</div>
            <div className="text-xl text-gray-700">{mainBody}</div>
            <div className="text-center text-4xl pb-4">
                <div className="mx-auto">
                    {secondaryBody}
                </div>
            </div>
        </div>
    )
}
export default Popup;