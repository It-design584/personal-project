function showMoreInfo() {
    alert("Thank you for reaching out"
}














// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('contactForm');
//     const formMessage = document.getElementById('formMessage');
    
//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the default form submission
        
//         // Get form data
//         const formData = new FormData(form);
//         const formValues = Object.fromEntries(formData.entries());
        
//         // Basic validation
//         if (!validateEmail(formValues.Email)) {
//             showMessage('Please enter a valid email address', 'error');
//             return;
//         }
        
//         // Disable the submit button during submission
//         const submitButton = form.querySelector('button[type="submit"]');
//         const originalButtonText = submitButton.textContent;
//         submitButton.disabled = true;
//         submitButton.textContent = 'Submitting...';
        
//         // Simulate form submission (replace with actual API call)
//         setTimeout(() => {
//             // Log form data to console (for demonstration)
//             console.log('Form submitted with data:', formValues);
            
//             // Show success message
//             showMessage('Thank you for your message! We will get back to you soon.', 'success');
            
//             // Reset the form
//             form.reset();
            
//             // Re-enable the submit button
//             submitButton.disabled = false;
//             submitButton.textContent = originalButtonText;
//         }, 1500);
//     });
    
//     // Helper function to validate email
//     function validateEmail(email) {
//         const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return re.test(String(email).toLowerCase());
//     }
    
//     // Helper function to show messages
//     function showMessage(message, type) {
//         formMessage.textContent = message;
//         formMessage.className = 'form-message';
//         formMessage.classList.add(type);
        
//         // Auto-hide the message after 5 seconds
//         setTimeout(() => {
//             formMessage.style.display = 'none';
//             setTimeout(() => {
//                 formMessage.className = 'form-message';
//             }, 300);
//         }, 5000);
//     }
// });