var userId ;
document.addEventListener("DOMContentLoaded", () => {
    const usernameElement = document.getElementById("username");
    const userImageElement = document.getElementById("user-image");
  
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("firstName")+" "+urlParams.get("lastName");
    const userImage = urlParams.get("image");
    userId = urlParams.get("id");
    fetchTodoList(userId);
    if (username && userImage) {
      usernameElement.textContent = username;
      userImageElement.src = userImage;
    }
  });
  console.log(`user id is ${userId}`);
// Get the logout link element
const logoutLink = document.getElementById("logout-link");

// Add an event listener to handle the log out process
logoutLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the link from navigating

  // Add a new entry to the browser history stack
  window.history.forward();

  // Replace the URL with the login URL
  window.location.replace("login.html");
});

function fetchTodoList(userId) {
  const url = `https://dummyjson.com/todos/user/${userId}`;

  // Fetch data from the API
  fetch(url)
      .then(res => res.json())
      .then(data => {
          const todoList = document.getElementById('todoList');
          todoList.innerHTML = ''; // Clear existing content
          data.todos.forEach(todo => {
              const listItem = document.createElement('li');
              listItem.innerHTML = `
                  <input type="checkbox" ${todo.completed ? 'checked' : ''}>
                  <span class="${todo.completed ? 'completed' : ''}">${todo.todo}</span>
              `;
              todoList.appendChild(listItem);
          });
        });
      }
      