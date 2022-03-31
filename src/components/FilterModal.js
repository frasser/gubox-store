import React from 'react'
import Modal from './Modal'
import Filter from './Filter'

const FilterModal = (props) => {
    return (
        <Modal 
            isOpen={props.isOpen}
            onClose={props.onClose}>
                <div className=" py-6 pl-2">
                    
                   <Filter/>

 

                </div>



        </Modal>
    )
}

export default FilterModal
