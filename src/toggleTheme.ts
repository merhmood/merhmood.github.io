function toggleTheme(state:string) {
    if (state === "black") {
        localStorage.setItem("theme", "white")
        return "white"
    }
    else {
        localStorage.setItem("theme", "black")
        return "black"
    }
}
export default toggleTheme 