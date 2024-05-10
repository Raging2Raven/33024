function saveInfo() {
  // Retrieve the input value
  const userInfo = document.getElementById('userInfo').value;
  // Save the value to localStorage
  localStorage.setItem('userInfo', userInfo);
  // Optionally, confirm to the user that the data was saved
  alert('Your information has been saved.');
}