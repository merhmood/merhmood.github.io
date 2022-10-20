import React from 'react'

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className='my-self'>
        <img src={`${process.env.PUBLIC_URL}/assets/profile-img.jpg`} alt="" />
        <span>Mahmud Suberu</span>
        <p>I'm a software engineer with an amazing adaptability, communication and problem solving skills, I provide value by helping companies meet the demands of their customer, through continuous delivery of amazing products, I design sustainable software architecture that handle the continuous changes demanded by the users and stakeholder. I always keep myself updated with the latest problem solving techniques to ensure the product I develop don't fall short in technical requirements. </p>
      </div>
    </div>
  )
}

export default Home