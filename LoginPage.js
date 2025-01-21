// One Click Effect: Show an alert when the "Log In" button is clicked
const loginButton = document.querySelector(".btn");
loginButton.addEventListener("click", () => {
  alert("Log In button clicked!");
});

// Double Click Effect: Change text color when the "Sign Up" button is double-clicked
const signUpButton = document.querySelector(".btn1");
signUpButton.addEventListener("dblclick", () => {
  signUpButton.style.color = "red";
  alert("Sign Up button double-clicked!");
});

// Mouseover Effect: Change background and text colors on hover
const socialButtons = document.querySelectorAll(".social-btn");
socialButtons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    // Save the original background color
    const originalBgColor = getComputedStyle(button).backgroundColor;
    // Set new styles
    button.style.backgroundColor = "white";
    button.style.color = originalBgColor;
  });

  button.addEventListener("mouseout", () => {
    // Reset to original styles when the mouse leaves
    if (button.classList.contains("fb")) {
      button.style.backgroundColor = "#3b5998";
      button.style.color = "white";
    } else if (button.classList.contains("google")) {
      button.style.backgroundColor = "#dc341e";
      button.style.color = "white";
    } else if (button.classList.contains("linkedin")) {
      button.style.backgroundColor = "#0077b5";
      button.style.color = "white";
    }
  });
});
