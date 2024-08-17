
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signUpRedirectButton = document.getElementById('signUpRedirectButton');
    const loginError = document.getElementById('loginError');

    // Handle login form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value.trim();

        if (username === '' || password === '') {
            loginError.textContent = 'Please fill in all fields.';
            return;
        }

        if (username === 'user' && password === 'password') {
            alert('Login successful!');
            loginError.textContent = '';
            // Redirect or perform further actions here
        } else {
            loginError.textContent = 'Invalid username or password.';
        }
    });

    // Redirect to sign-up page
    signUpRedirectButton.addEventListener('click', () => {
        window.location.href = 'signup.html'; // Make sure this path is correct
    });
});