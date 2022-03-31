import React from 'react'
import Modal from './Modal'
import {Link} from 'gatsby'
const AddedModal = (props) => {
    return (
        <Modal
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <div className="p-12  text-center">
                
                <div className="flex flex-col">
                <h1 className="text-xl md:text-3xl text-green-400 font-bold">Product added to cart...</h1>
                    <Link to="/cart">
                        <button className="flex-col rounded-full text-white bg-soft-blue-100 p-3 font-semibold ">Go to cart</button>
                    </Link>
                    <Link to="/shop">
                        <button className="flex-col rounded-full text-white bg-soft-blue-100 p-3 font-semibold1">Continue shopping</button>
                    </Link>
                </div>
            </div>
            
        </Modal>
    )
}

export default AddedModal
