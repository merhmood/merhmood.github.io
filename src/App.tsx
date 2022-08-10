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
          <div className='user-image'>
            <img src={`${process.env.PUBLIC_URL} assets/profile-img.jpg`} alt="" />
          </div>
        </div>
        <div className='message'>
          <h1>
            Welcome to my portfolio website
          </h1>
          <p>-Hi i am mahmud suberu, a Fullstack developer and this is my porfolio website. I hope you have a great time getting to know me</p>
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
          </ul>
        </div>
      </section>
      <section>
        <h2>Projects</h2>
        <div className="cards">
            {projects.map((project)=>{
              const {id, img,title, text, link} = project
              return(
              <a href={link} target="_blank" rel="noreferrer">
                <div className="card" key={id}>
                  <img src={img} alt="" />
                  <h6>{title}</h6>
                  <p>{text}</p>
                </div>
              </a>
            )
            })}
        </div>
      </section>
      <section>
        <h2>About</h2>
        <p>After gaining knowledge from multiple sources, I philosophically believe there are two roles to being a software engineer. First, the facilitator is someone who helps everyone do their best work together by creating a psychologically safe and involving environment to collaborate on, then the developer is someone who translates the team's best work into a desirable, realistic, and measurable product. I value honest conversations and progressive thinking, and I aim to create things that empower and inspire.</p>
        <br /><p>My soft skills include:</p>
        <ul>
          <li>Agility</li>
          <li>Critical thinking</li>
          <li>Adaptability</li>
          <li>Team work</li>
          <li>Time management</li>
        </ul>
      </section>
      <section>
        <h2>Resume</h2>
        <a href="https://drive.google.com/file/d/1SMmGxxyOTHD06_coPYic0zSyrBqIJVsp/view?usp=sharing" target="_blank" rel="noreferrer">For formal accessibilty, you can get my resume by clicking on this link</a>
      </section>
      <footer>
        <p>&copy; of merhmood 2022</p>
      </footer>
      <button className="arrow-up">&#8593;</button>
    </div>
  );
}

export default App;