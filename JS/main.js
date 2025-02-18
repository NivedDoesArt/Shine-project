window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};



async function navbar(location) {
    document.getElementById('body').style.opacity = '0%'
    await new Promise(resolve => setTimeout(resolve, 500));
    window.location.href = location
}



window.onload = async function() {
    document.getElementById('body').style.opacity = '100%'
}