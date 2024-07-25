document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById('exampleModalToggle');
    
    if (!modal) {
        console.error("Modal not found");
        return;
    }

    modal.addEventListener('show.bs.modal', function() {
        const form = document.querySelector("#registrationForm");

        if (!form) {
            console.error("Form not found");
            return;
        }

        const fullnameField = form.querySelector(".fullname-field"),
              fullnameInput = fullnameField ? fullnameField.querySelector(".fullname") : null,
              phoneField = form.querySelector(".phone-field"),
              phoneInput = phoneField ? phoneField.querySelector(".phone") : null,
              emailField = form.querySelector(".email-field"),
              emailInput = emailField ? emailField.querySelector(".email") : null,
              passwordField = form.querySelector(".create-password"),
              passwordInput = passwordField ? passwordField.querySelector(".Password") : null;

        if (!fullnameField || !fullnameInput || !emailField ||!phoneField || !phoneInput || !emailInput || !passwordField || !passwordInput) {
            console.error("One or more form fields are missing.");
            return;
        }

        // Full name validation
        function checkFullName() {
            const namePattern = /^[a-zA-Z\s]+$/;
            if (!fullnameInput.value.match(namePattern)) {
                // console.log("Invalid full name:", fullnameInput.value);
                return fullnameField.classList.add("invalid");
            }
            fullnameField.classList.remove("invalid");
        }
      

        // Email validation
        function checkEmail() {
            const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
            if (!emailInput.value.match(emailPattern)) {
                // console.log("Invalid email:", emailInput.value);
                return emailField.classList.add("invalid");
            }
            emailField.classList.remove("invalid");
        }

        // Password validation
        function checkPassword() {
            const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
            const minLengthPattern = /^.{0,7}$/; // Pattern for less than 8 characters
            const errorElement = passwordField.querySelector(".password-error");

            // Clear previous error messages
            errorElement.style.display = 'none';
            passwordField.classList.remove("invalid");

            if (passwordInput.value.match(minLengthPattern)) {
                // Display message for passwords less than 8 characters
                errorElement.querySelector(".error-text").textContent = "Password should be at least 8 characters long.";
                errorElement.style.display = 'flex';
                passwordField.classList.add("invalid");
                return;
            }

            if (!passwordInput.value.match(passwordPattern)) {
                // Display message for invalid passwords
                errorElement.querySelector(".error-text").textContent = "Password must include at least one number, one symbol, one lowercase letter, one uppercase letter, and be at least 8 characters long.";
                errorElement.style.display = 'flex';
                passwordField.classList.add("invalid");
                return;
            }

            // Password is valid
            errorElement.style.display = 'none';
        }
        function checkPhoneNo(){
            const phoneNoPattern =/^\+?\d{10}$|^\+?(?:\d[\d\s\-\(\)]{8,}\d){10}$/ ; //+1 (123) 456-7890 ,123-456-7890,1234567890
            if (!phoneInput.value.match(phoneNoPattern)) {
                return phoneField.classList.add("invalid");
            }
            phoneField.classList.remove("invalid");
        }

        fullnameInput.addEventListener("keyup", checkFullName);
        phoneInput.addEventListener("keyup",checkPhoneNo);
        emailInput.addEventListener("keyup", checkEmail);
        passwordInput.addEventListener("keyup", checkPassword);
     


        // Submitting the form
        form.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent form from submitting

            // Clear previous invalid states
            fullnameField.classList.remove("invalid");
            phoneField.classList.remove("invalid");
            emailField.classList.remove("invalid");
            passwordField.classList.remove("invalid");
      


        


            // Validate fields
            checkFullName();
            checkPhoneNo();
            checkEmail();
            checkPassword();
           


            // Log form data to console
            console.log("Full Name:", fullnameInput.value);
            console.log("Phone No:", phoneInput.value);
            console.log("Email:", emailInput.value);
            console.log("Password:", passwordInput.value);


            // If there are no invalid fields, log the submission attempt
            if (!fullnameField.classList.contains("invalid") &&
            !phoneField.classList.contains("invalid")&&
                !emailField.classList.contains("invalid") &&
                !passwordField.classList.contains("invalid")) {
                console.log("Form is valid, would submit to server here.");
                // You can handle the form submission here, e.g., via AJAX
                setTimeout(() => {
                    alert("Form Register successfully!");
                }, 500);
            } else {
                setTimeout(() => {
                    alert("Form is not Register successfully!");
                }, 500);
                console.log("Form is invalid, not submitting.");
            }
        });
    });
});
