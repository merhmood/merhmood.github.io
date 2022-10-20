import React from 'react'

import Nav from './Nav'

const Header = () => {
  return (
    <Nav navLeftSpacing={navLeftSpacing}/>
  )
}
export function navLeftSpacing() {
  const mediaQueries = window.matchMedia('(min-width: 783px)')
  if (mediaQueries.matches) {
    const navWidth = 180
    const appWidth = 660
    const navLeftSpacing = appWidth + ((window.innerWidth - appWidth) / 2) - navWidth
    return { left: navLeftSpacing }
  }
}

export default Header