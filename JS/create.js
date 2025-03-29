Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

//RETRIEVING SAVED DATA

var userStorage = localStorage.getItem("userStorage")
var capoValue = "none"
var currentlySaving = false
var foundNotes = [];

function databaseCheck() {
    if (location.hash == "#1") {
        //buddy holly solo

    } else if (location.hash == "#2") {
        //Boys will be bugs

    } else if (location.hash == "#3") {
        //Walkie Talkie Man

    } else if (location.hash == "#4") {
        //Don't stop me now (solo)

    } else if (location.hash == "#5") {
        //Scotty doesn't know
        console.log("SCOTTY DOESN'T KNOW")
        userStorage = ['none', 0, 'scale8', 'shape1', 'string3', '2', 'n!5!0$0$6$3', 'n!5!0$0$14$3', 'n!5!0$1$6$3', 'n!5!0$1$14$3', 'n!5!0$2$6$3', 'n!5!0$2$14$3', 'n!5!0$3$6$3', 'n!5!0$3$14$3', 'n!5!0$0$12$3', 'n!5!0$1$12$3', 'n!5!0$2$12$3', 'n!5!0$3$12$3', 'n!4!0$1$8$3', 'n!4!0$3$8$3', 'n!7!0$3$0$3', 'n!3!0$0$0$5', 'n!4!0$0$10$3', 'n!4!0$1$10$3', 'n!4!0$2$10$3', 'n!4!0$3$10$3', 'n!5!0$1$4$3', 'n!5!0$3$4$3', 'n!4!0$2$8$3', 'n!3!0$2$0$4', 'n!5!0$1$2$5', 'n!7!0$3$2$3', 'n!5!0$2$4$3', 'n!5!0$1$0$5', 'n!3!0$2$2$4', 'n!4!0$0$8$3', 'n!5!0$0$4$3', 'n!3!0$0$2$5']
        localStorage.setItem("userStorage", userStorage)
    } else {
        if (localStorage.getItem("userStorage") == null) {
            console.log("Creating new database")

            tempStorage = ["none", 0, "scale8", "shape1", "string3", 1]
            localStorage.setItem("userStorage", tempStorage)
            capoValue = "none"

        } else {
            console.log("Existing database found:")
            console.log(localStorage.getItem("userStorage").split(","))
            capoValue = localStorage.getItem("userStorage").split(",")[0]
            if (capoValue == 0) {
                capoValue = "none"
            }
        }
    }
}
databaseCheck()

userStorage = localStorage.getItem("userStorage").split(",")

/*

[0] = capo (either "none" or 1>24)
[1] = time signature
[2] = string letter
[3] = string scale
[4] = string amount
[5] = row amount
[6+] = notes

*/

var menuToggle = 0

function contentMenu() {
    if (menuToggle == 0) {
        document.getElementById('contentMenuButton').style.transform = "rotate(180deg) translateX(-75px) translateY(5px)"
        document.getElementById('contentMenuButton').style.color = "#335"

        document.getElementById('contentLeft').style.transform = "translateX(-80%)"
        document.getElementById('contentRight').style.width = "90%"

        menuToggle = 1
    } else if (menuToggle == 1) {
        document.getElementById('contentMenuButton').style = null

        document.getElementById('contentLeft').style = null
        document.getElementById("contentLeft").style.height = document.getElementById("contentRight").offsetHeight + "px"
        document.getElementById('contentRight').style = null

        menuToggle = 0
    }
}



var toggleScale = 0
var toggleShape = 0
var toggleString = 0

var clickedStringID
var generatedStringID

var globalCapoState = false

var rowLineAmount = 8

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

/*
var dropTuning4 = [8, 3, 8, 1]
var dropTuning5 = [8, 3, 8, 1, 5]
var dropTuning6 = [8, 3, 8, 1, 5, 10]
var dropTuning7 = [8, 3, 8, 1, 6, 10, 3]
var dropTuning8 = [8, 3, 8, 1, 6, 11, 3, 8]
var dropTuning9 = [8, 3, 8, 1, 6, 11, 4, 8, 1]
var dropTuning10 = [8, 3, 8, 1, 6, 11, 4, 9, 1, 6]
*/

var standardTuning4 = [11, 6, 1, 8]
var standardTuning5 = [3, 11, 6, 1, 8]
var standardTuning6 = [8, 3, 11, 6, 1, 8]
var standardTuning7 = [1, 8, 4, 11, 6, 1, 8]
var standardTuning8 = [6, 1, 9, 4, 11, 6, 1, 8]
var standardTuning9 = [11, 6, 2, 9, 4, 11, 6, 1, 8]
var standardTuning10 = [4, 11, 7, 2, 9, 4, 11, 6, 1, 8]

var dropTuning4 = [1, 8, 3, 8]
var dropTuning5 = [5, 1, 8, 3, 8]
var dropTuning6 = [10, 5, 1, 8, 3, 8]
var dropTuning7 = [3, 10, 6, 1, 8, 3, 8]
var dropTuning8 = [8, 3, 11, 6, 1, 8, 3, 8]
var dropTuning9 = [1, 8, 4, 11, 6, 1, 8, 3, 8]
var dropTuning10 = [6, 1, 9, 4, 11, 6, 1, 8, 3, 8]


var selectedTuning = standardTuning6

var value1
var value2
var value3

var rowAmount = 1
var timesigValue = "4/4"

function loadTab(scale, shape, string) {
    document.getElementById("tabLocation").innerHTML = ""

    const tabCapo = document.getElementById("tabLocation").appendChild(document.createElement("p"))
    tabCapo.innerHTML = "Capo: " + capoValue
    tabCapo.setAttribute("style", "margin-top: 1em; margin-left: 20px; font-family: 'Anonymous Pro', serif !important; font - weight: 400 !important; font - style: normal !important; ")
    tabCapo.setAttribute("id", "tabCapoId")

    const tabTimesig = document.getElementById("tabLocation").appendChild(document.createElement("p"))
    tabTimesig.innerHTML = "Time signature: " + timesigValue
    tabTimesig.setAttribute("style", "margin-bottom: 1em; margin-left: 20px; font-family: 'Anonymous Pro', serif !important; font - weight: 400 !important; font - style: normal !important; ")

    reloadStrings()

    for (ii = 0; ii != rowAmount; ii++) {

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

        const newElement = document.getElementById("tabLocation").appendChild(document.createElement("div"))
        newElement.setAttribute("class", "tabColumn")



        for (i = -1; i < eval(value2 + value3).length; i++) {
            var currentNote = (eval(value2 + value3)[i] + value1)
            var currentLetterNote

            if (currentNote <= 0) {
                currentNote = currentNote + 12
            }
            if (currentNote > 12) {
                currentNote = currentNote - 12
            }



            if (currentNote == 1) {
                currentLetterNote = "A |"
            }
            if (currentNote == 2) {
                currentLetterNote = "A#|"
            }
            if (currentNote == 3) {
                currentLetterNote = "B |"
            }
            if (currentNote == 4) {
                currentLetterNote = "C |"
            }
            if (currentNote == 5) {
                currentLetterNote = "C#|"
            }
            if (currentNote == 6) {
                currentLetterNote = "D |"
            }
            if (currentNote == 7) {
                currentLetterNote = "D#|"
            }
            if (currentNote == 8) {
                currentLetterNote = "E |"
            }
            if (currentNote == 9) {
                currentLetterNote = "F |"
            }
            if (currentNote == 10) {
                currentLetterNote = "F#|"
            }
            if (currentNote == 11) {
                currentLetterNote = "G |"
            }
            if (currentNote == 12) {
                currentLetterNote = "G#|"
            }
            console.log(currentLetterNote)



            if (i != -1) {
                const newRow = newElement.appendChild(document.createElement("div"))
                const newRowP = newRow.appendChild(document.createElement("p"))
                newRowP.innerHTML = (currentLetterNote)
                newRow.setAttribute("class", "tabRow")

                for (iiii = 0; iiii < 4; iiii++) {
                    for (iii = 0; iii < rowLineAmount * 2; iii++) {
                        const newRowLine = newRow.appendChild(document.createElement("p"))
                        newRowLine.setAttribute("onClick", "rowLineClick(this.id)")
                        newRowLine.setAttribute("class", "tabRowLine")
                        newRowLine.setAttribute("tabindex", "1")
                        generatedStringID = ii + "$" + iiii + "$" + iii + "$" + i
                        newRowLine.setAttribute("id", generatedStringID)
                        newRowLine.innerHTML = "-"
                    }
                    const newRowLine = newRow.appendChild(document.createElement("p"))
                    newRowLine.innerHTML = "|"

                }
            }
            else {
                const palmMute = newElement.appendChild(document.createElement("p"))
                palmMute.innerHTML = "PM|"
                palmMute.setAttribute("class", "tabRow")

                for (iiii = 0; iiii < 4; iiii++) {
                    for (iii = 0; iii < rowLineAmount * 2; iii++) {
                        const palmMuteLine = palmMute.appendChild(document.createElement("p"))
                        palmMuteLine.setAttribute("class", "palmMuteLine")
                        palmMuteLine.setAttribute("tabindex", "1")
                        generatedStringID = ii + "$" + iiii + "$" + iii + "$" + i
                        palmMuteLine.setAttribute("id", generatedStringID)
                        palmMuteLine.innerHTML = "&nbsp;"
                    }
                    const palmMuteLine = palmMute.appendChild(document.createElement("p"))
                    palmMuteLine.innerHTML = "|"

                }
            }
        }
    }

    document.getElementById("contentLeft").style.height = document.getElementById("contentRight").offsetHeight + "px"
    document.getElementById("content").style.height = document.getElementById("contentRight").offsetHeight + "px"

    loadNotes()
}
loadTab("scale8", "shape1", "string3")



function reloadStrings() {
    document.getElementById("noteSelectArea").innerHTML = ""
    const newString = document.getElementById("noteSelectArea").appendChild(document.createElement("div"))
    newString.setAttribute("class", "noteSelectString")
    newString.style.marginTop = "1em"

    const newStringCapo = newString.appendChild(document.createElement("div"))
    newStringCapo.setAttribute("id", "noteSelectStringCapo")

    for (x = 0; x < 25; x++) {
        const newNote = newString.appendChild(document.createElement("button"))
        newNote.innerHTML = x
        newNote.setAttribute("class", "noteSelect")
        newNote.setAttribute("id", "noteSelect" + x)
        newNote.setAttribute("onClick", "noteSelect(this.innerHTML)")
    }



    const stringButtonLayout = document.getElementById("noteSelectArea").appendChild(document.createElement("div"))
    stringButtonLayout.setAttribute("class", "stringButtonLayout")

    const stringButtonHolder1 = stringButtonLayout.appendChild(document.createElement("button"))
    stringButtonHolder1.setAttribute("class", "stringButtonHolder")
    stringButtonHolder1.setAttribute("onClick", "noteSelect(this.innerHTML)")
    stringButtonHolder1.innerHTML = "Delete"

    const stringButtonHolder2 = stringButtonLayout.appendChild(document.createElement("button"))
    stringButtonHolder2.setAttribute("class", "stringButtonHolder")
    stringButtonHolder2.setAttribute("onClick", "noteSelect(this.innerHTML)")
    stringButtonHolder2.innerHTML = "x"

    const stringButtonHolder3 = stringButtonLayout.appendChild(document.createElement("button"))
    stringButtonHolder3.setAttribute("class", "stringButtonHolder")
    stringButtonHolder3.setAttribute("onClick", "noteSelect(this.innerHTML)")
    stringButtonHolder3.innerHTML = "/"

    const stringButtonHolder4 = stringButtonLayout.appendChild(document.createElement("button"))
    stringButtonHolder4.setAttribute("class", "stringButtonHolder")
    stringButtonHolder4.setAttribute("onClick", "noteSelect(this.innerHTML)")
    stringButtonHolder4.innerHTML = "\\"

    const stringButtonHolder5 = stringButtonLayout.appendChild(document.createElement("button"))
    stringButtonHolder5.setAttribute("class", "stringButtonHolder")
    stringButtonHolder5.setAttribute("onClick", "noteSelect(this.innerHTML)")
    stringButtonHolder5.innerHTML = "h"

    const stringButtonHolder6 = stringButtonLayout.appendChild(document.createElement("button"))
    stringButtonHolder6.setAttribute("class", "stringButtonHolder")
    stringButtonHolder6.setAttribute("onClick", "noteSelect(this.innerHTML)")
    stringButtonHolder6.innerHTML = "p"

    const stringButtonHolder7 = stringButtonLayout.appendChild(document.createElement("button"))
    stringButtonHolder7.setAttribute("class", "stringButtonHolder")
    stringButtonHolder7.setAttribute("onClick", "noteSelect(this.innerHTML)")
    stringButtonHolder7.innerHTML = "b"

    const stringButtonHolder8 = stringButtonLayout.appendChild(document.createElement("button"))
    stringButtonHolder8.setAttribute("class", "stringButtonHolder")
    stringButtonHolder8.setAttribute("onClick", "noteSelect(this.innerHTML)")
    stringButtonHolder8.innerHTML = "~"



    const stringSettingLayout = document.getElementById("noteSelectArea").appendChild(document.createElement("div"))
    stringSettingLayout.setAttribute("class", "stringButtonLayout")

    const stringSettingHolder0 = stringSettingLayout.appendChild(document.createElement("button"))
    stringSettingHolder0.setAttribute("class", "stringSettingHolder")
    stringSettingHolder0.setAttribute("onClick", "noteSelect(this.innerHTML)")
    stringSettingHolder0.innerHTML = "Close"

    const stringSettingHolder1 = stringSettingLayout.appendChild(document.createElement("button"))
    stringSettingHolder1.setAttribute("class", "stringSettingHolder")
    stringSettingHolder1.setAttribute("id", "stringSettingHolder1")
    stringSettingHolder1.setAttribute("onClick", "lockNotes()")
    stringSettingHolder1.innerHTML = "Lock"
    if (isLocked == true) {
        document.getElementById("stringSettingHolder1").style.backgroundColor = "#fff8"
        document.getElementById("stringSettingHolder1").style.color = "#335"
        document.getElementById("stringSettingHolder1").style.fontWeight = "800"
    }
    else if (isLocked == false) {
        document.getElementById("stringSettingHolder1").style.backgroundColor = null
        document.getElementById("stringSettingHolder1").style.color = null
        document.getElementById("stringSettingHolder1").style.fontWeight = null
    }


    const stringSettingHolder2 = stringSettingLayout.appendChild(document.createElement("button"))
    stringSettingHolder2.setAttribute("class", "stringSettingHolder")
    stringSettingHolder2.setAttribute("id", "pmToggleButton")
    stringSettingHolder2.setAttribute("onClick", "noteSelect(this.innerHTML)")
    stringSettingHolder2.innerHTML = "PM"

    globalCapoState = true
    noteSelect(capoValue)
}
reloadStrings()



var isLocked = false

function noteSelect(content) {
    if (globalCapoState == false) {
        if (document.getElementById(lastClickedId1)) {
            document.getElementById(lastClickedId1).style.boxShadow = "inset #fff 0px 0px 0px 0px"
            document.getElementById(lastClickedId1).style.borderRadius = "10px"
        }

        if (content == "Delete") {
            document.getElementById(clickedStringID).innerHTML = "-"
            document.getElementById(clickedStringID).style = null

            document.getElementById(clickedStringID).removeAttribute("title")

            if (currentlySaving == false) {
                for (x = 0; x < 25; x++) {
                    if (userStorage.includes("n!" + x + "!" + clickedStringID)) {
                        userStorage.remove("n!" + x + "!" + clickedStringID)
                        console.log(userStorage)
                    }
                }

                if (userStorage.includes("n!x!" + clickedStringID)) {
                    userStorage.remove("n!x!" + clickedStringID)
                    console.log(userStorage)
                }

                if (userStorage.includes("n!/!" + clickedStringID)) {
                    userStorage.remove("n!/!" + clickedStringID)
                    console.log(userStorage)
                }

                if (userStorage.includes("n!\\!" + clickedStringID)) {
                    userStorage.remove("n!\\!" + clickedStringID)
                    console.log(userStorage)
                }

                if (userStorage.includes("n!h!" + clickedStringID)) {
                    userStorage.remove("n!h!" + clickedStringID)
                    console.log(userStorage)
                }

                if (userStorage.includes("n!p!" + clickedStringID)) {
                    userStorage.remove("n!p!" + clickedStringID)
                    console.log(userStorage)
                }

                if (userStorage.includes("n!b!" + clickedStringID)) {
                    userStorage.remove("n!b!" + clickedStringID)
                    console.log(userStorage)
                }

                if (userStorage.includes("n!~!" + clickedStringID)) {
                    userStorage.remove("n!~!" + clickedStringID)
                    console.log(userStorage)
                }
            }
        }
        else if (content == "PM") {
            pmToggle();
        }
        else if (content == "Close") {

        }
        else {
            if (document.getElementById(clickedStringID) && document.getElementById(clickedStringID).innerHTML != "-") {
                if (currentlySaving == false) {
                    for (x = 0; x < 25; x++) {
                        if (userStorage.includes("n!" + x + "!" + clickedStringID)) {
                            userStorage.remove("n!" + x + "!" + clickedStringID)
                            console.log(userStorage)
                        }
                    }

                    if (userStorage.includes("n!x!" + clickedStringID)) {
                        userStorage.remove("n!x!" + clickedStringID)
                        console.log(userStorage)
                    }

                    if (userStorage.includes("n!/!" + clickedStringID)) {
                        userStorage.remove("n!/!" + clickedStringID)
                        console.log(userStorage)
                    }

                    if (userStorage.includes("n!\\!" + clickedStringID)) {
                        userStorage.remove("n!\\!" + clickedStringID)
                        console.log(userStorage)
                    }

                    if (userStorage.includes("n!h!" + clickedStringID)) {
                        userStorage.remove("n!h!" + clickedStringID)
                        console.log(userStorage)
                    }

                    if (userStorage.includes("n!p!" + clickedStringID)) {
                        userStorage.remove("n!p!" + clickedStringID)
                        console.log(userStorage)
                    }

                    if (userStorage.includes("n!b!" + clickedStringID)) {
                        userStorage.remove("n!b!" + clickedStringID)
                        console.log(userStorage)
                    }

                    if (userStorage.includes("n!~!" + clickedStringID)) {
                        userStorage.remove("n!~!" + clickedStringID)
                        console.log(userStorage)
                    }
                }
            }

            if (document.getElementById(clickedStringID)) {
                document.getElementById(clickedStringID).innerHTML = content
                document.getElementById(clickedStringID).title = content
                document.getElementById(clickedStringID).style.width = "0.885em"
                document.getElementById(clickedStringID).style.fontSize = "0.9em"
                document.getElementById(clickedStringID).style.letterSpacing = "-2px"
                document.getElementById(clickedStringID).style.fontKerning = "normal"
                document.getElementById(clickedStringID).style.textAlign = "center"
                document.getElementById(clickedStringID).style.paddingLeft = "0px"
                document.getElementById(clickedStringID).style.paddingRight = "0px"
                document.getElementById(clickedStringID).style.textWrap = "noWrap"
            }

            if (currentlySaving == false) {
                userStorage.push("n!" + content + "!" + clickedStringID)
                console.log(userStorage)
            }
        }
    } else {
        if (content == "Delete" || content == "0" || content == "PM" || content == "x" || content == "/" || content == "\\" || content == "b" || content == "h" || content == "p" || content == "~") {
            document.getElementById("capoSelector").innerHTML = "Capo: none"
            document.getElementById("noteSelectStringCapo").style.width = "0px"
            capoValue = "none"
            loadTab()
            if (content == "Delete" || content == "0") {
                userStorage[0] = "none"
                console.log(userStorage)
            }
        }

        else if (content != "Close") {
            document.getElementById("capoSelector").innerHTML = "Capo: " + content
            document.getElementById("noteSelectStringCapo").style.width = "calc(" + content + " * (100% / 26.1))"
            capoValue = content
            document.getElementById("tabCapoId").innerHTML = "Capo: " + capoValue

            userStorage[0] = content
            console.log(userStorage)
        }
    }

    if (isLocked == false || content == "Close") {
        toggleNoteSelect(0)
        if (globalCapoState == true) {
            document.getElementById("capoSelector").removeAttribute("style")
            globalCapoState = false
        }
    }
}




/*
var clickedIdDeconstruct1
var clickedIdDeconstruct2
var clickedIdDeconstruct3
var clickedIdDeconstruct4
var clickedIdDeconstruct5
var clickedIdDeconstruct6

var clickedIdReconstruct1
var clickedIdReconstruct2
var clickedIdReconstruct3
*/

var pmTogglable = true
var constructData

function pmToggle() {
    if (pmTogglable == true) {
        //enable toggle
        document.getElementById("pmToggleButton").setAttribute("style", "background-color: rgba(255, 255, 255, 0.533); color: rgb(51, 51, 85); font-weight: 800;")
        pmTogglable = false

        clickedIdDeconstruct1 = lastClickedId1.split("$")[0]
        clickedIdDeconstruct2 = lastClickedId1.split("$")[1]
        clickedIdDeconstruct3 = lastClickedId1.split("$")[2]

        clickedIdDeconstruct1 = parseInt(clickedIdDeconstruct1)
        clickedIdDeconstruct2 = parseInt(clickedIdDeconstruct2)
        clickedIdDeconstruct3 = parseInt(clickedIdDeconstruct3)

        clickedIdReconstruct1 = clickedIdDeconstruct1 + "$" + clickedIdDeconstruct2 + "$" + clickedIdDeconstruct3 + "$" + "-1"

        constructData = "pm!" + clickedIdReconstruct1 + "*"

        console.log("begin: " + clickedIdReconstruct1)

        if (document.getElementById(clickedIdReconstruct1)) {
            if (document.getElementById(clickedIdReconstruct1).innerHTML == "-" || document.getElementById(clickedIdReconstruct1).innerHTML == "pm") {

                document.getElementById("pmToggleButton").removeAttribute("style")
                pmTogglable = true

                //SEARCHING DOWN
                var searchForPm = clickedIdReconstruct1

                searchForPm1 = clickedIdReconstruct1.split("$")[0]
                searchForPm2 = clickedIdReconstruct1.split("$")[1]
                searchForPm3 = clickedIdReconstruct1.split("$")[2]

                searchForPm1 = parseInt(searchForPm1)
                searchForPm2 = parseInt(searchForPm2)
                searchForPm3 = parseInt(searchForPm3)

                tempSearchPm1 = searchForPm3
                tempSearchPm2 = searchForPm2

                while (document.getElementById(searchForPm).innerHTML != "pm") {
                    document.getElementById(searchForPm).innerHTML = "&nbsp;"
                    document.getElementById(searchForPm).removeAttribute("style")
                    searchForPm = searchForPm1 + "$" + tempSearchPm2 + "$" + tempSearchPm1 + "$-1"

                    tempSearchPm1--

                    if (tempSearchPm1 == -1) {
                        tempSearchPm1 = 15
                        tempSearchPm2--
                    }
                }

                document.getElementById(searchForPm).innerHTML = "&nbsp;"

                //SEARCHING UP
                var searchForEnd = clickedIdReconstruct1

                searchForEnd1 = clickedIdReconstruct1.split("$")[0]
                searchForEnd2 = clickedIdReconstruct1.split("$")[1]
                searchForEnd3 = clickedIdReconstruct1.split("$")[2]

                searchForEnd1 = parseInt(searchForEnd1)
                searchForEnd2 = parseInt(searchForEnd2)
                searchForEnd3 = parseInt(searchForEnd3)

                tempSearchEnd1 = searchForEnd3 + 1
                tempSearchEnd2 = searchForEnd2

                if (tempSearchEnd1 == 16) {
                    tempSearchEnd1 = -1
                    tempSearchEnd2++
                }

                console.log("TRYING TO FIND END")

                while (document.getElementById(searchForEnd).innerHTML == "&nbsp;" || document.getElementById(searchForEnd).innerHTML == "-") {

                    if (document.getElementById(searchForEnd)) {
                        document.getElementById(searchForEnd).innerHTML = "&nbsp;"
                    }

                    searchForEnd = searchForEnd1 + "$" + tempSearchEnd2 + "$" + tempSearchEnd1 + "$-1"

                    tempSearchEnd1++

                    if (tempSearchEnd1 == 16) {
                        tempSearchEnd1 = 0
                        tempSearchEnd2++
                    }
                    console.log("LOOKING ID: " + searchForEnd)
                }

                document.getElementById(clickedIdReconstruct1).innerHTML = ""

            } else {
                pmCurrentWidth = document.getElementById(clickedIdReconstruct1).offsetWidth
                document.getElementById(clickedIdReconstruct1).innerHTML = "pm"
                document.getElementById(clickedIdReconstruct1).setAttribute("style", "box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px inset; border-radius: 10px; width: 12.73px; font-size: 0.9em; letter-spacing: -2px; font-kerning: normal; text-align: center; padding-left: 0px; padding-right: 0px;")
            }
        }




    } else if (pmTogglable == false) {
        //disable toggle
        document.getElementById("pmToggleButton").removeAttribute("style")
        pmTogglable = true

        clickedIdDeconstruct4 = lastClickedId1.split("$")[0]
        clickedIdDeconstruct5 = lastClickedId1.split("$")[1]
        clickedIdDeconstruct6 = lastClickedId1.split("$")[2]

        clickedIdDeconstruct4 = parseInt(clickedIdDeconstruct4)
        clickedIdDeconstruct5 = parseInt(clickedIdDeconstruct5)
        clickedIdDeconstruct6 = parseInt(clickedIdDeconstruct6)

        clickedIdReconstruct2 = clickedIdDeconstruct4 + "$" + clickedIdDeconstruct5 + "$" + clickedIdDeconstruct6 + "$-1"

        constructData = constructData + clickedIdReconstruct2

        if (userStorage.includes(constructData) == false) {
            userStorage.push(constructData)
        }
        console.log("end: " + clickedIdReconstruct2)
        document.getElementById(clickedIdReconstruct1).title = clickedIdReconstruct2

        if (document.getElementById(clickedIdReconstruct2)) {
            if (clickedIdReconstruct2 == clickedIdReconstruct1 || document.getElementById(clickedIdReconstruct2).innerHTML == "-") {
                document.getElementById(clickedIdReconstruct2).innerHTML = "&nbsp;"
            } else {
                distanceToFill = clickedIdDeconstruct6 - clickedIdDeconstruct3
                rowDistanceToFill = clickedIdDeconstruct5 - clickedIdDeconstruct2

                rowCompensations = 0

                if (rowDistanceToFill > 0) {
                    rowCompensations = rowDistanceToFill
                }

                if (distanceToFill > 0 || rowCompensations >= 1) {
                    for (x = clickedIdDeconstruct3; x != clickedIdDeconstruct6 + (rowCompensations * 16); x++) {
                        tempId = x
                        if (x >= (rowLineAmount * 2) - 1) {
                            tempId = tempId - 16
                            rowCompensations--

                            if (x == 15 || x == 31 || x == 47) {
                                clickedIdDeconstruct2++
                            }
                        }

                        if (x >= 31) {
                            tempId = tempId - 16
                            rowCompensations--
                        }

                        if (x >= 47) {
                            tempId = tempId - 16
                            rowCompensations--
                        }

                        clickedIdReconstruct3 = clickedIdDeconstruct1 + "$" + clickedIdDeconstruct2 + "$" + (tempId + 1) + "$-1"

                        if (clickedIdReconstruct3.split("$")[1] == lastClickedId1.split("$")[1] && clickedIdReconstruct3.split("$")[2] == lastClickedId1.split("$")[2]) {
                            break
                        }

                        console.log(clickedIdReconstruct3)
                        document.getElementById(clickedIdReconstruct3).innerHTML = "-"
                    }
                }
            }
            document.getElementById(clickedIdReconstruct2).innerHTML = "-"
        }
    }

    console.log("Data: " + constructData)
}



function lockNotes() {
    isLocked = !isLocked

    if (isLocked == true) {
        document.getElementById("stringSettingHolder1").style.backgroundColor = "#fff8"
        document.getElementById("stringSettingHolder1").style.color = "#335"
        document.getElementById("stringSettingHolder1").style.fontWeight = "800"
    }
    else if (isLocked == false) {
        document.getElementById("stringSettingHolder1").style.backgroundColor = null
        document.getElementById("stringSettingHolder1").style.color = null
        document.getElementById("stringSettingHolder1").style.fontWeight = null
    }
}
lockNotes()



var globalCapoState = false

function toggleNoteSelect(open, capo) {
    if (capo == true) {
        globalCapoState = true
        document.getElementById("capoSelector").style.backgroundColor = "#fff8"
        document.getElementById("capoSelector").style.color = "#335"
        document.getElementById("capoSelector").style.fontWeight = "500"
    }

    if (open == 0) {
        document.getElementById("noteSelectArea").style.transform = null
    } else if (open == 1) {
        document.getElementById("noteSelectArea").style.transform = "translateY(0px)"
    }

}

var lastClickedId1

function rowLineClick(clickedId) {
    globalCapoState = false
    document.getElementById("capoSelector").removeAttribute("style")

    toggleNoteSelect(1)
    console.log(clickedId)

    if (document.getElementById(lastClickedId1)) {
        document.getElementById(lastClickedId1).style.boxShadow = "inset #fff 0px 0px 0px 0px"
        document.getElementById(lastClickedId1).style.borderRadius = "10px"
    }
    document.getElementById(clickedId).style.boxShadow = "inset #6bf 0px 0px 0px 2px"
    document.getElementById(clickedId).style.borderRadius = "10px"

    lastClickedId1 = clickedId
    clickedStringID = clickedId
}



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
    userStorage[2] = currentID
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

    if (currentID != userStorage[3]) {
        if (currentID == "shape1") {
            if (currentScale == "scale1") {
                scaleSelect("scale3")
                loadTab("scale3", "temp", "temp")
            } else
                if (currentScale == "scale2") {
                    scaleSelect("scale4")
                    loadTab("scale4", "temp", "temp")
                } else
                    if (currentScale == "scale3") {
                        scaleSelect("scale5")
                        loadTab("scale5", "temp", "temp")
                    } else
                        if (currentScale == "scale4") {
                            scaleSelect("scale6")
                            loadTab("scale6", "temp", "temp")
                        } else
                            if (currentScale == "scale5") {
                                scaleSelect("scale7")
                                loadTab("scale7", "temp", "temp")
                            } else
                                if (currentScale == "scale6") {
                                    scaleSelect("scale8")
                                    loadTab("scale8", "temp", "temp")
                                } else
                                    if (currentScale == "scale7") {
                                        scaleSelect("scale9")
                                        loadTab("scale9", "temp", "temp")
                                    } else
                                        if (currentScale == "scale8") {
                                            scaleSelect("scale10")
                                            loadTab("scale10", "temp", "temp")
                                        } else
                                            if (currentScale == "scale9") {
                                                scaleSelect("scale11")
                                                loadTab("scale11", "temp", "temp")
                                            } else
                                                if (currentScale == "scale10") {
                                                    scaleSelect("scale12")
                                                    loadTab("scale12", "temp", "temp")
                                                } else
                                                    if (currentScale == "scale11") {
                                                        scaleSelect("scale1")
                                                        loadTab("scale9", "temp", "temp")
                                                    } else
                                                        if (currentScale == "scale12") {
                                                            scaleSelect("scale2")
                                                            loadTab("scale10", "temp", "temp")
                                                        }
            recommendedShape = "shape1"

        } else if (currentID == "shape2") {
            if (currentScale == "scale1") {
                scaleSelect("scale11")
                loadTab("scale11", "temp", "temp")
            } else
                if (currentScale == "scale2") {
                    scaleSelect("scale12")
                    loadTab("scale12", "temp", "temp")
                } else
                    if (currentScale == "scale3") {
                        scaleSelect("scale1")
                        loadTab("scale1", "temp", "temp")
                    } else
                        if (currentScale == "scale4") {
                            scaleSelect("scale2")
                            loadTab("scale2", "temp", "temp")
                        } else
                            if (currentScale == "scale5") {
                                scaleSelect("scale3")
                                loadTab("scale3", "temp", "temp")
                            } else
                                if (currentScale == "scale6") {
                                    scaleSelect("scale4")
                                    loadTab("scale4", "temp", "temp")
                                } else
                                    if (currentScale == "scale7") {
                                        scaleSelect("scale5")
                                        loadTab("scale5", "temp", "temp")
                                    } else
                                        if (currentScale == "scale8") {
                                            scaleSelect("scale6")
                                            loadTab("scale6", "temp", "temp")
                                        } else
                                            if (currentScale == "scale9") {
                                                scaleSelect("scale7")
                                                loadTab("scale7", "temp", "temp")
                                            } else
                                                if (currentScale == "scale10") {
                                                    scaleSelect("scale8")
                                                    loadTab("scale8", "temp", "temp")
                                                } else
                                                    if (currentScale == "scale11") {
                                                        scaleSelect("scale9")
                                                        loadTab("scale9", "temp", "temp")
                                                    } else
                                                        if (currentScale == "scale12") {
                                                            scaleSelect("scale10")
                                                            loadTab("scale10", "temp", "temp")
                                                        }
            recommendedShape = "shape2"
        }
        userStorage[3] = recommendedShape
    }
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
    reloadStrings()
}

var currentString = "string3"

function stringSelect(currentID) {
    document.getElementById(currentString).removeAttribute("class")
    document.getElementById(currentID).setAttribute("class", "currentScale")

    document.getElementById("selectedString").innerHTML = document.getElementById(currentID).innerHTML

    currentString = currentID
    userStorage[4] = currentID
}



function increaseRow() {
    if (currentlySaving == false) {
        rowAmount++
        loadTab()

        userStorage[5] = rowAmount
        foundNotes = [];
    }
}

function decreaseRow() {
    if (currentlySaving == false) {
        rowAmount--
        if (rowAmount < 1) {
            rowAmount = 1
        }
        loadTab()

        userStorage[5] = rowAmount
        foundNotes = [];
    }
}




var timeSig = 0

function timeSigSelect() {
    timeSig++
    userStorage[1] = timeSig

    if (timeSig == 0) {
        document.getElementById("timeSig").innerHTML = "Time signature: 4/4"
        rowLineAmount = 8
        timesigValue = "4/4"
    }
    else if (timeSig == 1) {
        document.getElementById("timeSig").innerHTML = "Time signature: 3/4"
        rowLineAmount = 6
        timesigValue = "3/4"
    }
    else if (timeSig == 2) {
        document.getElementById("timeSig").innerHTML = "Time signature: 5/4"
        rowLineAmount = 10
        timesigValue = "5/4"
    }
    else if (timeSig == 3) {
        document.getElementById("timeSig").innerHTML = "Time signature: 7/4"
        rowLineAmount = 7
        timesigValue = "7/4"
    }
    else if (timeSig == 4) {
        timeSig = -1
        timeSigSelect()
    }

    loadTab()
}






//USING SAVED DATA FOUND AT LINE 1

/*
 
tempStorage[x]
 
[0] = capo
[1] = time signature
[2] = string letter
[3] = string scale
[4] = string amount
[5] = row amount
[6+] = notes
 
*/

async function loadNotes() {
    currentlySaving = true
    globalCapoState = false

    await new Promise(resolve => setTimeout(resolve, 100));
    // load in all the user written notes
    for (l = 6; l < userStorage.length; l++) {

        //IF FOUND IS NOTE
        if (userStorage[l].split("!")[0] == "n") {
            console.log("FOUND A NOTE")

            tempNote = userStorage[l].split("!")[1]
            tempId = userStorage[l].split("!")[2]

            lastClickedId1 = tempId
            clickedStringID = tempId

            console.log(tempNote, tempId)
            noteSelect(tempNote)
        }

        //IF FOUND IS PM
        if (userStorage[l].split("!")[0] == "pm") {
            console.log("FOUND A PALM MUTE")

            if (!foundNotes.includes(userStorage[l].split("!")[1])) {

                foundNotes.push(userStorage[l].split("!")[1])

                tempNote = userStorage[l].split("!")[1]
                tempId1 = tempNote.split("*")[0]
                tempId2 = tempNote.split("*")[1]

                lastClickedId1 = tempId1
                clickedStringID = tempId1

                pmToggle()

                lastClickedId1 = tempId2
                clickedStringID = tempId2

                pmToggle()
            }
        }
    }
    await new Promise(resolve => setTimeout(resolve, 100));
    currentlySaving = false
}

async function loadSave() {
    noteSelect("Close")
    currentlySaving = true
    foundNotes = [];

    await new Promise(resolve => setTimeout(resolve, 500));
    foundNotes = [];

    userStorage = localStorage.getItem("userStorage").split(",")
    // update capo
    globalCapoState = true
    noteSelect(userStorage[0])

    // update time signature
    timeSig = userStorage[1] - 1
    timeSigSelect()

    // update string data
    scaleSelect(userStorage[2])
    shapeSelect(userStorage[3])
    stringSelect(userStorage[4])
    loadTab(userStorage[2], userStorage[3], userStorage[4])

    // update row amount
    rowAmount = userStorage[5]
    loadTab()


    // reset UI
    await new Promise(resolve => setTimeout(resolve, 100));
    globalCapoState = false
    loadNotes()

    currentlySaving = false
}
loadSave()



function saveProject() {
    localStorage.setItem("userStorage", userStorage)
    console.log(localStorage.getItem("userStorage"))

    loadSave()
}