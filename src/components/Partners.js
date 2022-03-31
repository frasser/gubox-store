import React from 'react'

const Partners = ()=>{
    return (
        <div className="flex items-center pt-5 justify-between">
            <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img className="w-full" src="https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg" alt="" style={{ maxHeight: `60px` }}/></button>
            <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img className="w-full" src="https://stripe.com/img/v3/payments/overview/logos/slack.svg" alt="" style={{ maxHeight: `60px` }} /></button>
            <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img className="w-full" src="https://stripe.com/img/v3/payments/overview/logos/glossier.svg" alt="" style={{ maxHeight: `60px` }} /></button>
            <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img className="w-full" src="https://stripe.com/img/v3/payments/overview/logos/charity_water.svg" alt="" style={{ maxHeight: `60px` }} /></button>
            <button className="px-2 opacity-100 hover:opacity-100 focus:opacity-100"><img className="w-full" src="https://stripe.com/img/v3/payments/overview/logos/missguided.svg" alt="" style={{ maxHeight: `60px` }} /></button>
        </div>

    )
}

export default Partners