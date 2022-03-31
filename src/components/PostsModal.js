import React from 'react'
import ModalP from './ModalP'
import PostPerProduct from './PostPerProduct'

const PostModal =(props)=>{
    return(
        <ModalP 
        isOpen={props.isOpen}
        onClose={props.onClose}
        onAfterOpen={props.onAfterOpen}>
            <PostPerProduct/>
        </ModalP>
    )
}
export default PostModal