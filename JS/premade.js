function openSong(value) {
    window.location.href = "../index.html#" + value
}

document.getElementById("content").style.height = "calc(" + (document.getElementById("middle").offsetHeight * 2) + "px + -20vw)"

document.getElementById("middle").addEventListener("scroll", (event) => {
    document.getElementById("middle").scrollIntoView({behavior: "smooth", block: "center"})
})