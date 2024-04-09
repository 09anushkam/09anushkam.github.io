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
    delay: 0.1,
    duration:0.1,
    scale:0,
    opacity:0,
    stagger:1,
})

// Function to validate the signup form
    function validateSignUpForm() {
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmpassword').value;

        // Check if any field is empty
        if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            alert('Please fill in all fields');
            return false;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return false;
        }

        // Other validations can be added as needed

        // If all validations pass, return true
        return true;
    }

let eyeicon=document.getElementById("eyeicon");
let password=document.getElementById("password");
eyeicon.onclick=()=>{
    if(password.type=="password"){
        // password.type="text";
        password.setAttribute("type", "text");
        eyeicon.src="eye-open.png";
    }else{
        // password.type="password";
        password.setAttribute("type", "password");
        eyeicon.src="eye-close.png";
    }
}


document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(event) {
        // Check if password meets strong password criteria
        var password = form.querySelector('input[type="password"]').value;
        if (!isStrongPassword(password)) {
            alert('Password must contain at least 8 characters, including uppercase, lowercase, and a number.');
            event.preventDefault(); // Prevent form submission
        }
    });
});

function isStrongPassword(password) {
    var strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return strongPasswordRegex.test(password);
}
