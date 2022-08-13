import { useEffect, useState} from "react";
import {skills} from "./models/skills"
import { projects } from "./models/projects";

import SocialMedia from "./components/SocialMedia";
import About from "./components/About";
import Message from "./components/Message";
import Projects from "./components/Projects";
import Links from "./components/Links";

import './App.css';

type Skill = {
  id:number;
  name:string;
  img:string
}

function App() {
  let userImage = `${process.env.PUBLIC_URL} assets/profile-img.jpg`
 
  const [isImageLoaded, setIsImageLoaded] = useState<React.CSSProperties>({ visibility: "hidden" })
  function renderUserImage(){
    setTimeout(() => {
      setIsImageLoaded({ visibility: "visible" })
    }, 1000)
  }

  const [bodyPosition, setBodyPosition] = useState(0)
  useEffect(()=>{
    window.addEventListener("scroll", getBodyScrollPosition)

    return window.removeEventListener("scroll", getBodyScrollPosition)
  },[])

  function getBodyScrollPosition(){
    setBodyPosition((state)=>{
      console.log("scrolled")
      return state + 1
    })
  }

  console.log(bodyPosition)

  return (
    <div className="App">
      <header>
        <h3>merhmood</h3>
        <Links />
      </header>
      <section>
        <div className='user-media'>
          <SocialMedia />
          <div className='user-image' style={{ ...isImageLoaded }}>
            <img src={userImage} alt="my-self" onLoad={renderUserImage}/>
          </div>
        </div>
        <Message />
      </section>
      <section>
        <h2>Skills</h2>
        <p>Languages/Tools</p>
        <div className='skills'>
          <ul>
            {skills.map((skill:Skill)=>{
              const {id, name, img} = skill
              return <li key={id}>{name} <img src={img} alt="skill-icon" /></li>
            }
            )}
          </ul>
        </div>
      </section>
      <Projects {...{projects}}/>
      <About />
      <section>
        <h2>Resume</h2>
        <a href="https://drive.google.com/file/d/1SMmGxxyOTHD06_coPYic0zSyrBqIJVsp/view?usp=sharing" target="_blank" rel="noreferrer">For formal accessibilty, you can get my resume by clicking on this link</a>
      </section>
      <footer>
        <p>&copy; of merhmood 2022</p>
      </footer>
      <button className="arrow-up" onClick={()=>window.scrollTo(0,0 )}>&#8593;</button>
    </div>
  );
}

export default App;
