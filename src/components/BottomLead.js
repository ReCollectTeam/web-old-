import React from "react";

const BottomLead = ({actionText, description, mainActionText, extraActionText, signupText, secondaryText}) => {
  return (
    <div style={{paddingRight: "10vw", paddingLeft: "10vw",}}className="flex flex-col justify-center h-screen bg-blue-800 lg:pt-24 lg:pb-14 lg:bg-cover lg:h-full lg:bg-action">
      <p className="p-5 text-5xl font-bold leading-normal text-center text-white lg:text-4xl lg:pt-10">{actionText}</p>
      <p style={{color:"#f5f5f5"}} className="pl-12 pr-12 text-xl leading-8 text-center text-gray-300 lg:text-gray-200 lg:font-medium">{description}</p>
      <div className="flex flex-col flex-wrap items-center justify-center w-full h-48 pt-5 lg:flex-row lg:pt-1">
        <a href="https://forms.gle/Bsg1sea5utNuL7fQ9" target="_blank" rel="noopener noreferrer">
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
              marginBottom: 10,
            }}
          >
            {signupText}
          </button>
        </a>
        <a href="https://forms.gle/a6PzZyRtXHxKNegV9">
          <button
            style={{
              paddingTop: '0.75rem',   // Equivalent to pt-3
              paddingBottom: '0.75rem',  // Equivalent to pb-3
              paddingLeft: '2rem',      // Equivalent to pl-8
              paddingRight: '2rem',     // Equivalent to pr-8
              marginTop: '0',        // Equivalent to mt-8
              fontSize: '1.5rem',      // Equivalent to text-2xl
              fontWeight: '600',       // Equivalent to font-semibold
              textAlign: 'center',     // Equivalent to text-center
              color: 'white',          // Equivalent to text-white
              transition: 'all',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Equivalent to shadow-2xl
              marginLeft: '1.25rem',   // Equivalent to lg:ml-5
              borderRadius: '1rem',    // Equivalent to rounded-xl
              hover: {
                color: '#FFA500',     // Equivalent to hover:text-orange-500
                backgroundColor: '#E5E5E5', // Equivalent to hover:bg-gray-50
              },
              outline: 'none',        // Equivalent to focus:outline-none
              borderWidth: '2px',     // Equivalent to ring-2
              borderColor: '#D3D3D3', // Equivalent to ring-gray-300
              marginBottom: 10,
            }}
          >
            {secondaryText}
          </button>
        </a>

        {/*
        PLAY STORE BUTTON
         <button
          className="pt-3 pb-3 pl-8 pr-8 mt-3 text-2xl font-semibold text-center text-white transition-all bg-orange-600 shadow-2xl lg:mt-0 rounded-xl hover:bg-orange-700 focus:outline-none ring-2 ring-orange-600 "
        >
          {mainActionText}
        </button> */}
        {/* 
        APP STORE BUTTON
        <button
          className="pt-3 pb-3 pl-8 pr-8 mt-8 text-2xl font-semibold text-center text-white transition-all shadow-2xl lg:ml-5 lg:mt-0 rounded-xl hover:text-orange-500 hover:bg-gray-50 focus:outline-none ring-2 ring-gray-300 "
        >
          {extraActionText}
        </button> */}
      </div>
    </div>
  );
};

export default BottomLead;
