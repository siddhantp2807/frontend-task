import React, { useState, useRef } from 'react';
import { ReactComponent as Downarrow } from '../icons/chevron-down.svg';

const Navbar = (props) => {
    const [navTrans, setNavTrans] = useState(true);
    
    return (
        
        <div className="grid grid-cols-4 lg:grid-cols-12 pl-8 bg-violet z-20 md:fixed w-full">
                {props.children}
            </div>
        
        )
}

const Navlink = (props) => {
    return (
        <a href={props.link} className="text-decoration-none text-white text-left">
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
        <div className={props.classes}>
            {props.children}
        </div>
    )
}

const Navdropdown = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <a href={props.link} className="text-decoration-none" onMouseEnter = {() =>  {window.innerWidth > 1024 ? setOpen(true) : setOpen(false)}} onMouseLeave= {() => setOpen(false)} onClick = {() => {setOpen(!open)}}>
            <div className="flex px-3">
                <div className="text-sm py-4 text-white">{props.name}</div>
                <Downarrow width={props.iconwidth} color="white"/>
            </div>
            {open && props.children}
        </a>
    )
}

const Dropdownmenu = (props) => {
    return (
        <div className={`px-3 rounded-b-md shadow-md bg-violet z-40 py-1 h-max ${window.innerWidth > 1024 ? "dropdown pink-bottom" : "alt-dropdown"} lg:px-0`}>
        <ol className="list-none text-left">
            {props.children}
        </ol>
        
    </div>
    )
}
const Dropdownheading = (props) => {
    return (
        <div className="px-2 py-1">
            <div class="flex pb-1 mt-6 mb-1">
                <img src={props.imglink} width={props.imgwidth} className={props.imglink ? "mr-4": ""}/>
                <p className={`text-md text-white ${props.classes}`}>{props.children}</p>

            </div>
            
            
        </div>
        
    )
}

const Dropdowntext = props => {
    return (
        <div className="py-1 px-2 mb-4">
            <p className="text-xs text-white font-semibold">{props.children}</p>
        </div>
    )
}
const Dropdownlink = (props) => {
    return (
        <li className={`w-max text-decoration-none ${props.white ? "text-white":"text-orange"} px-2 py-1 text-sm ${props.slides ? "sliding-border" : ""}`}>
            <a href={props.link}>
                {props.children}
            </a>
        </li>
    )
}

const Newtag = (props) => {
    return (
        <a href={props.link}>
            <div className={`flex pr-1 text-left ${props.classes}`}>
                <p className={`text-sm py-auto pr-1.5 ${props.slides ? "sliding-border" : ""}`}>{props.children}</p>
                <img src="https://www.codingninjas.com/assets-landing/images/new-tag.svg" width="35" length="19"></img>
            </div>
        </a>
    )
}


export { Navbar, Navlink, Newtag, Navimg, Leftside, Rightside, Navdropdown, Dropdownmenu, Dropdownlink, Dropdownheading, Dropdowntext};
