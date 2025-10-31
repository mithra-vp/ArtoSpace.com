// navbar scrolling
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) { // adjust scroll distance if needed
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  
// validatation

function validateForm(event) {
    event.preventDefault();

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("messageError").innerText = "";

    let isValid = true;

    // name
    const first_name = document.getElementById("name").value.trim();
    if (first_name === "") {
        document.getElementById("nameError").innerText = "Nameis required";
        isValid = false;
    }

    // email
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        isValid = false;
    }
    // phone number
    const phone = document.getElementById("phone").value;
    if (phone === "") {
        document.getElementById("phoneError").innerText = "Please enter your number";
        isValid = false;
    }
    // message
    const message = document.getElementById("message").value;
    if (message === "") {
        document.getElementById("messageError").innerText = "Please write a message";
        isValid = false;
    }

    return isValid;
}

// reset form

// emailjs intialization
(function () {
    emailjs.init("Yf2tElBuZ6WOgXeUM")   //public key

})();


document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateForm(event)) {
        return; // stop here if invalid
    }
    emailjs.sendForm("service_kwh5io8", "template_j0yipct", this)
        .then(function () {
            alert("Message send successfully,")
            document.getElementById("myform").reset(); 
        }, function (error) {
            alert("Failed to send message")
        })
})