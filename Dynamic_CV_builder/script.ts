// Selecting form and resume elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeSection = document.getElementById('resume') as HTMLElement;
const displayProfilePicture = document.createElement('img'); // Create img element
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
const displayName = document.getElementById('displayName') as HTMLElement;
const displayEmail = document.getElementById('displayEmail') as HTMLElement;
const displayPhone = document.getElementById('displayPhone') as HTMLElement;
const displayDateOfBirth = document.getElementById('displayDateOfBirth') as HTMLElement;
const displayEducation = document.querySelector('#displayEducation p') as HTMLElement;
const displayExperience = document.querySelector('#displayExperience p') as HTMLElement;
const displaySkills = document.querySelector('#displaySkills ul') as HTMLElement;

// Function to load the image from file input and append it dynamically
function loadImageAndAppend(): void {
  const input = profilePictureInput;

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e: ProgressEvent<FileReader>) {
      if (e.target && e.target.result) {
        displayProfilePicture.src = e.target.result as string; // Set the image source
        displayProfilePicture.style.display = 'block'; // Ensure the image is visible
        displayProfilePicture.style.width = '150px'; // Optional: Set a fixed width for the image
        displayProfilePicture.style.height = '150px'; // Maintain the aspect ratio

        // Insert the profile picture at the top of the resume
        const resumeHeader = document.querySelector('#resume header');
        if (resumeHeader) {
          resumeHeader.insertBefore(displayProfilePicture, resumeHeader.firstChild);
        }
      }
    };

    reader.readAsDataURL(input.files[0]); // Read the image file
  }
}

// Form submission to generate resume
function generateResume(event: Event): void {
  event.preventDefault(); // Prevent form refresh

  // Load and append the image when the resume is generated
  loadImageAndAppend();

  // Get values from the form inputs
  const nameInput = (document.getElementById('name') as HTMLInputElement).value;
  const emailInput = (document.getElementById('email') as HTMLInputElement).value;
  const phoneInput = (document.getElementById('phone') as HTMLInputElement).value;
  const dobInput = (document.getElementById('DateOfBirth') as HTMLInputElement).value;
  const educationInput = (document.getElementById('education') as HTMLInputElement).value;
  const experienceInput = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skillsInput = (document.getElementById('skills') as HTMLTextAreaElement).value.split('&');

  // Display the inputs in the resume
  displayName.textContent = nameInput;
  displayEmail.textContent = `Email: ${emailInput}`;
  displayPhone.textContent = `Phone: ${phoneInput}`;
  displayDateOfBirth.textContent = `Date of Birth: ${dobInput}`;
  displayEducation.textContent = educationInput;
  displayExperience.textContent = experienceInput;

  // Clear previous skills and add new ones
  displaySkills.innerHTML = '';
  skillsInput.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill.trim();
    displaySkills.appendChild(li);
  });

  // Show the resume section
  resumeSection.style.display = 'block';
}

// Attach event listener to the form submission
resumeForm.addEventListener('submit', generateResume);
