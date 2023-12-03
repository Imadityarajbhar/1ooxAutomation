function makeActive(button) {
    // Remove the 'active' class from all buttons
    var buttons = document.querySelectorAll('.service-btn button');
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });

    // Add the 'active' class to the clicked button
    button.classList.add('active');
  }