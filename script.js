function sendToWhatsApp() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var phone = "2348035150850"; // your number

  var text =
    "New message from MoodMuse:\n\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Message: " + message;

  var url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);

  window.open(url, "_blank");
}