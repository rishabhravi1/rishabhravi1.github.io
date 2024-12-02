document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("byo-intro-form");
    const coursesContainer = document.getElementById("courses-container");
    const addCourseButton = document.getElementById("add-course");
  
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
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      if (!form.checkValidity()) {
        alert("Please fill out all required fields.");
        return;
      }
  
      const formData = new FormData(form);
      const output = document.createElement("div");
      output.innerHTML = "<h3>Your Submitted Information:</h3>";
  
      for (let [key, value] of formData.entries()) {
        if (key === "agree") continue;
        output.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
      }
  
      form.replaceWith(output);
  
      const resetLink = document.createElement("a");
      resetLink.href = "#";
      resetLink.textContent = "Reset Form";
      resetLink.addEventListener("click", () => location.reload());
  
      document.body.appendChild(resetLink);
    });
  });
  