import React from 'react';

const Navbar = (props) => {
    return (
        
            <div className="grid grid-cols-3 lg:grid-cols-12 pl-8 shadow-md">
                {props.children}
            </div>
        
        )
}

const Navlink = (props) => {
    return (
        <a href={props.link} className="text-decoration-none hover:bg-gray-100 focus:bg-gray-100 ">
            <div className="col-span-1 text-sm pt-4 pb-1 px-3">
                {props.children}
            </div>
        </a>
        
    )
}

const Navimg = (props) => {
    return (
        <a href={props.link}>
            <div className="col-span-2 py-3 px-3">
                <img src={props.imglink} className={props.size}></img>
            </div>
        </a>
    )
}

const Rightside = (props) => {
    return (
        <div class="flex col-span-2 justify-end">
            {props.children}
        </div>
    )
}

const Leftside = (props) => {
    return (
        <div className="flex col-span-8 flex-row hidden lg:inline-flex">
            {props.children}
        </div>
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

export { Navbar, Navlink, Newtag, Navimg, Leftside, Rightside };
