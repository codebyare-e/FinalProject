document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
   
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
   
    // Add your logic to authenticate the user here
    // For example:
    if (username === 'admin' && password === '12345') {
       // If the login is successful, redirect to the other page
       window.location.href = 'dashboard.html';
    } else {
       alert('Incorrect username or password');
    }
});