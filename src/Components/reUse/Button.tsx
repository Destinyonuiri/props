import React from 'react'
import styled from 'styled-components'

interface iButton{
    bg?: string,
    color?: string,
}

const Button:React.FC<iButton>= (bg,color) => {
  return (
    <div>
        <Container bg={`${bg}`} color={`${color}`}>
            click me
        </Container>
    </div>
  )
}

export default Button

const Container = styled.div<{bg:string,color:string}>`
width: 150px;
height: 100px;
justify-content: center;
align-items: center;
display: flex;
background-color:${({bg}) =>bg};
border-radius: 5px;
color: ${({color})=>color};
`