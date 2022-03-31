import React from 'react'

const  Footer=()=> {
    return (
            <div className="w-full bg-primary-200 text-white">
                <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10 ">
                    <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start ">
                        <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
                            {"IMAGEN GUBOX"}
                            <p className="opacity-60">Concord Royal Court (3rd floor) Dhanmondi, Dhaka 1209, Bangladesh.</p>
                        </div>
                        <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                            <a className="opacity-60">About Us</a>
                            <a className="opacity-60">Responsibilities</a>
                            <a className="opacity-60">Out Services</a>
                            <a className="opacity-60">Contact</a>
                        </div>
                        <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                            <a className="opacity-60">Disclaimer</a>
                            <a className="opacity-60">Testimonials</a>
                            <a className="opacity-60">Privacy Policy</a>
                            <a className="opacity-60">Terms of Service</a>
                        </div>
                        <div className="w-full sm:w-1/5 pt-6 flex items-end mb-1">
                            <div className="flex flex-row space-x-4">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-google"></i>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-60 pt-2">
                    © {new Date().getFullYear()}, Build by
                    {` `}
                    <a className="text-red-400" href="https://www.gatsbyjs.com">@jpfrazzer</a>
                    
                    </div>
                </div>
            </div>
    )
}

export default Footer
