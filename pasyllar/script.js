var html = document.getElementsByTagName("html")[0];
var sun = document.querySelector(".sun");
var rainbow = document.querySelector(".rainbow");
var rabbit = document.querySelector(".rabbit");
var snow = document.querySelectorAll(".snow");
var rain = document.querySelectorAll(".rain");
var flowers = document.querySelectorAll(".flower");
var lightColours = ["#93d5eb", "#add63a", "#c5d63a", "#febe42"],
    mediumColours = ["#66bbd8", "#92c938", "#acc52b", "#ff9d25"],
    darkColours = ["#4da2bb", "#2a9d5c", "#89a503", "#ff6b2f"],
    backgroundColours = ["#cbe9f4", "#daf8ff", "#feec98", "#ffdc8a"],
    bushColours = ["#ffffff", "#3ebf6d", "#99b31a", "#fd6d2e"],
    cloudColours = ["#ffffff", "#ffffff", "#ffffff", "#eaf9fe"],
    seasons = ["Winter", "Spring", "Summer", "Autumn"];
var c = 1;
var season;

function updateSeasons() {
    html.style.setProperty("--bgd-color", backgroundColours[c]);
    html.style.setProperty("--light", lightColours[c]);
    html.style.setProperty("--medium", mediumColours[c]);
    html.style.setProperty("--dark", darkColours[c]);
    html.style.setProperty("--bush", bushColours[c]);
    html.style.setProperty("--cloud", cloudColours[c]);
    season = seasons[c];

    //möwsüm = gyş bolsa gar goşuň
    snow.forEach(function (el) {
        season !== seasons[0] ?
            el.style.display = "none" :
            el.style.display = "block";
    });

    //möwsüm = gyş bolsa towşan goşuň
    if (season === seasons[0] || season === seasons[2]) {
        rabbit.classList.add("animated");
    } else {
        rabbit.classList.remove("animated");
    }

    //möwsüm = bahar bolsa älemgoşar goşuň
    season === seasons[1] ?
        rainbow.classList.add("animated") :
        rainbow.classList.remove("animated");
    if (season === seasons[1]) {
        html.style.setProperty("--rabbit", "#9E6255");
    }
    //möwsüm = bahar bolsa gül goşuň
    flowers.forEach(function (el) {
        season === seasons[1] ?
            el.classList.add("animated") :
            el.classList.remove("animated");
    });

    //möwsüm = tomus bolsa gün we towşan goşuň
    if (season === seasons[2]) {
        html.style.setProperty("--sun", "#ffb53a");
        html.style.setProperty("--rabbit", "#9E6255");
    } else {
        html.style.setProperty("--sun", "transparent");
        html.style.setProperty("--rabbit", "#ffffff");
    }

    //möwsüm = güýz bolsa ýagyş goşuň
    rain.forEach(function (el) {
        season === seasons[3] ?
            el.style.display = "block" :
            el.style.display = "none";
    });

    //artdyryş massiwiniň görkezijisi
    c = (c + 1) % seasons.length;
}

//Hemme hereket üçin
let nF = 0;
function animate() {
    if (++nF % 600 === 0) {
        updateSeasons();
    }
    requestAnimationFrame(animate);
}
animate();