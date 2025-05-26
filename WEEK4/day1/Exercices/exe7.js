// (function welcomeUser(name) {
//   const navbar = document.getElementById('navbar');

//   // Create user info div once
//   const userDiv = document.createElement('div');
//   userDiv.classList.add('user-info');

//   const img = document.createElement('img');
//   const nameSpan = document.createElement('span');

//   userDiv.appendChild(img);
//   userDiv.appendChild(nameSpan);

//   navbar.appendChild(userDiv);

//   // Function to update user info
//   function updateUser(name) {
//     img.src = 'https://i.pravatar.cc/150?u=' + encodeURIComponent(name);
//     img.alt = `${name}'s profile picture`;
//     nameSpan.textContent = `Welcome, ${name}`;
//   }

//   // Initialize with the initial name
//   updateUser(name);

//   // Add event listener to button
//   const input = document.getElementById('usernameInput');
//   const button = document.getElementById('welcomeBtn');

//   button.addEventListener('click', () => {
//     const newName = input.value.trim();
//     if(newName) {
//       updateUser(newName);
//       input.value = '';
//     } else {
//       alert('Please enter a name!');
//     }
//   });

// })('John');
