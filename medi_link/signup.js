
document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.getElementById('signUpForm');
    const loginRedirectButton = document.getElementById('loginRedirectButton');
    const signUpError = document.getElementById('signUpError');

    // Handle sign-up form submission
    signUpForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('signUpUsername').value.trim();
        const password = document.getElementById('signUpPassword').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        if (username === '' || password === '' || confirmPassword === '') {
            signUpError.textContent = 'Please fill in all fields.';
            return;
        }

        if (password !== confirmPassword) {
            signUpError.textContent = 'Passwords do not match.';
            return;
        }

        if (username === 'user' && password === 'password') {
            alert('Sign-up successful!');
            signUpError.textContent = '';
            // Redirect or perform further actions here
        } else {
            signUpError.textContent = 'Sign-up failed. Please try again.';
        }
    });

    // Redirect to login page
    loginRedirectButton.addEventListener('click', () => {
        window.location.href = 'login.html'; // Make sure this path is correct
    });
});