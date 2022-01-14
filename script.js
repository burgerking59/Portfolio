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
