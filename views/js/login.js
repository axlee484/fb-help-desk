document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");

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

    const formData = {
      email: form.querySelector("#email").value,
      password: form.querySelector("#password").value,
      rememberMe: form.querySelector("#rememberMe").checked,
    };

    // Simulate form submission

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(response);
    if (response.ok) {
      // Successful login
      const res = await response.json();
      console.log(res);
      window.sessionStorage.setItem("token", res.token);
      if (res.page == null) window.location.href = "/integrate";
      else window.location.href = "/agent"; // Redirect to dashboard or another page
    } else {
      const responseData = await response.json();
      alert(responseData.error); // Display error message
    }
  });

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validatePassword(password) {
    return password.length >= 8;
  }
});
