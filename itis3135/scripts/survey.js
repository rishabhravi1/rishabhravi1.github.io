document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("byo-intro-form");
  const coursesContainer = document.getElementById("courses-container");
  const addCourseButton = document.getElementById("add-course");

  // Handle adding courses dynamically
  addCourseButton.addEventListener("click", () => {
    const courseInput = document.createElement("input");
    courseInput.type = "text";
    courseInput.name = "courses";
    courseInput.placeholder = "Enter a course";
    courseInput.required = true;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      coursesContainer.removeChild(courseDiv);
    });

    const courseDiv = document.createElement("div");
    courseDiv.appendChild(courseInput);
    courseDiv.appendChild(deleteButton);

    coursesContainer.insertBefore(courseDiv, addCourseButton);
  });

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      alert("Please fill out all required fields.");
      return;
    }

    const output = document.createElement("div");
    output.innerHTML = "<h3>Your Submitted Information:</h3>";

    const imageCaptionDiv = document.createElement("div"); // Container for image and caption
    imageCaptionDiv.style.textAlign = "center"; // Center-align the content in the container

    // Iterate over form elements in the order they appear in the DOM
    Array.from(form.elements).forEach((element) => {
      const { name, type, value, checked } = element;

      if (type === "submit" || type === "reset" || type === "button") {
        return; // Skip buttons
      }

      if (type === "checkbox" && !checked) {
        return; // Skip unchecked checkboxes
      }

      if (name === "image") {
        const file = element.files[0]; // Get the uploaded file
        if (file && file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.alt = "Uploaded Image";
            img.style.maxWidth = "200px";
            img.style.margin = "0 auto"; // Center the image horizontally
            img.style.display = "block"; // Ensure block-level behavior for margin auto
            imageCaptionDiv.prepend(img); // Add the image to the container
          };
          reader.readAsDataURL(file);
        }
      } else if (name === "image-caption") {
        const caption = document.createElement("p");
        caption.textContent = value;
        imageCaptionDiv.appendChild(caption); // Add the caption below the image
        output.appendChild(imageCaptionDiv); // Append the image-caption group
      } else if (name) {
        const detail = document.createElement("p");
        detail.innerHTML = `<strong>${name}:</strong> ${value}`;
        output.appendChild(detail);
      }
    });

    form.replaceWith(output);

    const resetLink = document.createElement("a");
    resetLink.href = "#";
    resetLink.textContent = "Reset Form";
    resetLink.addEventListener("click", () => location.reload());

    document.body.appendChild(resetLink);
  });
});
