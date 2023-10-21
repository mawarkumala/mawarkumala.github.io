document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var phone = document.querySelector('input[name="phone"]').value;
    var message = document.querySelector('textarea[name="message"]').value;

    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /\S+@\S+\.\S+/;
    var phoneRegex = /^\d+$/;

    if (!name.match(nameRegex)) {
        alert("Name should only contain letters and spaces!");
    } else if (!email.match(emailRegex) || !email.endsWith('@gmail.com')) {
        alert("Please enter a valid Gmail address!");
    } else if (!phone.match(phoneRegex)) {
        alert("Phone should only contain numbers!");
    } else {
        alert("Your validation successful! You will receive a verification email within a few seconds...");
    }
});
