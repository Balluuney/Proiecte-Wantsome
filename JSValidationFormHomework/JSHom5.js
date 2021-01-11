const errorFunction = () => {
  let user = document.getElementById("username");
  let email = document.getElementById("email");
  let firstName = document.getElementById("first_name");
  let lastName = document.getElementById("last_name");
  let phoneNumber = document.getElementById("phone_number");
  let userError = document.getElementById("error_message");
  let emailError = document.getElementById("email_error");
  let nameError = document.getElementById("name_error");
  let lastNameError = document.getElementById("lastname_error");
  let phoneError = document.getElementById("phone_error");
  let userText;
  let emailText;
  let firstNameText;
  let lastNameText;
  let phoneNumberText;

  if (user.value.length <= 3) {
    userError.style.height = "25px";
    userError.style.width = "350px";
    userText = "Please enter a username.";
    userError.innerHTML = userText;
    return false;
  }

  if (email.value.indexOf("@") == -1 || email.value.length <= 3) {
    emailError.style.height = "25px";
    emailError.style.width = "350px";
    emailText = "Please enter a valid email address.";
    emailError.innerHTML = emailText;
    return false;
  }

  if (firstName.value.length <= 3) {
    nameError.style.height = "25px";
    nameError.style.width = "350px";
    firstNameText = "Please enter a First Name.";
    nameError.innerHTML = firstNameText;
    return false;
  }

  if (lastName.value.length <= 3) {
    lastNameError.style.height = "25px";
    lastNameError.style.width = "350px";
    lastNameText = "Please enter a Last Name.";
    lastNameError.innerHTML = lastNameText;

    return false;
  }

  if (isNaN(phoneNumber.value) || phoneNumber.value.length != 10) {
    phoneError.style.height = "25px";
    phoneError.style.width = "350px";
    phoneNumberText = "Please enter a Phone Number.";
    phoneError.innerHTML = phoneNumberText;

    return false;
  } else {
    return true;
  }

  return false;
};
