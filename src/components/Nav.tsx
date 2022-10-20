import React, { useEffect, useState } from 'react'

type NavLeftSpacingValue = {
  left: number;
} | undefined

type NavProps = {
  navLeftSpacing: ()=> NavLeftSpacingValue
}

const Nav = (props: NavProps) => {
  let [cssStyle, setCssStyle] = useState<NavLeftSpacingValue>(()=>{
    return props.navLeftSpacing()
  })
  useEffect(()=>{
    window.addEventListener(
      'resize', ()=>{
        resizeListener(props, setCssStyle)
    })
    return ()=>{
      window.removeEventListener(
        'resize', ()=>{
          resizeListener(props, setCssStyle)
      })
    }
  }, [props])
  return (
    <nav style={cssStyle}>
        <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#personal-projects">Personal Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

// This function enable the navigation bar position to
// remain arranged when the user tries to reside the window
// manually

export function resizeListener(propsvalue: NavProps, stateDispatch: React.Dispatch<React.SetStateAction<NavLeftSpacingValue>>) {
  let newCssStyle = propsvalue.navLeftSpacing()
  stateDispatch(newCssStyle)
  return newCssStyle
}


export default Nav