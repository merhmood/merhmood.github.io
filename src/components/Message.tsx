import React from 'react'

function Message() {
  return (
    <div className='message'>
        <h1>
            Welcome to my portfolio website
        </h1>
        <p>-Hi i am mahmud suberu, a Fullstack developer and this is my porfolio website. I hope you have a great time getting to know me</p>
        <button onClick={() => {
            let scrollToPosition = (window.innerHeight / 3) * 2
            window.scrollTo(0, scrollToPosition)
        }}>
            commencer
            <span>&#8595;</span>
        </button>
    </div>
  )
}

export default Message