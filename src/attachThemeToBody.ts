function attachThemeToBody (){
    let body = document.querySelector("body")
    if (localStorage.getItem("theme") === "black" && body !== null) {
        body.style.backgroundColor = "black"
        body.style.color = "white"

    }
    else if (localStorage.getItem("theme") === "white" && body !== null) {
        body.style.backgroundColor = "white";
        body.style.color = "black"
    }
}
export default attachThemeToBody