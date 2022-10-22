import React, { useEffect, useState } from 'react'

const Home = () => {

  const [profilePic, setProfilePic] = useState('')

  useEffect(()=>{
    setProfilePic(
      `${process.env.PUBLIC_URL}/assets/profile-img.jpg`
    )
  }, [])

  return (
    <div className='home'>
      <div className='my-self'>
        <div className='image-container'>
          <img src={profilePic} alt='profile pic' />
        </div>
        <span>Mahmud Suberu</span>
        <p>
          I'm a software engineer from <span>Nigeria</span>
          , currently using the MERN Stack for my 
          day to day development workflow.
          I have great feel for Software Design, 
          Software Architecture, clean code, 
          Test Driven Development, DevOps and 
          Agile Framework &#x1F601;	

        </p>
      </div>
    </div>
  )
}

export default Home