function load() {
    tl = gsap.timeline();
    tl.from("#titleDiv", { duration: 2, y: 100, opacity: 0 })
        .from("#infoDiv", { duration: 2, y: 200, opacity: 0 })
}

function loadP() {
    tl = gsap.timeline();
    tl.from(".projects", { duration: 2, y: 100, opacity: 0 })
        .from(".description", { duration: 2, y: 200, opacity: 0 })
}

function loadC() {
    tl = gsap.timeline();
    tl.from(".contact", { duration: 2, y: 100, opacity: 0 })
}

function info(project) {
    document.getElementById("extraInfo").style.display = "block"
    document.getElementById("extraInfo").innerHTML = "<button aria-label='close' class='btn-close' onclick='closeInfo()' id='x'></button>"
    if (project == "NandC") {
        document.getElementById("extraInfo").innerHTML += "<p>This is part of the project I chose to make for my computer science programming project. I chose to make an AI for Naughts and Crosses, Checkers and Chess to understand how the AI would change as the game became more complicated. I plan to continue to work on the other two games in my spare time.</p>"
    } else if (project == "solar") {
        document.getElementById("extraInfo").innerHTML += "<p>This is a project I was set by a software company called Netmatters. It was a real project that they worked on. It takes in information about six electric cars and displays a schedule for how to charge them using solar panels. If it can't charge them using just the solar panels then it uses the mains electricity.</p>"
    } else if (project == "days") {
        document.getElementById("extraInfo").innerHTML += "<p>I completed this project to prepare for my computer science A level and to learn how to create a UI in python. It takes in a persons birthday and calculates how many days old they are and displays it to them.</p>"
    } else if (project == "number") {
        document.getElementById("extraInfo").innerHTML += "<p>I completed this project in my spare time to practice using python and making a basic UI. The program can convert integers between denary, binary and hexadecimal.</p>"
    }
}

function closeInfo() {
    document.getElementById("extraInfo").style.display = "none"
}
