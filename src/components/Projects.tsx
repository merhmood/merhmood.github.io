type Project = {
    id: number;
    img: string;
    title: string;
    text: string;
    link: string;
}

type ProjectsProp = {
    projects: Project[]
}
function Projects(props: ProjectsProp) {
    const {projects} = props
  return (
    <section>
        <h2>Projects</h2>
        <div className="cards">
            {projects.map((project:Project) => {
                const { id, img, title, text, link } = project
                return (
                    <a href={link} target="_blank" rel="noreferrer" key={id}>
                        <div className="card">
                            <img src={img} alt="project-screenshot" />
                            <h6>{title}</h6>
                            <p>{text}</p>
                        </div>
                    </a>
                )
            })}
        </div>
    </section>
  )
}

export default Projects