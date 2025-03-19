// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the form
  const form = document.querySelector("form");

  // Add submit event listener to the form
  form.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form data
    const name = form.querySelector('input[name="Name"]').value.trim();
    const email = form.querySelector('input[name="Email"]').value.trim();
    const message = form.querySelector('textarea[name="Message"]').value.trim();

    // Validate form data
    if (!name) {
      showMessage("Please enter your name", "error");
      return;
    }

    if (!email) {
      showMessage("Please enter your email", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showMessage("Please enter a valid email address", "error");
      return;
    }

    // Disable the submit button to prevent multiple submissions
    constsubmitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    // Create form data object
    constformData = {
      name: name,
      email: email,
      message: message,
    };

    // Simulate form submission with a timeout
    setTimeout(function () {
      // For this example, we'll just simulate a successful submission
      console.log("Form data:", formData);
      showMessage("Form submitted successfully!", "success");
      form.reset();

      // Re-enable the submit button
      submitButton.disabled = false;
      submitButton.textContent = "Submit";
    }, 1500);
  });

  // Function to validate email format
  functionisValidEmail(email);
  {
    constemailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    returnemailRegex.test(email);
  }

  // Function to show messages to the user
  functionshowMessage(message, type);
  {
    // Check if a message element already exists
    letmessageElement = document.getElementById("form-message");

    // If not, create one
    if (!messageElement) {
      messageElement = document.createElement("div");
      messageElement.id = "form-message";
      form.insertAdjacentElement("afterend", messageElement);
    }

    // Set message content and styling
    messageElement.textContent = message;
    messageElement.className = `message ${type}`;

    // Add some basic styling
    messageElement.style.padding = "10px";
    messageElement.style.marginTop = "10px";
    messageElement.style.borderRadius = "4px";

    if (type === "error") {
      messageElement.style.backgroundColor = "#ffebee";
      messageElement.style.color = "#c62828";
    } else {
      messageElement.style.backgroundColor = "#e8f5e9";
      messageElement.style.color = "#2e7d32";
    }

    // Remove the message after 5 seconds
    setTimeout(() => {
      messageElement.remove();
    }, 5000);
  }
});
