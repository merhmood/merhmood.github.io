import React from 'react'

function SocialMedia() {
  const iconImages = getIcons()

  return (
    <div className='social-media'>
        <span>
            <a href="https://www.instagram.com/merh_mood" target="-blank"><img src={iconImages.instagram} alt="" /></a>
        </span>
        <span>
            <a href="https://www.linkedin.com/in/mahmud-suberu-684020235/" target="-blank"><img src={iconImages.linkedin} alt="" /></a>
        </span>
        <span>
            <a href="https://twitter.com/merh_mood" target="-blank"><img src={iconImages.twitter} alt="" /></a>
        </span>
        <span>
            <a href="https://github.com/merhmood" target="-blank"><img src={iconImages.github} alt="" /></a>
        </span>
    </div>
  )
}

function getIcons() {
    return {
        linkedin: `${process.env.PUBLIC_URL} assets/linkedin.png`,
        instagram: `${process.env.PUBLIC_URL} assets/instagram (1).png`,
        twitter: `${process.env.PUBLIC_URL} assets/twitter (1).png`,
        github: `${process.env.PUBLIC_URL} assets/github.png`
    }
}

export default SocialMedia