import React from 'react'

const Step = ({title, heading, description, img, alternate}) => {
    const row = "lg:items-center lg:flex lg:flex-row lg:justify-end";
    const rowReverse = "lg:items-center lg:flex lg:flex-row-reverse lg:justify-center";

    return (
        <div className={alternate?row : rowReverse} style={{marginTop: 30, height:450, paddingHorizontal: 50, justifyContent:"center"}}>
          <div style={{ 
            width: '33.3333%',  // Equivalent to lg:w-2/6
            marginHorizontal:20,  // Equivalent to lg:-ml-20
            marginTop: '-10px',  // Equivalent to lg:-mt-10
            display: 'flex',
            flexDirection: 'column',  // Equivalent to lg:flex lg:flex-col
            justifyContent: 'flex-start',  // Equivalent to lg:justify-center lg:items-start
          }}>
           <p
            style={{
              paddingBottom: '1.25rem',  // Equivalent to pb-5
              fontSize: '1.5rem',       // Equivalent to text-2xl
              fontWeight: '600',        // Equivalent to font-semibold
              textAlign: 'center',     // Equivalent to text-center
              color: '#8EBADA',         // Equivalent to text-orange-400
              marginBottom: '0',       // Equivalent to lg:pb-0
              marginTop: '-0.75rem',    // Equivalent to lg:-mb-3
              fontSize: '1.125rem',     // Equivalent to lg:text-lg
              fontWeight: '700',        // Equivalent to lg:font-bold
              textAlign: 'left',       // Equivalent to lg:text-left
            }}
          >
            {title}
          </p>
            <p className="p-5 text-4xl font-semibold leading-relaxed text-center text-blue-800 lg:pb-4 lg:text-3xl lg:pl-0 lg:font-bold lg:text-left">{heading}</p>
            <p className="p-5 pb-0 pl-10 pr-10 text-2xl leading-10 text-center text-gray-400 lg:w-5/6 lg:pb-0 lg:text-lg lg:text-left lg:p-0 lg:pl-0 lg:pr-0">{description}</p>
          </div>
          <div style={{ marginLeft: alternate?100:0, marginRight: alternate?0:100}} >
              <img
                style={{
                  marginTop: '-24px',  // Equivalent to lg:-mt-24
                  marginBottom: '-20px',  // Equivalent to lg:-mb-20
                }}
                src={img}
                alt=""
              />
          </div>
        </div>
    )
}

export default Step
