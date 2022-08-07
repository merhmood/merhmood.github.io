import './App.css';

function App() {

  const iconImages = {
    linkedin: `${process.env.PUBLIC_URL}linkedin.png`,
    instagram: `${process.env.PUBLIC_URL}instagram (1).png`,
    twitter: `${process.env.PUBLIC_URL}twitter (1).png`
  }

  return (
    <div className="App">
      <header>
        <h3>merhmood</h3>
        <ul>
          <li>Skills</li>
          <li>Tools</li>
          <li>Projects</li>
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
          </div>
          <div className='user-image'>
            <img src={`${process.env.PUBLIC_URL}profile-img.jpg`} alt="" />
          </div>
        </div>
        <div className='message'>
          <h1>
            Welcome to my portfolio website
          </h1>
          <p>-Hi i am mahmud suberu, a MERN stack developer and this is my porfolio website, i hope you have a great time getting to know me</p>
        </div>
      </section>
      <section>
        <div className='skills'>
          <ul>
            <li>React</li>
            <li>Express js</li>
            <li>Node js</li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className='tools'></div>
      </section>
    </div>
  );
}

export default App;
