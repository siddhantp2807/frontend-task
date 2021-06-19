import React from 'react';

const Upperfootersection = (props) => {
    return (
        <div className="grid grid-cols-3 lg:grid-cols-12 py-2 px-1 bg-brown">
            {props.children}
        </div>
    )
}

const Footerimg = (props) => {
    return (
        <div className={`col-span-3 pl-0 pr-4 m-0 lg:mx-auto ${props.classes}`}>
            <img src={props.imglink} width={props.size}></img>
        </div>
    )
}

const Footerlink = (props) => {
    return (
    <li className={`w-max list-none lg:mx-1 my-1 text-decoration-none ${props.color ? props.color : "text-white"} ${props.nopad ? "" : "py-1"} text-${props.txtsize} ${props.slides ? "footer-sliding-border" : ""}`}>
        <a href={props.link}>
            {props.children}
        </a>
    </li>
    )
}

const Footertext = (props) => {
    return (
        <p className={`text-decoration-none my-1 text-left text-${props.txtsize ? props.txtsize : "xs" } ${props.uppercase ? "uppercase" : ""} font-${props.weight} text-${props.color ? props.color : "white"}`}>
            {props.children}
        </p>
    )
}

const Lowerfootersection = (props) => {
    return (
    <div className="bg-white p-12">
        {props.children}
    </div>
    )
}

const Footericon = (props) => {
    return (
        <div className={props.classes}>
            <img src={props.imglink} width={props.size} alt="An icon"/>
        </div>
    )
}

export { Lowerfootersection, Upperfootersection, Footerlink, Footerimg, Footertext, Footericon } ;