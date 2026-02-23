function showMessage() {
  document.getElementById("messageArea").textContent =
    "You just interacted with this web page🎉";
}


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  document.getElementById("formResponse").textContent =
    "Thank you, " + name + "! Your message has been received.";

  this.reset();
});
