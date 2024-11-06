// Selecting form and resume elements
var resumeForm = document.getElementById('resumeForm');
var resumeSection = document.getElementById('resume');
var displayProfilePicture = document.createElement('img'); // Create img element
var profilePictureInput = document.getElementById('profilePicture');
var displayName = document.getElementById('displayName');
var displayEmail = document.getElementById('displayEmail');
var displayPhone = document.getElementById('displayPhone');
var displayDateOfBirth = document.getElementById('displayDateOfBirth');
var displayEducation = document.querySelector('#displayEducation p');
var displayExperience = document.querySelector('#displayExperience p');
var displaySkills = document.querySelector('#displaySkills ul');
// Function to load the image from file input and append it dynamically
function loadImageAndAppend() {
    var input = profilePictureInput;
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target && e.target.result) {
                displayProfilePicture.src = e.target.result; // Set the image source
                displayProfilePicture.style.display = 'block'; // Ensure the image is visible
                displayProfilePicture.style.width = '150px'; // Optional: Set a fixed width for the image
                displayProfilePicture.style.height = '150px'; // Maintain the aspect ratio
                // Insert the profile picture at the top of the resume
                var resumeHeader = document.querySelector('#resume header');
                if (resumeHeader) {
                    resumeHeader.insertBefore(displayProfilePicture, resumeHeader.firstChild);
                }
            }
        };
        reader.readAsDataURL(input.files[0]); // Read the image file
    }
}
// Form submission to generate resume
function generateResume(event) {
    event.preventDefault(); // Prevent form refresh
    // Load and append the image when the resume is generated
    loadImageAndAppend();
    // Get values from the form inputs
    var nameInput = document.getElementById('name').value;
    var emailInput = document.getElementById('email').value;
    var phoneInput = document.getElementById('phone').value;
    var dobInput = document.getElementById('DateOfBirth').value;
    var educationInput = document.getElementById('education').value;
    var experienceInput = document.getElementById('experience').value;
    var skillsInput = document.getElementById('skills').value.split('&');
    // Display the inputs in the resume
    displayName.textContent = nameInput;
    displayEmail.textContent = "Email: ".concat(emailInput);
    displayPhone.textContent = "Phone: ".concat(phoneInput);
    displayDateOfBirth.textContent = "Date of Birth: ".concat(dobInput);
    displayEducation.textContent = educationInput;
    displayExperience.textContent = experienceInput;
    // Clear previous skills and add new ones
    displaySkills.innerHTML = '';
    skillsInput.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        displaySkills.appendChild(li);
    });
    // Show the resume section
    resumeSection.style.display = 'block';
}
// Attach event listener to the form submission
resumeForm.addEventListener('submit', generateResume);
