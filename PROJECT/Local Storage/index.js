function addUser() {
    // var data = 'This is some data to save in local storage';
    //   // Retrieve existing user data or initialize an empty array
var data = JSON.parse(localStorage.getItem('data')) || [];

// Create a new user object
var newUser = {
  name: 'John Doe',// Retrieve existing users from local storage or create an empty array
  let users = JSON.parse(localStorage.getItem('users')) || [];
  
  // Create a new user object
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com'
  };
  
  // Add the new user to the existing users array
  users.push(user);
  
  // Save the updated users array back to local storage
  localStorage.setItem('users', JSON.stringify(users));
  
  email: 'johndoe@example.com',
  age: 30
};

// Add the new user to the array
data.push(newUser);

// Store the updated user data in local storage
localStorage.setItem('data', JSON.stringify(data));
document.getElementById("result")
  }
  
  
//   function retrieveData() {
//     var data = localStorage.getItem('myData');
//     if (data) {
//       console.log('Retrieved data from local storage:', data);
//     } else {
//       console.log('No data found in local storage');
//     }
//   }

