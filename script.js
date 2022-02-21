document.querySelector(".email-button").addEventListener("click", validateEmail)



function validateEmail(email) {
    email = document.querySelector("#email");
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.value.match(mailFormat)) {
        document.querySelector(".email-input").classList.add("active")
        document.querySelector(".warning-text").style.display = "block";
        return true;
    } else {
        document.querySelector(".email-input").classList.remove("active")
        document.querySelector(".warning-text").style.display = "none";
        return false;
    }

}