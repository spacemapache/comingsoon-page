function submitBtn() {
  event.preventDefault();
  let email = document.getElementById("emailInput").value;

  if ((email === "") | !email.includes("@")) {
    alert("Please fill in your email");
    return false;
  } else {
    alert("You're subscribed!");
  }
}
