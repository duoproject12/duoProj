var emailError = $("#email_error");
var passError = $("#pass_error");
emailError.hide();
passError.hide();
$("#loginButton").on("click", function () {
  var email = $("#email").val();
  var password = $("#password").val();
  var emailValid = email.length >= 8;
  var passwordValid = password.length >= 8;
  if (!emailValid && email.length > 0) {
    emailError.show();
  }

  if (!passwordValid && password.length > 0) {
    passError.show();
  }

  {
    if (emailValid && passwordValid && $("#checkbox").is(":checked")) {
      window.location.href = "/bank/bank.html";
    }
  }
});
