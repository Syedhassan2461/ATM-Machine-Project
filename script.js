function validatePIN(pin) {
    var correctPIN = "1234";  // Replace with the actual PIN
  
    if (pin === correctPIN) {
      return true;
    } else {
      return false;
    }
  }
  
  function generateAlarm() {
    var audio = new Audio('audio.mp3');
    audio.play();
  }
  
  document.getElementById("submit-btn").addEventListener("click", function() {
    var pinInput = document.getElementById("pin-input");
    var pin = pinInput.value;
  
    if (pin === "") {
      alert("PIN cannot be empty.");
      return;
    }
  
    if (pin === [...pin].sort().join("") && pin !== [...pin].sort().reverse().join("")) {
      // PIN is entered in ascending order
      if (validatePIN(pin)) {
        alert("PIN is correct. Access granted.");
        // Perform further actions here, such as withdrawing money or other operations
      } else {
        alert("Incorrect PIN. Access denied.");
      }
    } else if (pin === [...pin].sort().reverse().join("")) {
      // PIN is entered in descending order
      alert("Incorrect PIN entered in descending order. Generating alarm...");
      generateAlarm();
    } else {
      alert("Invalid PIN format. PIN must be entered in either ascending or descending order.");
    }
  
    // Clear the input field after validation
    pinInput.value = "";
  });
  