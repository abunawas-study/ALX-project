// Form Validation
const form = document.getElementById('FeedbackForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('userInput');
    const usernameError = document.getElementById('userError');

    if (usernameInput.value.length < 3){
        usernameError.textContent = 'Username must be at least 3 characters long';
        return;
    }else{
        usernameError.textContent = '';
    }

    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)){
        emailError.textContent = 'Please enter a valid email';
        return;
    }else{
        emailError.textContent = '';
    }

    const ageInput = document.getElementById('age');
    const ageError = document.getElementsByid('ageError');

    if (ageInput.value < 18 || ageInput.value > 99){
        ageError.textContent = 'Please age must be between 18 and 99';
        return;
    }else{
        ageError.textContent = '';
    }

    const feedbackInput = document.getElementById('feedback');
    const feedbackError = document.getElementById('feedbackError');

    if (feedbackInput.value.length < 100 || feedbackInput.value.length > 500){
        feedbackError.textContent = 'Please message must reach 500 words';
        return;
    }else{
        feedbackError.textContent = '';
    }
})
form.submit();