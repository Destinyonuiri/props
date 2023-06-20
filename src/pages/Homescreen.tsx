// import React, { useState } from 'react'
// import styled from 'styled-components';

// const Homescreen = () => {

//   return (
//     <div>
        
//         <Container bg = 'purple' color ='white'>
//         start ur day with a smile
//         </Container>
//     </div>
//   )
// }

// export default Homescreen

// const Container = styled.div <{bg:string,color:string}>`
// width:100%;
// height:700px;
// justify-content:center;
// align-items:center;
// display:flex;
// font-size: 60px;
// background-color: ${({bg})=>bg};
// color:white
// `;


// props with mappng method

import { useState } from "react";
import styled from "styled-components";
import Button from "../Components/reUse/Button";

const Homescreen = () => {

    const [change,usechange] = useState([
        {text:"Destiny",bg:"blue"},
        {text:"Love ur self",bg:"purple"},
        {text:"Richard",bg:"Red"}
    ])
    
  return (
    <div>
        {
                    change.map((props)=>(
                        <Container bg = {props.bg}>
                            {props.text}
                        </Container>
                    ))
        }
    </div>
  )
}

export default Homescreen
const Container = styled.div<{bg:string}>`
width: 100%;
height: 700px;
justify-content: center;
display: flex;
align-items: center;
font-size:60px;
background-color: ${({bg})=>bg};
`;