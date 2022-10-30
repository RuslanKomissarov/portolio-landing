import { RiEmotionSadLine } from 'react-icons/ri';
import {BiHappyBeaming} from 'react-icons/bi';
import Popup from './Popup'

const Form = ({ formHeader, formFields, action, onActionPopup, onErrorPopu }) => {
    return (
        <div className="text-center my-6">
            <div className="text-3xl text-cyan-600 font-medium my-6">{formHeader}</div>
            <div className="w-2/3 mx-auto">
                <form className="rounded-xl">
                    {formFields &&
                        formFields !== undefined ?
                        formFields.map(field => (
                            <div key={field.id} className="my-6">
                                <input className="text-xl appearance-none bg-transparent w-2/3 text-gray-700 px-2 leading-tight focus:outline-none border-b border-gradient-to-r from-cyan-500 to-blue-500 py-2" placeholder={field.label} id={field.id} type={field.type}></input>
                            </div>
                        )) : <></>
                    }
                    <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md ml-8 text-xl'>{action}</button>
                </form>
            </div>
            <Popup type="error" header="Oops :(" mainBody="Looks like some of your input was incorrect! Please, try again!" secondaryBody={<RiEmotionSadLine className='mx-auto'/>}/>
            <Popup type="success" header="Thank you!" mainBody="Your message was sent successfully." secondaryBody={<BiHappyBeaming className='mx-auto' />} />
        </div>
    )
}

export default Form;