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
    document.getElementById("FeedbackError").innerText = "";

    let isValid = true;

    // name
    const first_name = document.getElementById("name").value.trim();
    if (first_name === "") {
        document.getElementById("nameError").innerText = "Nameis required";
        isValid = false;
    }
    // message
    const Feedback = document.getElementById("Feedback").value;
    if (Feedback === "") {
        document.getElementById("FeedbackError").innerText = "Please write a message";
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
