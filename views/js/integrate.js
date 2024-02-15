document.addEventListener("DOMContentLoaded", function () {
  const connectPageButton = document.querySelector(".button-blue");

  connectPageButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Make a request to the specified URL
    fetch("http://example.com/connect-page", {
      method: "POST", // Or "GET" depending on your requirements
      // You can add headers or body data if needed
    })
      .then((response) => {
        // Handle the response as needed
        console.log("Page connected successfully");
      })
      .catch((error) => {
        // Handle errors
        console.error("Error connecting page:", error);
      });
  });
});
