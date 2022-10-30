import { AiOutlineArrowRight } from 'react-icons/ai';
import Image from 'next/image';
import Modal from '../components/Modal';
import { useState } from 'react';

const Roadmap = ({ header, elements }) => {
    const [modalActive, setModalActive] = useState(false);
    const [modalHeader, setModalHeader] = useState("");
    const [modalText, setModalText] = useState("");
    const [modalImage, setModalImage] = useState(undefined);

    const prepareModal = (header, text, image) => {
        setModalHeader(header);
        setModalText(text);
        setModalImage(image);
        setModalActive(true);
    }

    return (
        <section>
            <h1 className='text-center font-sans font-medium text-2xl py-1'>{header}</h1>
            <div className='text-3xl flex justify-center gap-16 py-6 text-gray-600'>
                {elements.map(item => (
                    <button 
                    key={item.name} 
                    onClick={()=>prepareModal(item.modal.header, item.modal.body, item.modal.img)} 
                    className="self-center hover:bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full p-5 hover:shadow-lg bg-opacity-10">
                        <div className='relative w-40 h-40 rounded-full p-6'>
                            <Image src={item.img} alt={item.key}/>
                        </div>
                    </button>
                ))}
            </div>
            <Modal active={modalActive} setActive={setModalActive} header={modalHeader} text={modalText} img={modalImage} alt="PCSA"></Modal>
        </section>
    )
}

export default Roadmap;