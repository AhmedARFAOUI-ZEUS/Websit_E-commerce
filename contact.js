document.addEventListener('DOMContentLoaded', function() {
    // Get the form and its input fields
    const form = document.querySelector('form');
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const telephone = document.getElementById('telephone');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    // Function to validate the email format
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    // Form submit event listener
    form.addEventListener('submit', function(event) {
        // Clear previous alerts
        let errors = [];

        // Check if all fields are filled
        if (nom.value.trim() === '') {
            errors.push('Nom is required.');
        }
        if (prenom.value.trim() === '') {
            errors.push('Prénom is required.');
        }
        if (telephone.value.trim() === '') {
            errors.push('Téléphone is required.');
        }
        if (email.value.trim() === '') {
            errors.push('E-mail is required.');
        } else if (!validateEmail(email.value)) {
            errors.push('E-mail is invalid.');
        }
        if (password.value.trim() === '') {
            errors.push('Password is required.');
        }

        // If there are errors, prevent form submission and alert the errors
        if (errors.length > 0) {
            event.preventDefault(); // Prevent form from submitting
            alert(errors.join('\n')); // Show alert with all errors
        } else {
            alert('Form submitted successfully!');
        }
    });
});
