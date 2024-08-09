// style.js 
function validate() { 
    let nom = 
        document.getElementById("nom").value; 
    let prénom = 
        document.getElementById("prénom").value; 
    let Télèphone = 
        document.getElementById("Télèphone").value; 
    let email = 
        document.getElementById("email").value; 
    let Password = 
        document.getElementById("psw").value; 
    let errors = []; 
  
    if (name.length < 5) { 
        errors.push("Please Enter a valid Name");} 
    if (subject.length < 10) { 
        errors.push("Please Enter a Correct Subject");} 
    if (isNaN(phone) || phone.length != 10) { 
        errors.push("Please Enter a valid Phone Number");} 
    if (email.indexOf("@") == -1 || email.length < 6) { 
        errors.push( 
            "Please Enter a valid Email");} 
    if (message.length <= 40) { 
        errors.push( 
            "Please Enter More Than 40 Characters");} 
  
    if (errors.length > 0) { 
        error_message.innerHTML = 
            errors.join("<br>"); 
        return false;} 
    else { 
        alert( 
            "Form Submitted Successfully!"); 
        return true;}
		}

// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Get the cart count element
const cartCountElement = document.getElementById('cart_count');

// Initialize a cart count variable
let cartCount = 0;

// Add click event listeners to each "Add to Cart" button
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Increment the cart count
        cartCount++;

        // Update the cart count element in the UI
        cartCountElement.textContent = cartCount;
    });
});
      