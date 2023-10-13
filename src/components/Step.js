import React from 'react'

const Step = ({title, heading, description, img, alternate}) => {
    const row = "lg:items-center lg:flex lg:flex-row lg:justify-end";
    const rowReverse = "lg:items-center lg:flex lg:flex-row-reverse lg:justify-center";

    return (
        <div className={alternate?row : rowReverse} style={{display:"flex", flexWrap:"flex", marginTop: 30, height:450, paddingHorizontal: 50, justifyContent:"center"}}>
          <div style={{ 
            width: '33vw',  // Equivalent to lg:w-2/6
            marginRight:20,  // Equivalent to lg:-ml-20
            marginLeft: 20,
            marginTop: '-10px',  // Equivalent to lg:-mt-10
            display: 'flex',
            flexDirection: 'column',  // Equivalent to lg:flex lg:flex-col
            justifyContent: 'flex-start',  // Equivalent to lg:justify-center lg:items-start
          }}>
           <p
            style={{
              paddingBottom: '1.25rem',  // Equivalent to pb-5
              fontSize: '1.25rem',       // Equivalent to text-2xl
              fontWeight: '600',        // Equivalent to font-semibold
              textAlign: 'left',     // Equivalent to text-center
              color: '#8EBADA',         // Equivalent to text-orange-400
              marginBottom: '0',       // Equivalent to lg:pb-0
              marginTop: '-0.75rem',    // Equivalent to lg:-mb-3
            }}
          >
            {title}
          </p>
          <p
  style={{
    marginBottom: "1vh",
    fontSize: '2.5rem', // Equivalent to "text-4xl"
    fontWeight: '600', // Equivalent to "font-semibold"
    lineHeight: '2.5rem', // Equivalent to "leading-relaxed"
    textAlign: "left", // Equivalent to "text-center"
    color: '#000', // Equivalent to "text-blue-800"
    marginTop: '-0.75rem', // Equivalent to "mb-3" (negative margin)
  }}
>
  {heading}
</p>
<p
  style={{
    fontSize: '1.5rem', // Equivalent to "text-2xl"
    fontWeight: '600', // Equivalent to "font-semibold"
    lineHeight: '2rem', // Equivalent to "leading-10"
    textAlign: 'left', // Equivalent to "text-center"
    color: '#555555', // Equivalent to "text-gray-400"
  }}
>
  {description}
</p>
          </div>
          <div style={{ marginLeft: alternate?100:0, marginRight: alternate?0:100}} >
              <img
                style={{
                  height: "40vw",
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
