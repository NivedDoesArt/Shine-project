var menuToggle = 0

function contentMenu() {
    if (menuToggle == 0) {
        document.getElementById('contentMenuButton').style.transform = "rotate(180deg) translateX(-75px) translateY(5px)"
        document.getElementById('contentMenuButton').style.color = "#335" 
        
        document.getElementById('contentLeft').style.transform = "translateX(-100%)"

        menuToggle = 1
    } else if (menuToggle == 1) {
        document.getElementById('contentMenuButton').style = null

        document.getElementById('contentLeft').style = null

        menuToggle = 0
    }
}