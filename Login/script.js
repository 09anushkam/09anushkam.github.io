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


// Function to validate the login form
    function validateLoginForm() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Check if any field is empty
        if (username.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields');
            return false;
        }

        // Other validations can be added as needed

        // If all validations pass, return true
        return true;
    }