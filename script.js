function revealSignUp() {
  console.log("logged");
  document.getElementById("login").style.display = "none";
  document.getElementById("signUp").style.display = "flex";
}
function revealSignIn() {
  console.log("logged");
  document.getElementById("login").style.display = "flex";
  document.getElementById("signUp").style.display = "none";
}
