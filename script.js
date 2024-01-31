// Get the Add Patients and Add Doctors menu items by their IDs
const addPatientsMenuItem = document.getElementById('add-patients');
const addDoctorsMenuItem = document.getElementById('add-doctors');

// Add a click event listener to the Add Patients menu item
addPatientsMenuItem.addEventListener('click', () => {
  // Redirect the user to the Add Patients page
  window.location.href = 'addpatients.html';
});

// Add a click event listener to the Add Doctors menu item
addDoctorsMenuItem.addEventListener('click', () => {
  // Redirect the user to the Add Doctors page
  window.location.href = 'adddoctors.html';
});
  
