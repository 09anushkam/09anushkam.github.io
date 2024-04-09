var tl=gsap.timeline();

tl.from("header h1",{
    y:-100,
    opacity:0,
    stagger:0.3,
})

tl.from("nav a",{
    x:100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2,
})

tl.from(".card",{
    delay:0.1,
    duration:1,
    scale:0,
    opacity:0,
    stagger:1,
})