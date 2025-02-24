var menuToggle = 0

function contentMenu() {
    if (menuToggle == 0) {
        document.getElementById('contentMenuButton').style.transform = "rotate(180deg) translateX(-75px) translateY(5px)"
        document.getElementById('contentMenuButton').style.color = "#335"

        document.getElementById('contentLeft').style.transform = "translateX(-100%)"
        document.getElementById('contentRight').style.width = "100%"

        menuToggle = 1
    } else if (menuToggle == 1) {
        document.getElementById('contentMenuButton').style = null

        document.getElementById('contentLeft').style = null
        document.getElementById('contentRight').style = null


        menuToggle = 0
    }
}



var toggleScale = 0
var toggleShape = 0
var toggleString = 0



async function toggleScaleMenu() {
    if (toggleScale == 0) {
        document.getElementById("scaleDiv").style.position = "static"
        document.getElementById("scaleDiv").style.transform = "scale(100%)"
        document.getElementById("scaleDiv").style.paddingBottom = "10px"

        await new Promise(resolve => setTimeout(resolve, 10));

        if (toggleShape == 1) {
            toggleShapeMenu()
            await new Promise(resolve => setTimeout(resolve, 10));
        }
        if (toggleString == 1) {
            toggleStringMenu()
            await new Promise(resolve => setTimeout(resolve, 10));
        }
        document.getElementById("contentRight").setAttribute("onclick", "toggleScaleMenu()")
        document.getElementById("scaleUl").removeAttribute("onclick")

        toggleScale = 1
    } else if (toggleScale == 1) {
        document.getElementById("scaleDiv").style = null
        document.getElementById("scaleUl").style = null

        await new Promise(resolve => setTimeout(resolve, 10));
        document.getElementById("scaleUl").setAttribute("onclick", "toggleScaleMenu()")
        document.getElementById("contentRight").removeAttribute("onclick")

        toggleScale = 0
    }
}

var currentScale = "scale8"

function scaleSelect(currentID) {
    document.getElementById(currentScale).removeAttribute("class")
    document.getElementById(currentID).setAttribute("class", "currentScale")

    document.getElementById("selectedScale").innerHTML = document.getElementById(currentID).innerHTML

    currentScale = currentID
}





async function toggleShapeMenu() {
    if (toggleShape == 0) {
        document.getElementById("shapeDiv").style.position = "static"
        document.getElementById("shapeDiv").style.transform = "scale(100%)"
        document.getElementById("shapeDiv").style.paddingBottom = "10px"

        await new Promise(resolve => setTimeout(resolve, 10));

        if (toggleScale == 1) {
            toggleScaleMenu()
            await new Promise(resolve => setTimeout(resolve, 10));
        }
        if (toggleString == 1) {
            toggleStringMenu()
            await new Promise(resolve => setTimeout(resolve, 10));
        }

        document.getElementById("contentRight").setAttribute("onclick", "toggleShapeMenu()")
        document.getElementById("shapeUl").removeAttribute("onclick")

        toggleShape = 1
    } else if (toggleShape == 1) {
        document.getElementById("shapeDiv").style = null
        document.getElementById("shapeUl").style = null

        await new Promise(resolve => setTimeout(resolve, 10));
        document.getElementById("shapeUl").setAttribute("onclick", "toggleShapeMenu()")
        document.getElementById("contentRight").removeAttribute("onclick")

        toggleShape = 0
    }
}

var currentShape = "shape1"

function shapeSelect(currentID) {
    document.getElementById(currentShape).removeAttribute("class")
    document.getElementById(currentID).setAttribute("class", "currentScale")

    document.getElementById("selectedShape").innerHTML = document.getElementById(currentID).innerHTML

    currentShape = currentID
}





async function toggleStringMenu() {
    if (toggleString == 0) {
        document.getElementById("stringDiv").style.position = "static"
        document.getElementById("stringDiv").style.transform = "scale(100%)"
        document.getElementById("stringDiv").style.paddingBottom = "10px"

        await new Promise(resolve => setTimeout(resolve, 10));

        if (toggleString == 1) {
            toggleScaleMenu()
            await new Promise(resolve => setTimeout(resolve, 10));
        }
        if (toggleShape == 1) {
            toggleShapeMenu()
            await new Promise(resolve => setTimeout(resolve, 10));
        }

        document.getElementById("contentRight").setAttribute("onclick", "toggleStringMenu()")
        document.getElementById("stringUl").removeAttribute("onclick")

        toggleString = 1
    } else if (toggleString == 1) {
        document.getElementById("stringDiv").style = null
        document.getElementById("stringUl").style = null

        await new Promise(resolve => setTimeout(resolve, 10));
        document.getElementById("stringUl").setAttribute("onclick", "toggleStringMenu()")
        document.getElementById("contentRight").removeAttribute("onclick")

        toggleString = 0
    }
}

var currentString = "string3"

function stringSelect(currentID) {
    document.getElementById(currentString).removeAttribute("class")
    document.getElementById(currentID).setAttribute("class", "currentScale")

    document.getElementById("selectedString").innerHTML = document.getElementById(currentID).innerHTML

    currentString = currentID
}