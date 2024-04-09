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





