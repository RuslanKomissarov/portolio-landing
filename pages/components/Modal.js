import Image from "next/image";
import {AiOutlineClose} from 'react-icons/ai'

const Modal = ({
    active,
    setActive,
    header,
    text,
    img,
    alt
}) => {

    const activeStylesheet = "flex h-screen w-screen top-0 left-0 bg-black bg-opacity-40 fixed py-10 px-10 borde rounded-lg shadow-lg";
    const disabledStylesheet = "transform scale-0 flex h-screen w-screen top-0 left-0 bg-cyan-800 bg-opacity-40 fixed py-10 px-10 borde rounded-lg shadow-lg";

    return (
        <div className={active ? activeStylesheet : disabledStylesheet} onClick={() => setActive(false)}>
            <div className="w-2/3 h-2/3  bg-gradient-to-br  from-white to-gray-100 m-auto rounded-2xl shadow-lg" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between">
                    <div></div>
                    <button className="mx-8 mt-8 justify-end relative hover:bg-gray-300 rounded-full p-2" onClick={() => setActive(false)}><AiOutlineClose/></button>
                </div>
                <div className="text-2xl text-center font-bold mb-8">{header}</div>
                <div>
                    <p className="mx-10 my-10 text-xl">{text}</p>
                    <div className="relative flex">
                        {img &&
                            img !== undefined ?
                            img.map(image => (
                                <div key="image" className="w-1/6 mx-auto">
                                    <Image className="rounded-full" src={image} alt={alt}></Image>
                                </div>
                            )) : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;