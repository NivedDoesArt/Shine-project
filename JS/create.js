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
        userStorage = ['none', '0', 'scale8', 'shape1', 'string3', '25', 'pm!4$0$0$-1*4$2$15$-1', 'pm!5$0$0$-1*5$2$15$-1', 'pm!8$0$0$-1*8$2$15$-1', 'pm!9$0$0$-1*9$2$15$-1', 'pm!10$0$0$-1*10$2$15$-1', 'pm!11$0$0$-1*11$2$15$-1', 'pm!17$3$0$-1*17$3$12$-1', 'n!7!11$1$8$4', 'n!!15$3$15$3', 'n!!15$3$15$4', 'n!3!6$0$4$5', 'n!3!17$1$12$4', 'n!7!10$1$8$4', 'n!3!3$2$12$4', 'n!3!14$0$14$5', 'n!2!3$1$14$4', 'n!3!4$2$10$4', 'n!5!14$3$4$3', 'n!4!15$1$14$3', 'n!5!5$0$10$4', 'n!2!3$1$10$4', 'n!3!12$0$4$5', 'n!5!4$1$10$5', 'n!5!10$2$10$3', 'n!5!14$3$12$3', 'n!5!5$3$6$2', 'n!4!3$1$12$3', 'n!4!1$1$10$3', 'n!3!2$3$12$4', 'n!4!17$0$12$3', 'n!4!14$1$0$3', 'n!5!7$3$4$5', 'n!5!8$2$12$3', 'n!4!14$1$8$3', 'n!7!5$1$8$4', 'n!3!8$2$0$4', 'n!5!15$3$12$3', 'n!5!8$2$2$3', 'n!5!3$0$0$4', 'n!5!6$3$0$3', 'n!3!5$0$10$5', 'n!7!10$1$12$4', 'n!5!17$3$2$4', 'n!5!4$1$14$5', 'n!5!5$0$0$4', 'n!5!15$2$8$3', 'n!5!4$2$14$3', 'n!5!11$1$4$5', 'n!5!13$2$10$3', 'n!5!3$3$4$5', 'n!7!9$1$4$4', 'n!5!6$2$4$3', 'n!3!8$0$2$5', 'n!5!0$3$6$3', 'n!4!6$1$10$3', 'n!3!8$3$8$3', 'n!3!6$2$14$4', 'n!3!15$2$14$4', 'n!5!5$0$12$4', 'n!2!17$0$4$4', 'n!3!5$0$6$5', 'n!5!14$2$12$3', 'n!5!12$2$10$3', 'n!x!9$3$0$5', 'n!4!14$1$14$3', 'n!7!9$1$2$4', 'n!5!9$1$10$5', 'n!5!13$3$0$5', 'n!5!2$3$12$3', 'n!5!17$3$14$4', 'n!3!11$2$6$4', 'n!5!5$2$0$3', 'n!5!9$2$12$3', 'n!5!8$2$6$3', 'n!x!4$3$0$4', 'n!5!9$0$2$4', 'n!3!14$3$10$4', 'n!4!15$1$12$3', 'n!3!9$0$0$5', 'n!5!13$3$12$3', 'n!7!3$3$6$4', 'n!7!8$1$0$4', 'n!5!12$2$12$3', 'n!5!0$1$2$4', 'n!5!14$2$4$3', 'n!3!10$2$2$4', 'n!3!11$0$12$5', 'n!1!4$3$8$4', 'n!3!4$2$2$4', 'n!3!6$0$0$5', 'n!12!16$1$8$1', 'n!7!1$3$2$3', 'n!3!7$0$10$5', 'n!5!0$3$12$3', 'n!7!8$1$12$4', 'n!3!2$2$14$4', 'n!3!3$3$14$4', 'n!3!6$2$12$4', 'n!5!12$0$12$4', 'n!5!13$0$12$4', 'n!4!6$1$8$3', 'n!5!10$0$0$4', 'n!2!14$1$8$4', 'n!10!9$3$12$2', 'n!5!11$1$14$5', 'n!3!6$0$14$5', 'n!5!10$1$8$5', 'n!3!9$2$10$4', 'n!5!2$0$14$4', 'n!3!11$0$14$5', 'n!7!8$1$4$4', 'n!2!3$1$0$4', 'n!3!17$3$6$5', 'n!3!4$0$6$5', 'n!3!15$0$12$5', 'n!5!13$2$0$3', 'n!\!16$3$9$0', 'n!5!15$3$4$5', 'n!3!4$2$14$4', 'n!5!13$3$4$5', 'n!5!9$0$12$4', 'n!5!10$1$6$5', 'n!1!4$3$12$5', 'n!5!8$2$0$3', 'n!7!11$1$12$4', 'n!0!17$2$0$4', 'n!3!13$3$14$4', 'n!3!6$3$14$4', 'n!5!11$1$8$5', 'n!3!6$2$10$4', 'n!3!17$3$10$5', 'n!3!12$0$10$5', 'n!5!11$1$2$5', 'n!4!3$1$14$3', 'n!3!13$0$8$5', 'n!4!15$1$10$3', 'n!3!6$2$4$4', 'n!5!1$1$12$3', 'n!5!5$2$8$3', 'n!3!5$2$12$4', 'n!5!12$3$10$3', 'n!5!0$2$14$3', 'n!5!4$0$2$4', 'n!5!5$0$14$4', 'n!5!1$2$6$3', 'n!3!4$0$10$5', 'n!5!5$0$8$4', 'n!5!1$0$4$3', 'n!5!14$3$0$3', 'n!5!3$0$12$4', 'n!5!4$1$12$5', 'n!3!4$2$0$4', 'n!3!4$0$12$5', 'n!3!14$3$8$4', 'n!2!2$1$14$4', 'n!5!11$3$8$3', 'n!3!5$3$6$3', 'n!5!6$0$12$4', 'n!3!2$2$8$4', 'n!5!4$1$0$5', 'n!3!3$0$8$5', 'n!5!7$3$8$3', 'n!5!7$2$4$3', 'n!3!8$2$12$4', 'n!5!0$2$4$3', 'n!3!11$3$8$4', 'n!5!2$3$14$3', 'n!5!6$2$0$3', 'n!5!7$0$4$4', 'n!7!11$1$0$4', 'n!3!2$0$4$5', 'n!5!7$2$14$3', 'n!5!12$0$14$4', 'n!12!16$1$8$2', 'n!5!9$0$10$4', 'n!5!1$1$0$5', 'n!3!7$0$4$5', 'n!5!9$1$14$5', 'n!7!8$1$6$4', 'n!x!10$3$6$4', 'n!7!9$1$10$4', 'n!11!9$3$10$1', 'n!5!1$0$6$3', 'n!3!9$2$6$4', 'n!x!8$3$6$4', 'n!7!10$1$0$4', 'n!5!15$0$12$4', 'n!3!11$2$12$4', 'n!3!9$0$10$5', 'n!5!11$3$10$3', 'n!10!9$3$8$1', 'n!5!12$2$8$3', 'n!2!17$2$12$3', 'n!5!11$3$6$2', 'n!7!13$3$0$4', 'n!3!8$2$14$4', 'n!5!11$0$14$4', 'n!3!13$2$14$4', 'n!4!14$1$12$3', 'n!7!7$3$6$4', 'n!3!9$0$2$5', 'n!3!10$2$4$4', 'n!4!6$1$0$3', 'n!2!6$1$12$4', 'n!3!12$0$14$5', 'n!5!14$3$10$3', 'n!4!1$2$8$3', 'n!7!11$1$6$4', 'n!2!2$1$12$4', 'n!5!2$3$8$3', 'n!0!17$2$4$4', 'n!3!4$0$14$5', 'n!8!9$3$14$2', 'n!3!12$3$8$4', 'n!3!10$3$2$3', 'n!5!11$3$14$3', 'n!3!8$2$4$4', 'n!7!10$1$6$4', 'n!8!9$3$6$1', 'n!5!5$3$4$2', 'n!3!6$0$10$5', 'n!5!0$2$6$3', 'n!4!3$1$4$3', 'n!4!2$1$10$3', 'n!5!13$2$4$3', 'n!7!4$1$12$4', 'n!3!15$2$10$4', 'n!7!11$1$10$4', 'n!5!5$2$6$3', 'n!5!5$0$2$4', 'n!7!9$1$14$4', 'n!5!8$1$10$5', 'n!3!10$3$12$4', 'n!3!14$0$10$5', 'n!5!7$0$14$4', 'n!5!9$2$6$3', 'n!3!6$2$0$4', 'n!2!13$1$10$4', 'n!5!2$2$8$3', 'n!5!8$0$12$4', 'n!3!2$0$0$5', 'n!4!17$0$8$3', 'n!5!1$3$6$3', 'n!5!11$2$2$3', 'n!5!13$0$8$4', 'n!5!12$0$0$4', 'n!5!8$2$10$3', 'n!5!2$0$4$4', 'n!3!5$0$4$5', 'n!4!6$1$12$3', 'n!7!3$3$4$4', 'n!3!11$2$2$4', 'n!7!4$1$0$4', 'n!3!3$2$14$4', 'n!5!8$1$4$5', 'n!5!1$1$2$5', 'n!3!14$3$14$4', 'n!5!5$3$0$2', 'n!5!4$0$6$4', 'n!5!10$0$8$4', 'n!3!7$2$4$4', 'n!7!15$3$4$4', 'n!3!17$1$0$4', 'n!5!5$1$14$5', 'n!3!5$2$0$4', 'n!3!14$3$12$4', 'n!2!17$0$12$4', 'n!4!3$1$8$3', 'n!4!0$3$10$3', 'n!3!8$0$6$5', 'n!3!17$3$12$5', 'n!5!5$1$8$5', 'n!3!2$3$10$4', 'n!5!4$0$8$4', 'n!3!6$3$0$4', 'n!5!17$3$4$4', 'n!5!4$0$12$4', 'n!3!7$2$12$4', 'n!3!2$3$14$4', 'n!3!11$0$0$5', 'n!\\!16$1$9$0', 'n!\\!16$1$9$2', 'n!\\!16$3$9$1', 'n!4!15$1$4$3', 'n!3!4$0$8$5', 'n!5!7$0$0$4', 'n!5!4$1$2$5', 'n!3!14$2$0$4', 'n!2!13$1$12$4', 'n!2!2$1$10$4', 'n!4!15$1$0$3', 'n!4!0$2$10$3', 'n!5!3$3$0$5', 'n!5!13$0$4$4', 'n!5!15$3$6$5', 'n!3!4$0$4$5', 'n!5!12$0$8$4', 'n!3!8$0$4$5', 'n!3!0$0$0$5', 'n!5!6$0$8$4', 'n!3!5$3$12$4', 'n!4!2$1$14$3', 'n!3!11$0$10$5', 'n!1!10$3$8$4', 'n!3!7$0$14$5', 'n!2!6$1$14$4', 'n!5!5$1$6$5', 'n!5!7$3$12$3', 'n!3!5$0$2$5', 'n!4!2$1$12$3', 'n!4!7$1$12$3', 'n!5!9$2$8$3', 'n!5!1$1$6$3', 'n!5!3$0$4$4', 'n!12!16$3$0$0', 'n!5!9$2$14$3', 'n!7!5$1$2$4', 'n!5!8$0$4$4', 'n!5!11$0$2$4', 'n!4!0$0$8$3', 'n!3!8$0$8$5', 'n!5!10$2$2$3', 'n!5!2$0$12$4', 'n!11!9$3$10$2', 'n!3!14$2$14$4', 'n!4!7$1$4$3', 'n!2!12$1$4$4', 'n!5!10$2$6$3', 'n!5!7$2$12$3', 'n!3!12$2$8$4', 'n!5!5$1$0$5', 'n!3!4$2$8$4', 'n!5!15$0$14$4', 'n!3!7$0$12$5', 'n!14!16$3$2$2', 'n!3!11$3$14$4', 'n!3!13$3$12$4', 'n!3!8$3$12$4', 'n!4!14$1$10$3', 'n!3!4$2$6$4', 'n!5!11$0$8$4', 'n!5!13$3$8$3', 'n!7!7$3$0$4', 'n!2!12$1$14$4', 'n!5!15$0$8$4', 'n!2!17$2$0$3', 'n!5!5$1$2$5', 'n!3!11$0$6$5', 'n!5!4$2$10$3', 'n!5!6$2$8$3', 'n!5!4$2$12$3', 'n!2!7$1$4$4', 'n!5!17$3$10$4', 'n!5!8$0$14$4', 'n!5!3$3$8$3', 'n!5!10$0$2$4', 'n!5!10$2$14$3', 'n!3!5$2$14$4', 'n!5!12$3$12$3', 'n!5!9$2$10$3', 'n!5!5$3$8$3', 'n!5!6$2$12$3', 'n!3!1$2$2$4', 'n!3!12$2$4$4', 'n!3!11$0$4$5', 'n!5!6$2$14$3', 'n!7!5$1$4$4', 'n!3!12$2$12$4', 'n!5!9$2$4$3', 'n!3!2$0$14$5', 'n!10!9$3$12$1', 'n!3!17$3$14$5', 'n!5!5$3$14$3', 'n!5!0$2$12$3', 'n!5!13$3$14$3', 'n!3!5$0$12$5', 'n!3!5$3$10$4', 'n!5!5$3$12$3', 'n!3!10$0$4$5', 'n!3!14$2$4$4', 'n!3!11$3$12$4', 'n!5!8$1$8$5', 'n!7!15$3$6$4', 'n!3!14$0$8$5', 'n!3!15$0$4$5', 'n!5!8$1$6$5', 'n!5!11$2$12$3', 'n!5!10$2$0$3', 'n!2!14$1$10$4', 'n!3!15$0$0$5', 'n!5!17$1$4$3', 'n!3!17$3$8$5', 'n!5!6$3$10$3', 'n!5!2$3$0$3', 'n!2!7$1$8$4', 'n!4!2$1$8$3', 'n!4!1$3$8$3', 'n!3!14$3$4$4', 'n!5!5$2$4$3', 'n!3!12$2$10$4', 'n!5!2$3$10$3', 'n!3!5$2$6$4', 'n!3!2$0$10$5', 'n!5!0$0$6$3', 'n!3!0$0$2$5', 'n!5!14$0$14$4', 'n!4!13$1$10$3', 'n!3!10$0$6$5', 'n!5!3$0$14$4', 'n!3!8$2$10$4', 'n!4!12$1$14$3', 'n!3!5$3$8$4', 'n!5!13$2$8$3', 'n!4!12$1$4$3', 'n!5!11$0$12$4', 'n!3!15$2$12$4', 'n!5!8$0$0$4', 'n!12!16$3$2$1', 'n!4!3$1$0$3', 'n!3!11$0$8$5', 'n!5!10$0$12$4', 'n!5!10$1$4$5', 'n!5!4$1$8$5', 'n!5!0$1$4$3', 'n!5!8$1$12$5', 'n!5!3$0$10$4', 'n!3!15$3$12$4', 'n!10!9$3$4$1', 'n!5!8$1$2$5', 'n!5!12$0$10$4', 'n!3!5$3$0$3', 'n!3!11$2$10$4', 'n!5!15$2$14$3', 'n!7!9$1$12$4', 'n!5!3$2$10$3', 'n!7!10$1$14$4', 'n!7!3$3$0$4', 'n!5!0$0$12$3', 'n!5!17$1$0$3', 'n!7!13$3$6$4', 'n!5!4$0$14$4', 'n!3!2$3$8$4', 'n!8!9$3$6$2', 'n!3!4$0$2$5', 'n!3!10$2$0$4', 'n!8!9$3$14$1', 'n!3!18$0$2$5', 'n!5!18$0$6$3', 'n!4!18$0$10$3', 'n!5!18$0$14$3', 'n!5!18$1$2$5', 'n!5!18$1$6$3', 'n!4!18$1$10$3', 'n!5!18$1$14$3', 'n!3!18$2$2$4', 'n!5!18$2$6$3', 'n!4!18$2$10$3', 'n!5!18$2$14$3', 'n!7!18$3$2$3', 'n!5!18$3$6$3', 'n!4!18$3$10$3', 'n!5!18$3$14$3', 'n!3!19$0$2$5', 'n!5!19$1$2$5', 'n!3!19$2$2$4', 'n!7!19$3$2$3', 'n!5!19$0$6$3', 'n!4!19$0$10$3', 'n!5!19$0$14$3', 'n!5!19$1$6$3', 'n!4!19$1$10$3', 'n!5!19$1$14$3', 'n!5!19$2$6$3', 'n!4!19$2$10$3', 'n!5!19$2$14$3', 'n!5!19$3$6$3', 'n!4!19$3$10$3', 'n!5!19$3$14$3', 'n!b!19$3$1$2', 'n!14!20$0$0$2', 'n!16!20$0$2$2', 'n!12!20$2$0$2', 'n!12!20$3$4$3', 'n!12!20$3$12$2', 'n!b!21$0$1$2', 'n!14!21$1$0$2', 'n!14!21$3$0$3', 'n!14!21$3$8$3', 'n!17!22$0$0$0', 'n!19!22$0$2$0', 'n!15!22$2$0$0', 'n!15!22$3$4$1', 'n!15!22$3$12$0', 'n!b!23$0$1$0', 'n!17!23$1$0$0', 'n!17!23$3$0$1', 'n!16!23$3$8$2', 'n!16!24$0$0$2', 'n!\\!24$3$15$2', 'n!5!3$2$0$3', 'n!3!4$3$2$3', 'n!3!8$0$14$5', 'n!5!0$3$4$3', 'n!3!10$0$8$5', 'n!2!7$1$10$4', 'n!7!7$3$4$4', 'n!3!7$3$8$4', 'n!3!2$2$0$4', 'n!5!4$1$4$5', 'n!3!9$2$0$4', 'n!3!7$0$8$5', 'n!4!15$1$8$3', 'n!3!3$2$8$4', 'n!5!6$3$12$3', 'n!3!12$0$8$5', 'n!5!8$0$8$4', 'n!2!6$1$4$4', 'n!7!11$1$14$4', 'n!3!10$2$12$4', 'n!2!15$1$4$4', 'n!5!9$0$0$4', 'n!5!13$3$6$5', 'n!4!13$1$0$3', 'n!3!12$3$4$4', 'n!1!10$3$12$5', 'n!7!4$1$4$4', 'n!4!7$1$8$3', 'n!3!5$0$0$5', 'n!3!10$0$14$5', 'n!3!3$3$12$4', 'n!3!0$2$0$4', 'n!5!11$3$2$2', 'n!3!9$2$8$4', 'n!3!9$2$2$4', 'n!5!10$1$10$5', 'n!5!12$2$14$3', 'n!5!0$1$6$3', 'n!3!8$2$8$4', 'n!2!14$1$4$4', 'n!3!11$0$2$5', 'n!5!13$0$14$4', 'n!7!8$1$2$4', 'n!3!3$2$0$4', 'n!3!12$2$0$4', 'n!5!4$1$6$5', 'n!5!15$0$4$4', 'n!3!10$0$10$5', 'n!5!10$0$4$4', 'n!5!7$3$6$5', 'n!5!1$3$4$3', 'n!5!14$2$8$3', 'n!3!3$0$0$5', 'n!2!14$1$14$4', 'n!\\!16$1$9$1', 'n!\\!16$3$9$2', 'n!3!17$3$4$5', 'n!3!15$2$0$4', 'n!5!14$0$8$4', 'n!4!6$1$4$3', 'n!7!10$1$10$4', 'n!4!17$0$0$3', 'n!3!4$2$4$4', 'n!5!8$3$2$2', 'n!2!15$1$10$4', 'n!5!14$2$14$3', 'n!5!3$2$4$3', 'n!3!11$3$6$3', 'n!3!11$3$4$3', 'n!4!13$1$12$3', 'n!5!8$2$4$3', 'n!3!2$2$12$4', 'n!4!13$1$14$3', 'n!5!11$1$0$5', 'n!3!5$3$4$3', 'n!2!3$1$12$4', 'n!5!4$2$6$3', 'n!3!5$0$8$5', 'n!3!7$2$14$4', 'n!5!2$0$8$4', 'n!3!3$2$4$4', 'n!2!7$1$0$4', 'n!5!1$2$14$3', 'n!2!12$1$10$4', 'n!x!8$3$0$4', 'n!4!3$1$10$3', 'n!2!13$1$14$4', 'n!3!2$3$4$4', 'n!5!6$2$10$3', 'n!5!14$3$14$3', 'n!2!3$1$8$4', 'n!5!12$3$4$3', 'n!3!11$3$10$4', 'n!3!1$2$0$4', 'n!7!4$1$2$4', 'n!7!5$1$6$4', 'n!5!11$2$4$3', 'n!5!10$2$4$3', 'n!3!10$0$12$5', 'n!5!14$0$0$4', 'n!10!9$3$2$1', 'n!5!9$0$6$4', 'n!5!11$1$6$5', 'n!5!9$0$4$4', 'n!2!12$1$8$4', 'n!3!8$0$0$5', 'n!3!3$3$8$4', 'n!2!17$0$8$4', 'n!5!3$3$12$3', 'n!3!15$3$8$4', 'n!3!4$0$0$5', 'n!5!6$0$4$4', 'n!5!2$2$14$3', 'n!5!0$1$0$4', 'n!5!11$1$12$5', 'n!5!2$2$4$3', 'n!3!6$3$10$4', 'n!5!11$3$12$3', 'n!12!16$1$8$0', 'n!2!13$1$4$4', 'n!4!1$1$8$3', 'n!3!10$3$2$4', 'n!2!2$1$8$4', 'n!2!7$1$14$4', 'n!0!17$2$12$4', 'n!10!9$3$8$2', 'n!5!4$3$2$2', 'n!5!14$2$10$3', 'n!5!12$3$14$3', 'n!5!3$0$8$4', 'n!3!3$0$12$5', 'n!4!1$2$10$3', 'n!3!8$3$2$3', 'n!5!4$2$4$3', 'n!3!13$0$12$5', 'n!7!11$1$2$4', 'n!12!16$3$8$1', 'n!3!8$2$6$4', 'n!5!14$0$10$4', 'n!5!14$2$0$3', 'n!5!15$0$0$4', 'n!5!12$3$8$3', 'n!5!11$1$10$5', 'n!4!12$1$12$3', 'n!5!2$0$10$4', 'n!5!11$0$0$4', 'n!7!8$1$14$4', 'n!5!2$2$10$3', 'n!5!11$2$8$3', 'n!5!10$3$2$2', 'n!3!15$2$8$4', 'n!5!2$3$4$3', 'n!7!9$1$8$4', 'n!5!10$1$12$5', 'n!3!3$0$10$5', 'n!5!3$2$12$3', 'n!3!8$3$2$4', 'n!5!0$3$14$3', 'n!3!8$0$10$5', 'n!5!0$0$4$3', 'n!3!12$0$12$5', 'n!4!13$1$4$3', 'n!5!8$0$10$4', 'n!5!1$0$12$3', 'n!4!12$1$0$3', 'n!5!11$2$0$3', 'n!3!4$3$8$3', 'n!5!0$1$12$3', 'n!5!1$0$14$3', 'n!5!5$3$10$3', 'n!5!9$1$12$5', 'n!3!7$2$8$4', 'n!3!9$0$14$5', 'n!5!13$2$12$3', 'n!3!11$3$0$3', 'n!2!15$1$8$4', 'n!5!9$1$4$5', 'n!5!6$0$10$4', 'n!7!4$1$6$4', 'n!5!8$2$14$3', 'n!3!12$0$0$5', 'n!5!2$2$12$3', 'n!5!1$2$12$3', 'n!5!6$0$14$4', 'n!5!15$2$10$3', 'n!3!5$3$2$3', 'n!5!6$3$8$3', 'n!7!4$1$14$4', 'n!3!15$2$4$4', 'n!5!15$0$10$4', 'n!5!14$0$4$4', 'n!2!6$1$0$4', 'n!5!9$1$8$5', 'n!3!15$0$14$5', 'n!4!17$0$4$3', 'n!5!5$0$6$4', 'n!3!8$2$2$4', 'n!3!0$2$2$4', 'n!3!4$2$12$4', 'n!4!12$1$10$3', 'n!3!3$2$10$4', 'n!3!15$3$14$4', 'n!3!7$3$14$4', 'n!5!4$0$10$4', 'n!3!12$2$14$4', 'n!5!4$0$4$4', 'n!4!0$1$10$3', 'n!3!9$2$4$4', 'n!5!6$3$4$3', 'n!3!14$2$10$4', 'n!3!9$2$12$4', 'n!12!16$1$0$2', 'n!5!4$0$0$4', 'n!x!4$3$6$4', 'n!5!13$0$0$4', 'n!5!7$2$10$3', 'n!3!6$0$8$5', 'n!7!9$1$0$4', 'n!3!18$0$0$5', 'n!4!18$0$8$3', 'n!5!18$1$0$5', 'n!4!18$1$8$3', 'n!3!18$2$0$4', 'n!4!18$2$8$3', 'n!7!18$3$0$3', 'n!4!18$3$8$3', 'n!3!19$0$0$5', 'n!3!19$2$0$4', 'n!5!19$0$4$3', 'n!5!19$0$12$3', 'n!4!19$1$8$3', 'n!5!19$2$4$3', 'n!5!19$2$12$3', 'n!4!19$3$8$3', 'n!14!19$3$0$2', 'n!b!20$0$1$2', 'n!14!20$3$0$3', 'n!14!21$0$0$2', 'n!12!21$2$0$2', 'n!12!21$3$12$2', 'n!17!22$1$0$0', 'n!17!22$3$8$1', 'n!19!23$0$2$0', 'n!15!23$3$4$1', 'n!16!24$3$14$2', 'n!4!0$0$10$3', 'n!3!12$3$14$4', 'n!0!17$2$8$4', 'n!3!17$3$2$5', 'n!5!7$0$8$4', 'n!4!7$1$10$3', 'n!5!5$2$2$3', 'n!2!15$1$14$4', 'n!5!15$3$8$3', 'n!7!5$1$12$4', 'n!3!10$3$8$3', 'n!3!11$3$2$3', 'n!5!17$1$12$3', 'n!5!12$3$0$3', 'n!5!10$1$14$5', 'n!3!13$3$8$4', 'n!5!8$0$6$4', 'n!3!6$3$4$4', 'n!b!9$3$11$2', 'n!2!15$1$0$4', 'n!3!10$2$14$4', 'n!3!10$2$8$4', 'n!3!13$2$0$4', 'n!3!10$0$0$5', 'n!3!6$3$8$4', 'n!5!15$2$12$3', 'n!10!9$3$2$2', 'n!5!7$3$14$3', 'n!3!9$0$12$5', 'n!5!3$3$14$3', 'n!5!4$2$8$3', 'n!5!0$0$14$3', 'n!2!6$1$8$4', 'n!5!3$2$14$3', 'n!5!0$1$14$3', 'n!3!17$1$8$4', 'n!7!4$1$10$4', 'n!3!10$2$6$4', 'n!3!13$0$4$5', 'n!5!3$3$6$5', 'n!1!8$3$8$4', 'n!5!9$2$2$3', 'n!3!6$3$12$4', 'n!3!15$0$8$5', 'n!3!13$2$8$4', 'n!4!2$1$0$3', 'n!3!11$2$0$4', 'n!12!16$3$2$0', 'n!4!6$1$14$3', 'n!3!13$0$0$5', 'n!5!11$3$4$2', 'n!5!11$3$0$2', 'n!4!1$0$10$3', 'n!7!8$1$10$4', 'n!3!3$0$4$5', 'n!3!7$0$0$5', 'n!b!9$3$9$2', 'n!3!11$2$8$4', 'n!3!1$0$0$5', 'n!5!11$0$6$4', 'n!4!1$0$8$3', 'n!2!13$1$8$4', 'n!2!15$1$12$4', 'n!3!12$3$0$4', 'n!3!6$2$8$4', 'n!7!9$1$6$4', 'n!5!1$3$14$3', 'n!5!17$3$0$4', 'n!7!4$1$8$4', 'n!7!10$1$2$4', 'n!7!1$3$0$3', 'n!4!0$1$8$3', 'n!1!8$3$12$5', 'n!3!13$2$4$4', 'n!3!2$3$0$4', 'n!5!6$3$14$3', 'n!5!7$2$8$3', 'n!3!13$2$10$4', 'n!7!13$3$4$4', 'n!3!9$0$4$5', 'n!3!2$0$12$5', 'n!5!8$0$2$4', 'n!5!5$1$4$5', 'n!3!13$0$14$5', 'n!5!10$1$2$5', 'n!3!3$0$14$5', 'n!3!5$2$2$4', 'n!5!9$1$6$5', 'n!3!5$0$14$5', 'n!5!1$3$12$3', 'n!5!15$2$4$3', 'n!7!11$1$4$4', 'n!4!0$2$8$3', 'n!7!0$3$0$3', 'n!5!9$0$14$4', 'n!5!10$2$8$3', 'n!3!14$2$8$4', 'n!5!14$3$8$3', 'n!2!12$1$0$4', 'n!5!7$2$0$3', 'n!5!8$2$8$3', 'n!5!9$2$0$3', 'n!12!16$1$0$1', 'n!5!15$3$0$5', 'n!5!9$0$8$4', 'n!3!13$2$12$4', 'n!3!14$0$12$5', 'n!2!6$1$10$4', 'n!2!13$1$0$4', 'n!5!18$0$12$3', 'n!5!18$1$12$3', 'n!5!18$2$12$3', 'n!5!18$3$12$3', 'n!7!19$3$0$3', 'n!5!19$1$4$3', 'n!4!19$2$8$3', 'n!5!19$3$12$3', 'n!14!20$1$0$2', 'n!16!21$0$2$2', 'n!b!22$0$1$0', 'n!17!23$0$0$0', 'n!17!23$3$12$2', 'n!2!2$1$0$4', 'n!5!13$2$14$3', 'n!3!11$2$4$4', 'n!3!10$0$2$5', 'n!2!17$2$8$3', 'n!4!2$1$4$3', 'n!4!12$1$8$3', 'n!7!15$3$0$4', 'n!5!10$0$10$4', 'n!7!10$1$4$4', 'n!3!5$3$14$4', 'n!5!8$1$0$5', 'n!5!4$2$0$3', 'n!5!7$0$10$4', 'n!5!11$2$6$3', 'n!5!5$2$14$3', 'n!4!13$1$8$3', 'n!5!12$0$4$4', 'n!5!11$0$4$4', 'n!3!4$3$2$4', 'n!5!7$3$0$5', 'n!3!5$2$4$4', 'n!5!17$3$6$4', 'n!3!17$3$0$5', 'n!2!3$1$4$4', 'n!5!17$3$12$4', 'n!4!0$3$8$3', 'n!4!7$1$14$3', 'n!12!16$3$0$1', 'n!5!9$1$2$5', 'n!5!9$1$0$5', 'n!2!7$1$12$4', 'n!2!17$2$4$3', 'n!3!5$2$8$4', 'n!5!11$0$10$4', 'n!7!5$1$0$4', 'n!3!10$2$10$4', 'n!5!10$1$0$5', 'n!5!2$0$0$4', 'n!5!13$0$10$4', 'n!7!5$1$10$4', 'n!3!9$2$14$4', 'n!4!14$1$4$3', 'n!3!4$3$12$4', 'n!5!4$2$2$3', 'n!5!11$2$14$3', 'n!3!2$2$4$4', 'n!3!15$0$10$5', 'n!4!7$1$0$3', 'n!5!10$0$14$4', 'n!3!17$1$4$4', 'n!2!14$1$0$4', 'n!12!16$1$0$0', 'n!3!7$2$10$4', 'n!5!18$0$4$3', 'n!5!18$2$4$3', 'n!5!19$1$0$5', 'n!5!19$1$12$3', 'n!16!19$3$2$2', 'n!12!21$3$4$3', 'n!15!23$2$0$0', 'n!3!14$0$0$5', 'n!3!5$2$10$4', 'n!3!8$0$12$5', 'n!3!14$3$0$4', 'n!2!12$1$12$4', 'n!3!12$3$10$4', 'n!5!3$2$8$3', 'n!5!10$0$6$4', 'n!5!6$0$0$4', 'n!3!7$3$12$4', 'n!14!16$3$8$2', 'n!x!10$3$0$4', 'n!10!9$3$4$2', 'n!5!5$3$2$2', 'n!3!1$0$2$5', 'n!5!14$0$12$4', 'n!5!1$1$4$3', 'n!2!2$1$4$4', 'n!12!16$3$8$0', 'n!5!12$2$4$3', 'n!5!8$1$14$5', 'n!5!5$0$4$4', 'n!5!1$2$4$3', 'n!5!11$2$10$3', 'n!7!8$1$8$4', 'n!3!13$0$10$5', 'n!5!7$0$12$4', 'n!5!18$1$4$3', 'n!4!19$0$8$3', 'n!14!20$3$8$3', 'n!5!5$1$10$5', 'n!2!17$0$0$4', 'n!7!5$1$14$4', 'n!7!0$3$2$3', 'n!5!10$2$12$3', 'n!3!12$3$12$4', 'n!5!15$2$0$3', 'n!4!1$3$10$3', 'n!3!14$2$12$4', 'n!3!2$2$10$4', 'n!5!15$3$14$3', 'n!3!7$2$0$4', 'n!5!5$2$12$3', 'n!5!12$2$0$3', 'n!5!18$3$4$3', 'n!17!22$3$0$1', 'n!3!9$0$8$5', 'n!3!11$2$14$4', 'n!3!2$0$8$5', 'n!5!5$1$12$5', 'n!3!6$0$12$5', 'n!5!2$2$0$3', 'n!14!16$3$0$2', 'n!5!17$3$8$4', 'n!3!9$0$6$5', 'n!5!5$2$10$3', 'n!3!14$0$4$5', 'n!2!14$1$12$4', 'n!5!1$1$14$3', 'n!5!17$1$8$3', 'n!5!19$3$4$3']
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

    const tabInfo = document.getElementById("tabLocation").appendChild(document.createElement("p"))
    tabInfo.innerHTML = "x: Dead note<br>/: Slide up<br>\\:Slide down<br>h: Hammer on<br>p: Pull off<br>b: Bend<br>~: Vibrato<br>pm -: Palm mute"
    tabInfo.setAttribute("style", "margin-bottom: 1em; margin-left: 20px; font-family: 'Anonymous Pro', serif !important; font - weight: 400 !important; font - style: normal !important; ")

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
    if (content == "\\\\" && currentlySaving == false) {
        content = "\\"
    }
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

                if (userStorage.includes("n!\\\\!" + clickedStringID)) {
                    userStorage.remove("n!\\\\!" + clickedStringID)
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
                if (content == "\\") {
                    content = "\\\\"
                }
                if (!userStorage.includes("n!" + content + "!" + clickedStringID)) {
                    userStorage.push("n!" + content + "!" + clickedStringID)
                    console.log(userStorage)
                }
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
var noteSelectOpen = false

function toggleNoteSelect(open, capo) {
    if (capo == true) {
        globalCapoState = true
        document.getElementById("capoSelector").style.backgroundColor = "#fff8"
        document.getElementById("capoSelector").style.color = "#335"
        document.getElementById("capoSelector").style.fontWeight = "500"
    }

    if (open == 0) {
        noteSelectOpen = false
        document.getElementById("noteSelectArea").style.transform = null
    } else if (open == 1) {
        noteSelectOpen = true
        document.getElementById("noteSelectArea").style.transform = "translateY(0px)"
    }

}


addEventListener("keydown", (event) => {
    if (event.key == "Escape" && noteSelectOpen == true) {
        toggleNoteSelect(0)
    }
    if (event.key == "Backspace" && noteSelectOpen == true || event.key == "Delete" && noteSelectOpen == true) {
        noteSelect("Delete")
    }
    if (event.key < 10 && noteSelectOpen == true) {
        noteSelect(event.key)
    }
});


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



var tempArray

function exportSave() {
    userStorage.forEach(element => {
        tempArray = tempArray + "'" + element + "'" + ", "
    });

    console.log(tempArray)
}