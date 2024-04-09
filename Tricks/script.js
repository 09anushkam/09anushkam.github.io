// Navbar Toggle
const toggleButton=document.getElementById('nav-toggle');
const navbar=document.getElementById('navbar');

toggleButton.addEventListener('click',()=>{
    navbar.classList.toggle('active');
})


// // Animation Box display
//     const tricksBox = document.querySelector("#tricks .box");
//     const trickBtns = document.querySelectorAll(".trick-btns");
//     const animationBox = document.querySelector(".animation-box");
//     const animationVideo = document.querySelectorAll(".animation-box .animes");
//     const goBackBtn = document.querySelector(".back-btn");

//     trickBtns.forEach(trickBtn => {
//         trickBtn.addEventListener('click', () => {
//             tricksBox.style.display="none";
//             animationBox.style.display="block";
//             animationVideo.forEach(animationv => {
//                 if (animationv.id === trickBtn.id) {
//                     animationv.style.display = "block";
//                     document.querySelector(".animation-box h2").innerHTML=trickBtn.innerHTML;
//                 } else {
//                     animationv.style.display = "none";
//                 }
//             });
//         });
//     });

//     goBackBtn.addEventListener('click', () => {
//         tricksBox.style.display = "block";
//         animationBox.style.display = "none";
//         animationVideo.forEach(animationv => {
//             animationv.style.display = "none";
//         });
//     });

    
// // Video
// function loadVideo(src) {
//             document.getElementById('video-container').innerHTML = '<video controls width="600" height="300"><source src="' + src + '" type="video/mp4">Your browser does not support the video tag.</video>';
//         }

//         function stopVideos() {
//             var videos = document.querySelectorAll('#video-container video');
//             for (var i = 0; i < videos.length; i++) {
//                 videos[i].pause();
//             }
//         }

//         // Stop videos when leaving the page
//         window.addEventListener('beforeunload', function () {
//             stopVideos();
//         });





// Animation Box display
// Selecting necessary elements from the DOM
const tricksBox = document.querySelector("#tricks .card"); // Corrected selector to target the card within tricks section
const trickBtns = document.querySelectorAll("#tricks .trick-btns"); // Updated selector to match the button class within tricks section
const animationBox = document.querySelector(".animation-box");
const animationVideo = document.querySelector("#video-container"); // Changed selector to target the video container directly
const goBackBtn = document.querySelector(".back-btn");

// Adding event listeners to the trick buttons
trickBtns.forEach(trickBtn => {
    trickBtn.addEventListener('click', () => {
        tricksBox.style.display = "none";
        animationBox.style.display = "block";
        // Loading appropriate video based on the clicked button
        const videoSrc = trickBtn.getAttribute('data-video-src'); // Retrieve video source from data-video-src attribute
        if (videoSrc) {
            loadVideo(videoSrc);
            document.querySelector(".animation-box h2").innerHTML = trickBtn.innerHTML;
            document.querySelector(".animation-box h2").style = "font-size: 3rem;";
            document.querySelector(".animation-box h2").style = "text-align: center;";
            document.querySelector(".animation-box h2").style = "font-weight: 800;";
            document.querySelector(".animation-box h2").style = "padding: .4rem;";
        } else {
            console.error("Video source not found.");
        }
    });
});

// Adding event listener to the "Go back" button
goBackBtn.addEventListener('click', () => {
    tricksBox.style.display = "block";
    animationBox.style.display = "none";
    stopVideos(); // Stopping any playing videos when going back
});

// Function to load video
function loadVideo(src) {
    const videoElement = document.createElement('video');
    videoElement.setAttribute('controls', '');
    videoElement.setAttribute('width', '600');
    videoElement.setAttribute('height', '300');
    
    const sourceElement = document.createElement('source');
    sourceElement.setAttribute('src', src);
    sourceElement.setAttribute('type', 'video/mp4');
    
    videoElement.appendChild(sourceElement);
    
    // Clear previous content and append the video element to the container
    animationVideo.innerHTML = '';
    animationVideo.appendChild(videoElement);
    
    // Start playing the loaded video
    videoElement.play();
}

// Function to stop videos
function stopVideos() {
    var videos = document.querySelectorAll('#video-container video');
    for (var i = 0; i < videos.length; i++) {
        videos[i].pause();
    }
}

// Stop videos when leaving the page
window.addEventListener('beforeunload', function () {
    stopVideos();
});


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