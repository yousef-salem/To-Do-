
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
  
    loginForm.addEventListener("submit", (e) => {
        console.log("submit start");
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Replace with your API call to check if the login is correct
        fetch('https://dummyjson.com/auth/login',{
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({ username, password })
                                                } 
        )
        .then((res) =>{
            return res.json()
        })
        .then((data) => {
            if (data.token) {
                // Login is correct, navigate to the second page
                console.log(data)
                window.location.href = `home.html?firstName=${data.firstName}&lastName=${data.lastName}&id=${data.id}&image=${data.image}`;
            } else {
                errorMessage.textContent = "Invalid username or password";
            }
        })
        .catch((error) => {
            errorMessage.textContent = "An error occurred while logging in.";
        });
    });
