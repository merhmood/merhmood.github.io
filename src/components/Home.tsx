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
          I'm a software engineer from

          <span style={
            {
              color: 'green', 
              fontSize: '0.9rem', 
              marginLeft: 5, 
              marginRight: 43
            }
          }>
            Nigeria
          </span>
          , current using the MERN Stack for day to day workflow.
          I build software that scales without being impacted by
          changes that cut across concerns. I have great feel for
          Software design and Architect, clean code, Test Driven Development, 
          DevOps and Agile Framework &#x1F601;	

        </p>
      </div>
    </div>
  )
}

export default Home