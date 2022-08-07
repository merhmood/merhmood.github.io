import {skills} from "./skills"
import { projects } from "./cards";
import './App.css';

interface Skill {
  id:number;
  name:string;
  img:string
}

function App() {

  const iconImages = {
    linkedin: `${process.env.PUBLIC_URL} assets/linkedin.png`,
    instagram: `${process.env.PUBLIC_URL} assets/instagram (1).png`,
    twitter: `${process.env.PUBLIC_URL} assets/twitter (1).png`,
    github: `${process.env.PUBLIC_URL} assets/github.png`
  }

  return (
    <div className="App">
      <header>
        <h3>merhmood</h3>
        <ul>
          <li>Skills</li>
          <li>Projects</li>
          <li>About</li>
          <li>Resume</li>
        </ul>
      </header>
      <section>
        <div className='user-media'>
          <div className='social-media'>
            <span>
              <a href=""><img src={iconImages.instagram} alt="" /></a>
            </span>
            <span>
              <a href=""><img src={iconImages.linkedin} alt="" /></a>
            </span>
            <span>
              <a href=""><img src={iconImages.twitter} alt="" /></a>
            </span>
            <span>
              <a href=""><img src={iconImages.github} alt="" /></a>
            </span>
          </div>
          <div className='user-image'>
            <img src={`${process.env.PUBLIC_URL} assets/profile-img.jpg`} alt="" />
          </div>
        </div>
        <div className='message'>
          <h1>
            Welcome to my portfolio website
          </h1>
          <p>-Hi i am mahmud suberu, a MERN stack developer and this is my porfolio website. I hope you have a great time getting to know me</p>
          <button>commencer <span>&#8595;</span></button>
        </div>
      </section>
      <section>
        <div className='skills'>
          <h2>Skills</h2>
          <p>Languages/Tools</p>
          <ul>
            {skills.map((skill:Skill)=>{
              const {id, name, img} = skill
              return <li key={id}>{name} <img src={img} alt="" /></li>
            }
            )}
            <li></li>
          </ul>
        </div>
      </section>
      <section>
        <h2>Projects</h2>
        <div className="cards">
            {projects.map((project)=>{
              const {id, img,title, text} = project
              return(
              <div className="card" key={id}>
                <img src={img} alt="" />
                <h6>{title}</h6>
                <p>{text}</p>
              </div>
            )
            })}
        </div>
      </section>
    </div>
  );
}

export default App;
