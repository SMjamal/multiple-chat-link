// Optional JavaScript for interactivity, like tracking button clicks
document.querySelectorAll('.whatsapp-button').forEach(button => {
    button.addEventListener('click', function() {
      console.log(`Clicked on: ${this.getAttribute('data-button')}`);
      // Add additional logic if needed
    });
  });
  