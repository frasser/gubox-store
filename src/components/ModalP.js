import React from 'react'
import ReactDOM from 'react-dom'


const ModalP = (props) =>{
    if(!props.isOpen){
        return null;
    }
    return ReactDOM.createPortal(
    <div className="fixed z-30 top-0 left-0 bottom-0 right-0 bg-black bg-opacity-60 flex flex-col items-center ">
        <div className="relative overflow-y-auto   top-11 bg-white w-full h-5/6  md:w-96">
            <button onClick={props.onClose} className="fixed  top-0.5 right-0.5 border-0  rounded-full py-2 px-4 text-white font-semibold bg-gray-800 ">
             X
            </button>
           
            {props.children}
            

        </div>

    </div>,
    document.getElementById('___gatsby')
    )
}
export default ModalP