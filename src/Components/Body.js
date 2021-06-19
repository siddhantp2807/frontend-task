import React, { useState, useEffect } from 'react';
import DefaultImage from './../icons/defaultuser.jpg';
import { ReactComponent as Next } from './../icons/chevron-next.svg';
import { ReactComponent as Back } from './../icons/chevron-back.svg';

const lessThan10 = (num) => {
    return num < 10 ? `0${num}` : `${num}`;
}
const convertTime = (timestamp) => {
    const d = new Date(timestamp);
    let basetime = ``;
    if (0 < d.getHours() < 12) {
        basetime = `${lessThan10(d.getHours())}:${lessThan10(d.getMinutes())} AM`;
    }
    else if (d.getHours() === 12) {
        basetime = `${lessThan10(d.getHours())}:${lessThan10(d.getMinutes())} PM`
    }
    else {
        basetime = `${lessThan10(d.getHours()-12)}:${lessThan10(d.getMinutes())} PM`
    }

    return basetime;
}

const dateFinder = (timestamp, format) => {
    const d = new Date(timestamp);
    if (format === "date-time") {
        return `${lessThan10(d.getDate())} ${d.toLocaleString('default', {month: 'short'})} ${d.getFullYear()}, ${convertTime(timestamp)}`;
    }
    else if (format === 'time-date') {
        return `${convertTime(timestamp)}, ${lessThan10(d.getDate())} ${d.toLocaleString('default', {month: 'short'})} ${d.getFullYear()}`;

    }

}

const Body = (props) => {
    return (
    <div class="px-0 py-6 md:py-12 md:px-10 lg:py-16 lg:px-24">
        {props.children}
    </div>
    )
}

const Bodytext = (props) => {
    return (
    <div className={`text-${props.color ? props.color : "white" } text-${props.size ? props.size : "lg" } ${props.classes}`}>
            {props.children}
    </div>
    )
}

const Topevent = (props) => {
    const [selected, setSelected] = useState(false);
    useEffect(() => {
        props.id === props.selectedId ? setSelected(true) : setSelected(false)
    }, [props.selectedId])
    return (
    <div className={`flex-shrink-0 w-${props.width ? props.width : 48}`} onClick={props.onClick}>
            <a href={props.link} id={props.id} className="">
                <div className={`flex items-center my-2 ${selected ? "card-link" : "text-gray-400"} py-1`}>
                    {props.icon ? <img src={selected ? props.alticon : props.icon} className="w-5 h-5" /> : ""}
                    <p className={`ml-1.5 text-lg font-bold`}>{props.children}</p>
                </div>

            </a>
    </div>
    
    )
}

const EventSection = (props) => {
    return (
        <div className={`flex flex-nowrap md:justify-between overflow-x-auto bg-cardsection rounded-t-lg col-span-2 md:col-span-6 lg:col-span-10 mt-8 mb-0 px-6`}>
            {props.children}
        </div>
    )
}

const LinkSection = (props) => {
    return (
        <div className="flex overflow-x-auto justify-start bg-white border-t border-b border-gray-300 px-4">
            {props.children}
        </div>
    )
}


const Card = (props) => {
    const data = props.data;
    const [archived, setArchived] = useState(false);

    
    useEffect(() => {
        let now = new Date().getTime();
        if (now > data.event_start_time)  {
            setArchived(true);
            
        }
    })
    return (
        <div className="shadow-lg my-6 mx-4 rounded-lg col-span-4 text-left">
            <div className="relative w-full">
                <img src={data.mobile_cover_picture} alt="Image of an event" className="w-full rounded-t-lg z-0"/>
                { archived ? "" : <RegisterTag date={data.registration_end_time}/> }
            </div>

            <p className="py-3 px-4 text-black text-lg font-semibold">{data.name}</p>
            <div className="flex flex-row pt-3 pb-1 px-4 w-full">
                <div className="mr-8">
                    <p className="text-gray-400 text-xs">Starts on</p>
                    <p className="text-black text-xs md:text-sm font-bold">{dateFinder(data.event_start_time, "time-date")}</p>
                </div>
                <div className="mr-8">
                    <p className="text-gray-400 text-xs">Entry Fee</p>
                    <p className="text-black text-xs md:text-sm font-bold">{data.fees == 0 ? "Free" : data.fees}</p>
                </div>
                <div className="mr-8">
                    <p className="text-gray-400 text-xs">Venue</p>
                    <p className="text-black text-xs md:text-sm font-bold">{data.venue}</p>
                </div>
            </div>
            <div className="px-4">
                <div className="border-b border-gray-300"></div>
            </div>
            <p className="text-left px-4 pt-2 pb-4 w-full text-gray-400">{data.short_desc}</p>
            <TagWrapper tags={data.card_tags}></TagWrapper>
            
            <div className="border-b border-gray-300 my-2"></div>
            <div className="flex justify-between">
                <SmallImg usrs={data.registered_users}/>
                { archived ? "" : <RegisterButton/> }
            </div>
        </div>
    
    )
}

const TagWrapper = (props) => {
    const [showCount, setShowCount] = useState(false);

    useEffect(() => {
        if (props.tags.length > 3) {
            setShowCount(true);
        }
    }, [props.tags.length])
    return (
    <div className="flex flex-wrap px-4 pt-2 pb-3 mb-12">
        {
        props.tags.filter((element, idx) => idx < 3).map(element => {
            return (
                <SmallTag>{element}</SmallTag>
                )
        })}
        {showCount ? <div className="text-sm font-bold text-orange">+ {props.tags.length-3} more</div> : ""}
    </div>
    
    )
}



const BigTagWrapper = (props) => {
    const [showCount, setShowCount] = useState(10);
    
    
    return (
        <div className="px-2 pt-4 pb-3 mb-12">
            <p className="text-gray-400 font-bold uppercase text-left">tags</p>
            {
                props.tags.filter((element, idx) => idx < showCount).map(element => {
                    return (
                        <BigTag addfn={props.addfn} delfn={props.delfn}>{element}</BigTag>
                    )
                })}
            <div className="text-sm font-bold text-left text-orange cursor-pointer" onClick={() => { showCount == 10 ? setShowCount(props.tags.length) : setShowCount(10) }}>{showCount == 10 ? `+${ props.tags.length - 10 } more tags` : `Show less`}</div>
        </div>

    )
}

const SmallTag = (props) => {
    
    return (
        <span className={`py-1 px-4 mr-1 my-1 text-center text-xs rounded-sm text-gray-600 bg-gray-300 `}>{props.children}</span>
    )
}

const BigTag = (props) => {
    const [selected, setSelected] = useState(false);
    useEffect(() => {
        selected ? props.addfn(props.children) : props.delfn(props.children);
    }, [selected])
    return (
        <div className={`my-2 px-2 py-1 mr-1 text-wrap cursor-pointer text-center text-sm rounded-sm ${selected ? `bg-orange text-white` : `text-gray-500 bg-gray-200`} text-left w-max`} onClick={() => { setSelected(!selected) }}>{props.children}</div>
    )
}

const SmallImg = (props) => {
    return (
        <div>
            <div className="flex flex-wrap px-4">
                {props.usrs.top_users.map(element => {
                    return (
                        <img src={element.image_url ? element.image_url : DefaultImage} className="w-5 h-5 rounded-full mr-1" />
                    )
                })}

            </div>
            <p className="px-4 py-1 text-xs font-semibold text-gray-400">{props.usrs.show_users_count ? `and ${props.usrs.other_users_count} others registered` : ``}</p>
        </div>
        
    )
}

const RegisterTag = (props) => {
    return (
        <div className="flex absolute bottom-2 right-2 bg-white text-xs rounded-sm py-1 px-2">
            <span class="flex h-3 w-3 mr-2 my-auto">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            Registrations <span className="font-bold mx-1">open</span> till <span className="font-bold ml-1">{dateFinder(props.date, "date-time")}</span>
        </div>
    )    
}

const RegisterButton = (props) => {
    return (
        <div className={`pt-0 pb-1 px-4 ${props.classes}`}>
            <a href={props.link}>
                <button className="bg-gradient-to-r from-red-400 to-yellow-400 text-white px-2 py-2 text-sm uppercase">Register Now</button>
            </a>
        </div>
    )
}


const Pagination = (props) => {
    return (
        <div className={`flex flex-row items-center mx-auto mt-12 mb-6 col-span-4 ${props.visibility}`}>
            <BackBtn back={props.state.prev} click={props.onback}></BackBtn>
            <Pageno pages={props.state.total} pageno={props.state.current}></Pageno>
            <NextBtn fwd={props.state.next} click={props.onfwd}></NextBtn>
        </div>
    )
}

const BackBtn = props => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        props.back ? setActive(true) : setActive(false);
    }, [props.back])
    return (
        <div>
            <button className={`${ active ? "bg-orange" : "bg-gray-600" } focus:outline-none p-2 mx-2 text-white font-bold shadow-md`} onClick={active ? props.click : ""}><Back width={"20"} color="white"/></button>
        </div>
    )
}

const NextBtn = props => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        props.fwd ? setActive(true) : setActive(false);
    }, [props.fwd])
    return (
        <div>
            <button className={`${active ? "bg-orange" : "bg-gray-600"} focus:outline-none p-2 mx-2 text-white font-bold shadow-md`} onClick={active ? props.click : ""}><Next width={"20"} color="white"/></button>
        </div>
    )
}

const Pageno = (props) => {
    
    return (
        <div className="text-md text-gray-500">
            Page {props.pageno} of {props.pages}
        </div>
    )
}

export { Body, Bodytext, Topevent, EventSection, LinkSection, Card, BigTagWrapper, Pagination };
