import React from 'react';

const Navbar = (props) => {
    return (
        
            <div className="grid grid-cols-12 flex shadow-md">
                <div className=" col-1 w-20 ml-8 py-3 px-2 mr-2">
                    <img src="https://www.codingninjas.com/assets-landing/images/CNLOGO.svg" alt="Coding Ninjas logo"></img>
                </div>
                <div className="flex flex-col col-span-7 lg:flex-row hidden lg:inline-flex">
                    <Navlink link="#">Home</Navlink>
                    <Navlink link="#">Courses</Navlink>
                    <Newtag link="#">Practice</Newtag>
                    <Navlink link="#">Events</Navlink>
                    <Navlink link="#">Campus Ninjas</Navlink>
                    <Navlink link="#">Blog</Navlink>
                    <a href="#" className="text-decoration-none">
                        <div className="col-span-2 py-4 px-3 hover:bg-gray-100 focus:bg-gray-100">
                            <img src="https://files.codingninjas.in/cc-desktop-2-5363.svg" alt="Career camp logo" className="w-24"></img>
                        </div>
                    </a>

                </div>

                <div className="flex col-start-9 col-end-12 justify-end">
                    
                    <Navlink link="#">My Classroom</Navlink>
                    <div className="py-2 px-2 ml-4">
                        <button className="login-button text-white py-2 px-6 rounded-full focus:outline-none text-sm">Login</button>
                    </div>
                </div>
            </div>
        
        )
}

const Navlink = (props) => {
    return (
        <a href={props.link} className="text-decoration-none hover:bg-gray-100 focus:bg-gray-100 ">
            <div className="text-sm py-4 px-3 text-left">
                {props.children}
            </div>
        </a>
        
    )
}

const Navdropdown = (props) => {
    return (
        <div className="text-sm my-1 mx-3">
            
        </div>
    )
}

const Newtag = (props) => {
    return (
        <a href={props.link} className="hover:bg-gray-100 focus:bg-gray-100">
            <div className="flex px-3 text-left">
                <p className="text-sm py-4 pr-1.5">{props.children}</p>
                <img src="https://www.codingninjas.com/assets-landing/images/new-tag.svg" className="my-1 mx-0" width="35" length="19"></img>
            </div>
        </a>
    )
}

export default Navbar;
