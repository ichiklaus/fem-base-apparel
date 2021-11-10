const MAIL_FORMAT = /(\S+)@(\S+)\.(\S+)/;

const btnSubmit = document.querySelector("#submit-email");
const emailBox = document.querySelector("#email");
const errorIcon = document.querySelector(".error-icon");
const invalidText = document.querySelector(".invalid");

btnSubmit.addEventListener("click", validateMail);

function validateMail() {
  if (emailBox.value.match(MAIL_FORMAT)) {
    invalidText.classList.add("hidden");
    errorIcon.classList.add("hidden");    
  } else if (!emailBox.value.match(MAIL_FORMAT) || emailBox.value === "") {
    invalidText.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
    emailBox.style.border = "2px solid var(--soft-red)"
  }
}
