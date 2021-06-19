import './App.css';
import React, { useState, useEffect } from 'react';
import './assets/main.css'
import {ReactComponent as Menu } from './icons/menu.svg';
import  Selectedall from './icons/selected/allevents.svg';
import  SelectedWebinar from './icons/selected/webinar.svg';
import  SelectedEvents from './icons/selected/codingevents.svg';
import  SelectedBootcamp from './icons/selected/bootcampevents.png';
import  SelectedWorkshop from './icons/selected/workshopevents.png';
import  Unselectedall from './icons/unselected/allevents.svg';
import  UnselectedWebinar from './icons/unselected/webinar.svg';
import  UnselectedEvents  from './icons/unselected/codingevents.svg';
import  UnselectedBootcamp from './icons/unselected/bootcampevents.png';
import  UnselectedWorkshop from './icons/unselected/workshopevents.png';


import { Navbar, Navlink, Newtag, Navimg, Leftside, Rightside, Navdropdown, Dropdownmenu, Dropdownlink, Dropdownheading, Dropdowntext } from './Components/Navbar';
import { Upperfootersection, Footerlink, Footerimg, Footertext, Lowerfootersection, Footericon } from './Components/Footer';
import { Body, Bodytext, Topevent, EventSection, LinkSection, Card, BigTagWrapper, Pagination } from './Components/Body';


function App() {
  
  
  const [showLinks, setShowLinks] = useState(false);
  
  const [linkEvent, setLinkEvent] = useState("ALL_EVENTS");
  const [linkTime, setLinkTime] = useState("Upcoming");
  const [selectedTags, setSelectedTags] = useState("");
  const [linkTags, setLinkTags] = useState([])
  const [cardData, setCardData] = useState([]);
  const [page, setPage] = useState({'current' : 1, 'next': true, 'prev' : false, 'total' : 0});

  const addTag = (tag) => {
    let y = selectedTags;
    y += `${tag},`;
    setSelectedTags(y);
  }

  const rmTag = (tag) => {
    let z = selectedTags;
    setSelectedTags(z.replace(tag, ""));
  }

  
  fetch(`https://api.codingninjas.com/api/v3/event_tags`).then(res => res.json()).then(data => {
      setLinkTags(data.data.tags);
    });
  useEffect(() => {
    
    fetch(`https://api.codingninjas.com/api/v3/events?event_category=${linkEvent}&event_sub_category=${linkTime}&tag_list=${selectedTags}&offset=0`).then(res => res.json()).then(data => {
      setCardData(data.data.events);
      
    })

    setPage({ 'current': 1, 'next': page.current < Math.ceil(cardData.length / 20) , 'prev': page.current > 1, 'total': Math.ceil(cardData.length/20)})

  }, [linkEvent, linkTime, selectedTags])
  
  useEffect(() => {
    setPage({ 'current': page.current, 'next': page.current < Math.ceil(cardData.length / 20), 'prev': page.current > 1, 'total': Math.ceil(cardData.length / 20)})
  }, [page.current, cardData])
  
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
        setShowLinks(false);
    }
  })
  
  return (
    <div className="App bg-gradient-to-r from-blue-800 to-blue-900 " onScroll={() => {console.log(window.scrollY)}}>
      <Navbar>
        <Menu className={`lg:hidden inline pt-2 text-white cursor-pointer ${showLinks ? "transition duration-250 transform rotate-90 pt-4" : "transition duration-250" }`} width="32" onClick={() => {setShowLinks(!showLinks)}} ></Menu>
        <Navimg link="/" imglink="https://files.codingninjas.in/cn-logo-dark-9824.svg" size="w-20"></Navimg>

        <Leftside classes={showLinks ? "bg-violet flex flex-col absolute left-0 top-12 w-full" : "flex lg:col-span-8 lg:flex-row hidden lg:inline-flex"}>
          <Navlink link="#">Home</Navlink> 
          <Navdropdown iconwidth="15.5" link="#" name="Courses">
            <Dropdownmenu>
                <div class="grid grid-rows-2 gap-4 px-3">
                  <div className="row">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="col">
                        <Dropdownheading imglink="https://files.codingninjas.com/Group-2.svg" imgwidth="20" imgClasses="" classes="">
                          Data Structures and Algorithms
                        </Dropdownheading>
                        <Dropdowntext>Basic foundation of coding in Java/Python/C++. Ideal for students who are in 1st/2nd years of college or have ample till placements</Dropdowntext>
                        <Dropdownlink link="#" slides="true">Python</Dropdownlink>
                        <Dropdownlink link="#" slides="true">Java</Dropdownlink>
                        <Dropdownlink link="#" slides="true">C++</Dropdownlink>
                      </div>
                      <div className="col">
                        <Dropdownheading imglink="https://files.codingninjas.com/Group-3.svg" imgwidth="20" imgClasses="" classes="">
                          Web Development
                        </Dropdownheading>
                        <Dropdowntext>Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation</Dropdowntext>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="col">
                            <p className="text-md text-white px-2 py-1 semibold">Full Stack</p>
                            <Dropdownlink link="#" slides="true">MERN Stack</Dropdownlink>
                            <Dropdownlink link="#" slides="true">Full stack Nodejs</Dropdownlink>
                          </div>
                          <div className="col">
                            <p className="text-md text-white px-2 py-1 semibold">Front-End</p>
                            <Dropdownlink link="#" slides="true">React</Dropdownlink>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <Dropdownheading imglink="https://files.codingninjas.com/Group%203738.svg" imgwidth="20" imgClasses="" classes="">
                          Competitive Programming
                        </Dropdownheading>
                      <Dropdowntext>Learn to write most efficient programmes and get ready to crack competitions on Codeforces, Topcoder, Hackerrank, Hackerearth Options available to start from DS and algo. Requires foundation coding knowledge</Dropdowntext>
                      <Dropdownlink link="#" slides="true">Competitive Programming</Dropdownlink>
                      </div>
                    </div>
                    
                    
                    
                  </div>
                  <div className="row">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="col">
                        <Dropdownheading imglink="https://files.codingninjas.com/Group%203419.svg" imgwidth="20" imgClasses="" classes="">
                            Interview Preparation
                        </Dropdownheading>
                        <Dropdowntext>Learn how to crack coding interviews of top tech companies. Ideal for students whose placements or internship is 6-9 months away</Dropdowntext>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="col">
                            <p className="text-md text-white px-2 py-1 semibold">Aptitude Preparation</p>
                            <Dropdownlink link="#" slides="true">Aptitude Preparation</Dropdownlink>

                          </div>
                          <div className="col">
                            <Dropdownlink link="#" slides="true">Operating System</Dropdownlink>
                            <Dropdownlink link="#" slides="true">Interview Preparation</Dropdownlink>

                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <Dropdownheading imglink="https://files.codingninjas.com/Group.svg" imgwidth="20">
                          Data Science and Machine Learning
                        </Dropdownheading>
                        <Dropdowntext>Learn essential skills to derive actionable insights out of data using statistical techniques. Course options include starting from the basics of python and then learning data analytics. Recommended for those passionate about data science and ready to learn stats and advanced mathematics</Dropdowntext>
                        <Dropdownlink link="#" slides="true">Machine Learning</Dropdownlink>
                        <Dropdownlink link="#" slides="true">Data Science and Machine Learning</Dropdownlink>

                      </div>
                      <div className="col">
                        <Dropdownheading imglink="https://files.codingninjas.com/android.svg" imgwidth="20">
                          Android Development
                        </Dropdownheading>
                        <Dropdowntext>Learn how to build user-friendly and interactive android applications with Kotlin Courses options include starting from the basics of coding and then learning android. Recommended course for those passionate about developing applications for 2.5 billion devices, earning a lucrative salary with a gentle learning curve</Dropdowntext>
                        <Dropdownlink link="#" slides="true">Android with Kotlin</Dropdownlink>  
                      </div>
                    </div>
                  </div>
                </div>
                
              </Dropdownmenu>
          </Navdropdown>
          <Navdropdown iconwidth="15.5" link="#" name={<Newtag link="#">Practice</Newtag>}>
            <Dropdownmenu>
              <div className="text-white pr-6">
                <Dropdownheading classes="text-white" dividerClass="orange-divider">
                  <Newtag link="#">CodeStudio</Newtag>
                </Dropdownheading>
                <img src="https://www.codingninjas.com/assets-landing/images/bottom-border.svg"/>
                <Dropdownlink link="#" white="true" slides="true">Code Problems</Dropdownlink>
                <Dropdownlink link="#" white="true" slides="true">Interview Experiences</Dropdownlink>
                <Newtag link="#" slides="true" classes="pl-2 py-1">Guided Paths</Newtag>
                <Dropdownheading classes="text-white" dividerClass="orange-divider">
                  CodeZen
                </Dropdownheading>
                <img src="https://www.codingninjas.com/assets-landing/images/bottom-border.svg" />
                <Dropdownlink link="#" white="true" slides="true">Dashboard</Dropdownlink>
                <Dropdownlink link="#" white="true" slides="true">Problem of the day</Dropdownlink>
                <Dropdownlink link="#" white="true" slides="true">Practice</Dropdownlink>
                <Dropdownlink link="#" white="true" slides="true">Tests</Dropdownlink>

              </div>
              
            </Dropdownmenu>
          </Navdropdown>
          <Navlink link="#">Event</Navlink>
          <Navlink link="#">Campus Ninjas</Navlink>
          <Navlink link="#">Blog</Navlink>
          <Navimg link="#" imglink="https://files.codingninjas.in/group-4450-9643.svg" size="w-28"></Navimg>
          <button className="login-button px-5 py-1.5 font-bold rounded-md text-white focus:outline-none bg-gradient-to-r from-yellow-400 to-red-400 hover:bg-gradient-to-r hover:from-red-400 hover:to-yellow-400 block lg:hidden w-28 my-2">Enroll</button>
        </Leftside>
        <Rightside>
          
          <div className="py-2 col-1 pl-4 pr-2">
            <button className="bg-red-100 px-5 py-1.5 rounded-md focus:outline-none font-bold text-yellow-500 hover:bg-red-200">Login</button>
          </div>
          
          <div className="py-2 col-1 pl-4 pr-2 lg:block hidden">
            <button className="login-button px-5 py-1.5 font-bold rounded-md text-white focus:outline-none bg-gradient-to-r from-yellow-400 to-red-400 hover:bg-gradient-to-r hover:from-red-400 hover:to-yellow-400">Enroll</button>
          </div>
          
        </Rightside>
        
        
        
        <div>

        </div>
      </Navbar>
      <Body>
        
        <Bodytext size="5xl" classes="text-left font-bold uppercase pb-2 mt-16">
          Events & News
        </Bodytext>
        <Bodytext size="xl" classes="text-left font-bold px-1 mb-8">
          Learn, Compete & Grow
        </Bodytext>
        <EventSection>
          <Topevent link="#" id="ALL_EVENTS" selectedId={linkEvent} alticon={Selectedall} icon={Unselectedall} onClick ={() => {setLinkEvent("ALL_EVENTS")}}>All Events</Topevent>
          <Topevent link="#" id="WEBINAR" selectedId={linkEvent} alticon={SelectedWebinar} icon={UnselectedWebinar} onClick ={() => {setLinkEvent("WEBINAR")}}>Webinars</Topevent>
          <Topevent link="#" id="CODING_EVENT" selectedId={linkEvent} alticon={SelectedEvents} icon={UnselectedEvents} onClick ={() => {setLinkEvent("CODING_EVENT")}}>Coding Events</Topevent>
          <Topevent link="#" id="BOOTCAMP_EVENT" selectedId={linkEvent} alticon={SelectedBootcamp} icon={UnselectedBootcamp} onClick ={() => {setLinkEvent("BOOTCAMP_EVENT")}}>Bootcamp Events</Topevent>
          <Topevent link="#" id="WORKSHOP" selectedId={linkEvent} alticon={SelectedWorkshop} icon={UnselectedWorkshop} onClick ={() => {setLinkEvent("WORKSHOP")}}>Workshop</Topevent>

        </EventSection>
        <LinkSection>
          <Topevent link="#" id="Upcoming" selectedId={linkTime} width="48" onClick= {() => {setLinkTime("Upcoming")}}>Upcoming</Topevent> 
          <Topevent link="#" id="Archived" selectedId={linkTime} width="48" onClick= {() => {setLinkTime("Archived")}}>Archived</Topevent>
          <Topevent link="#" id="All Time Favourites" selectedId={linkTime} width="48" onClick= {() => {setLinkTime("All Time Favourites")}}>All Time Favourites</Topevent>

        </LinkSection>
        <div className="flex flex-row">
          <div className="grid grid-cols-4 md:grid-cols-8 w-full md:w-4/5 bg-cardsection">
            {cardData == [] ? <p className="text-3xl font-semibold">No events found</p> : ""}
            {cardData.filter((elmt, idx) => idx >= (page.current-1)*20 && idx < page.current*20).map(elmt => {
              return (
                <Card data={elmt}></Card>
              )
            })}

           
            
          </div>
          <div className="bg-cardsection w-1/5 hidden md:block">
            <BigTagWrapper tags={linkTags} addfn={addTag} delfn={rmTag}/>
            
          </div>
          
        </div>
        <div className={`grid grid-cols-4 w-full bg-cardsection rounded-b-lg mt-0 mb-8 `}>
          <Pagination state={page} onfwd={() => { setPage({ 'current': page.current + 1, 'next': page.next, 'prev': page.prev, 'total' : page.total }) }} onback={() => { setPage({ 'current': page.current - 1, 'next': page.next, 'prev': page.prev, 'total' : page.total }) }}/>
        </div>
        

        
        
        
      </Body>
      <Upperfootersection>
        <Footerimg size="168" imglink="https://files.codingninjas.in/cn-logo-dark-9824.svg" classes="py-6">
        
        </Footerimg>
        <div className="col-span-4 flex justify-between">
          <div className="px-3 my-3 py-3">
            <Footertext txtsize="md" uppercase="true" weight="bold">
              coding ninjas
            </Footertext>
            <Footerlink link="#" txtsize="xs" slides="true">About us</Footerlink>
            <Footerlink link="#" txtsize="xs" slides="true">Privacy Policy</Footerlink>
            <Footerlink link="#" txtsize="xs" slides="true">Terms and Conditions</Footerlink>
            <Footerlink link="#" txtsize="xs" slides="true">Pricing and Refund Policy</Footerlink>
            <Footerlink link="#" txtsize="xs" slides="true">Bug Bounty</Footerlink>
            <Footerlink link="#" txtsize="xs" slides="true">Customers</Footerlink>
            <Footerlink link="#" txtsize="xs" slides="true">Press Release</Footerlink>

          </div>
          <div className="px-3 my-3 py-3">
            <Footertext txtsize="md" uppercase="true" weight="bold">
              products
            </Footertext>
            <Footerlink link="#" txtsize="xs" slides="true">Courses</Footerlink>
            <Footerlink link="#" txtsize="xs" slides="true">Try courses for Free</Footerlink>
            <Footerlink link="#" txtsize="xs" slides="true">Career Camp</Footerlink>
            <Footerlink link="#" txtsize="xs" slides="true">Hire Talent</Footerlink>
          </div>
          <div className="px-3 my-3 py-3">
            <Footertext txtsize="md" uppercase="true" weight="bold">
              community
            </Footertext>
            <Footerlink link="#" txtsize="xs" slides="true">CodeStudio</Footerlink>
            <Footerlink link="#" txtsize="xs" slides="true">Blog</Footerlink>
            <Footerlink link="#" txtsize="xs" slides="true">Events</Footerlink>
            <Footerlink link="#" txtsize="xs" slides="true">Campus Ninja</Footerlink>
            <Footerlink link="#" txtsize="xs" slides="true">Affiliate</Footerlink>
          </div>
          
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-4 pl-2 lg:pl-6 py-3 my-3">
          <Footertext txtsize="md" uppercase="true" weight="bold">
            follow us on
          </Footertext>
          <div className="flex flex-row">
            <div>
              <a href="#">
                <Footerimg imglink="https://files.codingninjas.in/0000000000003240.png" size="40" classes="py-4"></Footerimg>
              </a>
            </div>
            <div>
              <a href="#">
                <Footerimg imglink="https://files.codingninjas.in/0000000000003241.png" size="40" classes="py-4"></Footerimg>
              </a>
            </div>
            <div>
              <a href="#">
                <Footerimg imglink="https://files.codingninjas.in/0000000000003245.png" size="40" classes="py-4"></Footerimg>
              </a>
            </div>
            <div>
              <a href="#">
                <Footerimg imglink="https://files.codingninjas.in/0000000000003242.png" size="40" classes="py-4"></Footerimg>
              </a>
            </div>
            <div>
              <a href="#">
                <Footerimg imglink="https://files.codingninjas.in/telegram-8247.svg" size="40" classes="py-4"></Footerimg>
              </a>
            </div>
          </div>
          <Footertext txtsize="md" uppercase="true" weight="bold">
            contact us
          </Footertext> 
          <div className="flex pt-2">
            <div>
              <Footerimg imglink="https://files.codingninjas.in/0000000000003251.png" size="20" classes=""></Footerimg>
            </div>
            <div>
              <Footerlink txtsize="xs" slides="true" link="#">
                1800-123-3598
              </Footerlink>
            </div>
          </div>
          <div className="flex pt-1 pb-2">
            <div>
              <Footerimg imglink="https://files.codingninjas.in/0000000000003250.png" size="20" classes=""></Footerimg>
            </div>
            <div>
              <Footerlink txtsize="xs" slides="true" link="#">
                contact@codingninjas.in
              </Footerlink>
            </div>
          </div>


        </div>
        
      </Upperfootersection>
      <Lowerfootersection>
        <Footertext txtsize="xl" weight="bold" color="black">
          Important Links
        </Footertext>
        <div className="pt-6 pb-2 flex flex-col lg:flex-row lg:flex-wrap text-xs">
          <Footertext uppercase="true" weight="semibold" color="black">
            coding courses for beginners:
          </Footertext>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Data Structures and Algorithms |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Aptitude Preparation</Footerlink>

        </div>
        <div className="pb-2 flex flex-col lg:flex-row lg:flex-wrap text-xs">
          <Footertext uppercase="true" weight="semibold" color="black">
            advanced coding course:
          </Footertext>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Advanced Front End Web Development with React |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Full Stack Web Development with Node.js |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Full Stack Web Development - MERN Stack |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Android App Development with Kotlin |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Data Science |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Machine Learning |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Interview Preparation |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Competitive Programming</Footerlink>


        </div>
        <div className="pb-2 flex flex-col lg:flex-row lg:flex-wrap text-xs">
          <Footertext uppercase="true" weight="semibold" color="black">
            free trial:
          </Footertext>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">C++ Foundation with Data Structures |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Competitive Course |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Aptitude Preparation Course |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Python Foundation with Data Structures |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Android Development with Kotlin Language |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Full Stack Web Development with NodeJS |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Advanced Front-End Web Development with React |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Data Science and Machine Learning Complete |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Interview Preparation Course |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Machine Learning Course </Footerlink>



        </div>
        <div className="pb-2 flex flex-col lg:flex-row lg:flex-wrap text-xs">
          <Footertext uppercase="true" weight="semibold" color="black">
            free contents:
          </Footertext>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">C++ Foundation with Data Structures |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Competitive Programming Course |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Aptitude Preparation Course |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Python Foundation with Data Structures |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Android Development with Kotlin Language |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Full Stack Web Development with NodeJS |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Advanced Front-End Web Development with React |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Data Science and Machine Learning Complete |</Footerlink>
          <Footerlink color="text-gray-600" link="#" slides="true" nopad="true">Interview Preparation Course </Footerlink>



        </div>
        <div className="flex flex-row flex-wrap pt-6">
          <Footertext txtsize="md" weight="semibold" color="black">
            We accept payments using:
          </Footertext>
          <div className=" flex flex-row flex-wrap">
            <Footericon imglink="https://files.codingninjas.in/visa-5604.png" width="40" classes="pt-2 mx-2"></Footericon>
            <Footericon imglink="https://files.codingninjas.in/paypal-5603.png" width="40" classes="pt-2 mx-2"></Footericon>
            <Footericon imglink="https://files.codingninjas.in/upi-5602.png" width="40" classes="pt-2 mx-2"></Footericon>
            <Footericon imglink="https://files.codingninjas.in/no-cost-emi-5601.png" width="40" classes="pt-2 lg:pt-1 mx-2"></Footericon>
            <Footericon imglink="https://files.codingninjas.in/secure-5600.png" width="40" classes="pt-2 lg:pt-1 mx-2 justify-end"></Footericon>
            <Footericon imglink="https://files.codingninjas.in/encryp-5599.png" width="40" classes="pt-2 md:pt-0 mx-2"></Footericon>
            <Footericon imglink="https://files.codingninjas.in/razorpay-5598.png" width="40" classes="pt-2 lg:pt-1 mx-2"></Footericon>

          </div>
          
        </div>
        
      </Lowerfootersection>
      
      
      
      
    </div>
  );
}

export default App;
