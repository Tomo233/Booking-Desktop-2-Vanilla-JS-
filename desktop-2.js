// Selecting
let loginPopUp = document.querySelector("#login-section");
let loginBtn = document.querySelector(".search-btn");
let inputs = document.querySelectorAll(".login-input");
let overlay = document.querySelector(".overlay");
let errorP = document.querySelectorAll(".error-p");
let firstErrorP = document.querySelector("#error-p-1");
let secondErrorP = document.querySelector("#error-p-2");

// Openning Login Pop up
loginBtn.addEventListener("click", () => {
  loginPopUp.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

// Closing Login Pop up With ESC
window.addEventListener("keydown", function (e) {
  let code = e.keyCode;
  switch (code) {
    case 27:
      loginPopUp.classList.toggle("hidden");
      overlay.classList.toggle("hidden");
  }
});

inputs.forEach((input) => {
  input.addEventListener("change", function (e) {
    let currentInputValue = e.target.value;
    let currentInput = e.target.id;

    switch (currentInput) {
      case "email-input":
        if (
          validateEmail(currentInputValue) === false ||
          currentInputValue.length < 5
        ) {
          firstErrorP.textContent = "neispravna email adresa";
        } else {
          firstErrorP.textContent = "";
        }
        break;
      case "password-input":
        if (currentInputValue.length < 5) {
          secondErrorP.textContent = "Prekratka Lozinka";
        } else {
          secondErrorP.textContent = "";
        }
    }
  });
});

const validateEmail = (email) => {
  if (
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      email
    )
  ) {
    return true;
  }
  return false;
};
