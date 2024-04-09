const toggleButton=document.getElementById('nav-toggle');
const navbar=document.getElementById('navbar');

toggleButton.addEventListener('click',()=>{
    navbar.classList.toggle('active');
})

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

tl.from(".img>img",{
    duration:1,
    scale:0,
    opacity:0,
    stagger:0.3,
})

tl.from(".content-box",{
    duration:1.2,
    scale:0,
    opacity:0,
    stagger:0.3,
})

// gsap.from(".content-box", {
//     duration: 1.2,
//     scale: 0,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: "body .content-box",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//         end: "top 30%",
//         scrub: 2,
//     },
// });
