import React from 'react'
import {GoSettings} from "@react-icons/all-files/go/GoSettings"
import {GrFormSearch} from "@react-icons/all-files/gr/GrFormSearch"
import FilterModal from './FilterModal'
function SearchBar(props) {
    return (
        <div className="sticky top-16 lg:top-14 flex flex-row mx-auto px-5  w-full bg-gray-200   lg:px-7   justify-center  shadow-sm z-10">
            <h1 className=" hidden sm:inline-block self-center font-semibold">SHOP</h1>
            <div className=" flex  justify-center  w-full">
                <div className="flex flex-row sm:hidden  px-2 ">
                    <h1 className="inline-block self-center font-semibold">SHOP</h1>
                </div>
                <div className=" flex flex-row  py-2  ">
                <i className="bg-white rounded-l-full p-1 border border-transparent">  <GrFormSearch className="w-5 h-6 text-gray-700"/>  </i>  
                <input type="text" className="rounded-r-full bg-white text-gray-600 py-1 w-full " placeholder="search" />
                </div>
                <div className="flex flex-row  p-1 lg:hidden">
                    <button onClick={props.onOpenModal} type="button" className="border rounded-lg w-8 h-8 bg-white  self-center focus:outline-none ">
                        <GoSettings className="w-5 h-5  text-gray-600 m-1 "/>
                    </button>
                    <FilterModal
                                    isOpen={props.modalIsOpen}
                                    onClose={props.onClose}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchBar
