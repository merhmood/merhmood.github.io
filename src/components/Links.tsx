import {useState, useEffect} from"react"

type ScrollPosition = {
    [index: string]: number
    Skills: number
    Projects: number
    About: number
    Resume: number
}

const scrollObject: ScrollPosition = { Skills: 0, Projects: 0, About: 0, Resume: 0 }

function Links() {
    const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ ...scrollObject })
    useEffect(() => {
        let App = document.querySelectorAll("section")
        let tempScrollPosition = { ...scrollObject }
        for (let i = 2; i < App.length; i++) {
            let attrName: string = App[i].children[0].innerHTML
            tempScrollPosition[attrName] = App[i].offsetTop

        }
        setScrollPosition(tempScrollPosition as ScrollPosition)
    }, [])
  return (
    <ul>
        <li onClick={() => scrollPage("Skills", scrollPosition)}>Skills</li>
        <li onClick={() => scrollPage("Projects", scrollPosition)}>Projects</li>
        <li onClick={() => scrollPage("About", scrollPosition)}>About</li>
        <li onClick={() => scrollPage("Resume", scrollPosition)}>Resume</li>
    </ul>
  )
}
function scrollPage(link: string, scrollPosition: ScrollPosition) {
    window.scrollTo(0, scrollPosition[link])
}

export default Links