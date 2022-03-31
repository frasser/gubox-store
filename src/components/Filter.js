import React from 'react'

const Filter=()=> {
    return (
     
        
        <div className="w-11/12 h-auto  bg-white rounded-lg shadow-lg px-5 py-3 mx-2">
            <div className="flex flex-col w-full  " >
            <h1 className="font-semibold text-base text-gray-600">Network Connectivity</h1>
            </div>
            <div className="flex flex-col w-full  p-4">
            
            <div>
                <input type="checkbox" className="w-5 h-5 rounded-xl checked:bg-blue-600 checked:border-transparent bg-red-400"/> 
                <i className="pl-2 font-semibold text-base text-gray-600">Sigfox</i>
            </div>   
            <div>               
                <input type="checkbox" className="bg-red-500  w-5 h-5 rounded-xl checked:bg-red-600 checked:border-transparent" />
                <i className="pl-2 font-semibold text-base text-gray-600">NB-IoT</i>
            </div>   
            <div>                
                <input type="checkbox" className="bg-red-500  w-5 h-5 rounded-xl checked:bg-red-600 checked:border-transparent" />
                <i className="pl-2 font-semibold text-base text-gray-600">Lora</i>
            </div>
            <div>
                <input type="checkbox" className="bg-red-500  w-5 h-5 rounded-xl checked:bg-red-600 checked:border-transparent" />
                <i className="pl-2 font-semibold text-base text-gray-600">BT/BLE</i>
            </div>
            <div>

                <input type="checkbox" className="bg-red-500  w-5 h-5 rounded-xl checked:bg-red-600 checked:border-transparent" />
                <i className="pl-2 font-semibold text-base text-gray-600">Wifi</i>
            </div>
            </div>
            <div className="flex flex-col">
                <div>                
                    <input type="checkbox" className="bg-red-500  w-5 h-5 rounded-xl checked:bg-red-600 checked:border-transparent" />
                    <i className="pl-2 font-semibold text-base text-gray-600">MCU Boards</i>
                </div>
                <div>                
                <input type="checkbox" className="bg-red-500  w-5 h-5 rounded-xl checked:bg-red-600 checked:border-transparent" />
                <i className="pl-2 font-semibold text-base text-gray-600">Sensors</i>
                </div>
                <div>                
                <input type="checkbox" className="bg-red-500  w-5 h-5 rounded-xl checked:bg-red-600 checked:border-transparent" />
                <i className="pl-2 font-semibold text-base text-gray-600">Antennas</i>
                </div>
                <div>                
                <input type="checkbox" className="bg-red-500  w-5 h-5 rounded-xl checked:bg-red-600 checked:border-transparent" />
                <i className="pl-2 font-semibold text-base text-gray-600">Miscelaneos</i>
                </div>
                <div>                
                <input type="checkbox" className="bg-red-500  w-5 h-5 rounded-xl checked:bg-red-600 checked:border-transparent" />
                <i className="pl-2 font-semibold text-base text-gray-600">All</i>
                </div>
            </div>

        </div>
       
        
    )
}

export default Filter
