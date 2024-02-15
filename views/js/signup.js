// signup.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("createAccountForm");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  const rememberMeCheckbox = document.getElementById("rememberMe");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!validateEmail(emailInput.value)) {
      emailError.textContent = "Invalid email format";
      return;
    } else {
      emailError.textContent = "";
    }

    if (!validatePassword(passwordInput.value)) {
      passwordError.textContent = "Password must be at least 8 characters long";
      return;
    } else {
      passwordError.textContent = "";
    }

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      if (key === "rememberMe") {
        data[key] = rememberMeCheckbox.checked;
      } else {
        data[key] = value;
      }
    });

    // Simulate form submission

    const response = await fetch("http://localhost:5000/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    if (response.ok) {
      // Successful login
      window.location.href = "/login"; // Redirect to dashboard or another page
    } else {
      const responseData = await response.json();
      alert(responseData.error); // Display error message
    }
    // Here you can send the form data to the server using fetch or AJAX
  });

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validatePassword(password) {
    return password.length >= 8;
  }
});
