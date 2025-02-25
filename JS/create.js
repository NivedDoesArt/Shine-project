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

//A   1
//A#  2
//B   3
//C   4
//C#  5
//D   6
//D#  7
//E   8
//F   9
//F#  10
//G   11
//G#  12

var standardTuning4 = [8, 1, 6, 11]
var standardTuning5 = [8, 1, 6, 11, 3]
var standardTuning6 = [8, 1, 6, 11, 3, 8]
var standardTuning7 = [3, 8, 1, 6, 11, 3, 8]
var standardTuning8 = [10, 3, 8, 1, 6, 11, 3, 8]
var standardTuning9 = [5, 10, 3, 8, 1, 6, 11, 3, 8]
var standardTuning10 = [12, 5, 10, 3, 8, 1, 6, 11, 3, 8]

var dropTuning4 = [8, 3, 8, 1]
var dropTuning5 = [8, 3, 8, 1, 5]
var dropTuning6 = [8, 3, 8, 1, 5, 10]
var dropTuning7 = [3, 10, 3, 8, 1, 5, 10]
var dropTuning8 = [10, 5, 10, 3, 8, 1, 5, 10]
var dropTuning9 = [5, 12, 5, 10, 3, 8, 1, 5, 10]
var dropTuning10 = [12, 7, 12, 5, 10, 3, 8, 1, 5, 10]


var selectedTuning = standardTuning6

var value1
var value2
var value3

function loadTab(scale, shape, string) {

    if (scale == "scale1") {
        value1 = -7
    } else if (scale == "scale2") {
        value1 = -6
    } else if (scale == "scale3") {
        value1 = -5
    } else if (scale == "scale4") {
        value1 = -4
    } else if (scale == "scale5") {
        value1 = -3
    } else if (scale == "scale6") {
        value1 = -2
    } else if (scale == "scale7") {
        value1 = -1
    } else if (scale == "scale8") {
        value1 = 0
    } else if (scale == "scale9") {
        value1 = 1
    } else if (scale == "scale10") {
        value1 = 2
    } else if (scale == "scale11") {
        value1 = 3
    } else if (scale == "scale12") {
        value1 = 4
    }

    if (shape == "shape1") {
        value2 = "standardTuning"
    } else if (shape == "shape2") {
        value2 = "dropTuning"
    }

    if (string == "string1") {
        value3 = 4
    } else if (string == "string2") {
        value3 = 5
    } else if (string == "string3") {
        value3 = 6
    } else if (string == "string4") {
        value3 = 7
    } else if (string == "string5") {
        value3 = 8
    } else if (string == "string6") {
        value3 = 9
    } else if (string == "string7") {
        value3 = 10
    }
    /*
    console.clear();

    selectedTuning == eval(value2 + value3)

    for (i = 0; i < selectedTuning.length; i++) {
        value4 = selectedTuning[i]
        console.log(value4 + value1)
    }
    console.log(value1, value2, value3)
    console.log(value2 + value3)
    console.log(eval(value2 + value3))
    */



    console.log(value1, value2, value3)

    for (i = 0; i < eval(value2 + value3).length; i++) {
        var currentNote = (eval(value2 + value3)[i] + value1)
        var currentLetterNote

        if (currentNote <= 0) {
            currentNote = currentNote + 12
        }
        if (currentNote > 12) {
            currentNote = currentNote - 12
        }
        


        if (currentNote == 1) {
            currentLetterNote = "A "
        }
        if (currentNote == 2) {
            currentLetterNote = "A#"
        }
        if (currentNote == 3) {
            currentLetterNote = "B "
        }
        if (currentNote == 4) {
            currentLetterNote = "C "
        }
        if (currentNote == 5) {
            currentLetterNote = "C#"
        }
        if (currentNote == 6) {
            currentLetterNote = "D "
        }
        if (currentNote == 7) {
            currentLetterNote = "D#"
        }
        if (currentNote == 8) {
            currentLetterNote = "E "
        }
        if (currentNote == 9) {
            currentLetterNote = "F "
        }
        if (currentNote == 10) {
            currentLetterNote = "F#"
        }
        if (currentNote == 11) {
            currentLetterNote = "G "
        }
        if (currentNote == 12) {
            currentLetterNote = "G#"
        }
        console.log(currentLetterNote)
    }
}
loadTab("scale8", "shape1", "string3")



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