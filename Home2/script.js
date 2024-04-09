const toggleButton=document.getElementById('nav-toggle');
const navbar=document.getElementById('navbar');

toggleButton.addEventListener('click',()=>{
    navbar.classList.toggle('active');
})

// Stragger,repeat,yoyo

// gsap.to(".text-wrapper",{
//     x:60,
//     duration: 1,
//     delay: 0.5,
//     stagger: 1,
//     repeat: 1,
//     yoyo: true
// })

// Timeline 

// var tl=gsap.timeline();
// tl.to("#letter1",{
//     x:60,
//     duration: 1,
//     delay: 0.5,
//     stagger: 1,
//     repeat: 1,
//     yoyo: true
// })
// tl.to("#letter2",{
//    x:80,
//     duration: 1,
//     delay: 0.5,
//     stagger: 1,
//     repeat: 1,
//     yoyo: true
// })
// tl.to("#letter3",{
//     x:100,
//     duration: 1,
//     delay: 0.5,
//     stagger: 1,
//     repeat: 1,
//     yoyo: true
// })


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

tl.from(".letters",{
    y:40,
    scale:0,
    opacity:0,
    duration:1,
    stagger:1,
})

tl.from(".box-container>.box",{
    scale:0,
    opacity:0,
    stagger:0.3,
})