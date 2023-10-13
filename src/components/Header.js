import React from "react";

import rectangle_1 from '../assets/Rectangle_1.png';
import rectangle_2 from '../assets/Rectangle_2.png'; 
import Overview1 from "../assets/Overview1.png";
import Overview2 from "../assets/Overview2.png";
import Overview3 from "../assets/Overview3.png";


const Header = ({appName, tagLine, description, mainActionText, extraActionText, signupText}) => {
  return (
    <div id="product" >
      <div style={{textShadow:'0px 1px 1px gray', height:"75vh",}} className="flex flex-col items-center justify-start font-sans min-h-96 bg-gray-50 lg:pt-10 lg:pb-20 lg:bg-hero lg:bg-cover">
        <div>
          <p
            style={{
              padding: '0.75rem',      // Equivalent to p-3
              paddingTop: '3rem',       // Equivalent to pt-12
              fontSize: '3rem',    // Equivalent to text-lg
              fontWeight: '300',       // Equivalent to font-bold
              color: '#8EBADA',       // Equivalent to lg:text-gray-300
            }}
          >
            {appName}
          </p>
        </div>
        <div>
          <p className="p-2 text-4xl font-bold text-center text-blue-800 lg:mx-auto lg:w-4/6 lg:text-5xl lg:text-gray-100">
            {tagLine}
          </p>
        </div>
        <div>
          <p className="p-4 pt-6 font-sans text-2xl leading-10 text-center text-gray-500 lg:text-gray-200">
            {description}
          </p>
        </div>
        <div className="relative z-50 flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
         <a href="https://docs.google.com/forms/d/e/1FAIpQLSfxD3jSTgyB5jFvC9COHpacrStAOcAiPhSOikoQemAjWjGsOg/viewform?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button
              style={{
                paddingTop: '0.75rem',   // Equivalent to pt-3
                paddingBottom: '0.75rem',  // Equivalent to pb-3
                paddingLeft: '2rem',      // Equivalent to pl-8
                paddingRight: '2rem',     // Equivalent to pr-8
                marginTop: '0',     // Equivalent to mt-3
                fontSize: '1.5rem',      // Equivalent to text-2xl
                fontWeight: '600',       // Equivalent to font-semibold
                textAlign: 'center',     // Equivalent to text-center
                color: 'white',          // Equivalent to text-white
                transition: 'all',
                backgroundColor: '#8EBADA',  // Equivalent to bg-orange-600
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Equivalent to shadow-2xl
                borderRadius: '1rem',    // Equivalent to rounded-xl
                outline: 'none',        // Equivalent to focus:outline-none
                borderWidth: '2px',     // Equivalent to ring-2
                borderColor: '#8EBADA', // Equivalent to ring-orange-600
              }}
            >
              {signupText}
            </button>
         </a>
         
          {/*
          PLAY STORE LINK
           <button
            className="pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all bg-orange-600 rounded-full shadow-2xl lg:ml-5 hover:bg-orange-700 focus:outline-none ring-4 ring-orange-600 lg:ring-2 lg:font-medium "
          >
            {mainActionText}
          </button> */}
          {/* 
          APP STORE LINK
          <button
            className="pt-3 pb-3 text-2xl font-semibold text-center text-orange-500 transition-all rounded-full shadow-2xl lg:mr-5 hover:text-orange-500 hover:bg-gray-50 pl-11 pr-11 bg-gray-50 focus:outline-none ring-4 ring-orange-500 lg:font-medium lg:text-gray-50 lg:bg-opacity-0 lg:ring-2 lg:ring-white"
          >
            {extraActionText}
          </button> */}
        </div>
        
      </div>
      <div style={{ 
        position: 'relative', 
        display: 'flex', 
        flexWrap:"flex",
        flexDirection: 'row', 
        alignItems: 'flex-end', 
        justifyContent: 'center', 
        width: '100vw', 
        height: '40vw', 
        paddingTop: 0, 
        paddingBottom: "3vh",
        marginBottom: 20, 
      }}>
          <img 
            style={{
              position:"relative", 
              marginLeft: "-50vw", 
              marginTop: "-1vh",
              // height: "78vh",
              width: "21vw"
            }}
            src={Overview1} 
            alt=""/>
           <img 
            style={{
              position:"relative", 
              marginTop:"-3vh",
              // height: "82vh",
              width: "22vw", 
              zIndex: 10
            }}
            src={Overview2} 
            alt=""/>
          <img 
            style={{
              position:"relative", 
              marginRight: "-50vw", 
              marginTop:"-1vh",
              //height: "78vh"
              width: "21vw"
            }}
            src={Overview3} 
            alt=""/>
        </div>
    </div>
  );
};

export default Header;
