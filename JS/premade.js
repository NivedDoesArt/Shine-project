function openSong(value) {
    window.location.href = "../index.html#" + value
}

document.getElementById("content").style.height = "calc(" + (document.getElementById("middle").offsetHeight * 2) + "px + -20vw)"
