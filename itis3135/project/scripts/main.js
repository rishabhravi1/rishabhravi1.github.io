// Load Header and Footer Components Dynamically
document.addEventListener("DOMContentLoaded", () => {
    // Dynamically load header
    fetch("components/header.html")
      .then((response) => response.text())
      .then((data) => document.querySelector("header").innerHTML = data);
  
    // Dynamically load footer
    fetch("components/footer.html")
      .then((response) => response.text())
      .then((data) => document.querySelector("footer").innerHTML = data);
    // Function 1: Interactive Image Gallery
    function setupGallery() {
      const galleryImages = document.querySelectorAll(".gallery img");
    
      galleryImages.forEach((img) => {
        img.addEventListener("click", () => {
          const overlay = document.createElement("div");
          overlay.className = "overlay";
          overlay.innerHTML = `<img src="${img.src}" alt="Expanded Image">`;
          document.body.appendChild(overlay);
    
          overlay.addEventListener("click", () => overlay.remove());
        });
      });
    }
    function showError(input, message) {
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.textContent = message;
      input.parentElement.appendChild(errorDiv);
      input.classList.add("input-error");
    }
  
    function clearErrors() {
      document.querySelectorAll(".error-message").forEach((error) => error.remove());
      document.querySelectorAll(".input-error").forEach((input) => input.classList.remove("input-error"));
    }
  
    function validateEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }
    // Function 2: Form Validation for Contact Page
    function setupFormValidation() {
      const form = document.querySelector("form");
    
      if (!form) return; // Exit if form doesn't exist on the page
    
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");
    
      form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting
    
        let isValid = true;
        clearErrors();
    
        // Name validation
        if (nameInput.value.trim() === "") {
          showError(nameInput, "Name is required.");
          isValid = false;
        }
    
        // Email validation
        if (!validateEmail(emailInput.value.trim())) {
          showError(emailInput, "Please enter a valid email address.");
          isValid = false;
        }
    
        // Message validation
        if (messageInput.value.trim() === "") {
          showError(messageInput, "Message cannot be empty.");
          isValid = false;
        }
    
        // If valid, show success message
        if (isValid) {
          alert("Thank you! Your message has been sent successfully.");
          form.reset();
        }
      });
    
      
    }
    // Call other functions when DOM is ready
    setupGallery();
    setupFormValidation();
  });
  

  