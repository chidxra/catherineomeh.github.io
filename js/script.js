function getEmail() {
  // Get the text field
  var copyText = "omehcatherine@gmail.com";

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("My email has been copied to your clipboard!");
}
