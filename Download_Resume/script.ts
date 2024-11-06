// Assign elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const generateButton = document.getElementById('generate-resume') as HTMLButtonElement;
const resumePopup = document.getElementById('resume-popup') as HTMLElement;
const generatedResume = document.getElementById('generated-resume') as HTMLElement;

const shareButton = document.getElementById('share-link') as HTMLButtonElement;
const editButton = document.getElementById('edit-resume') as HTMLButtonElement;

const pictureInput = document.getElementById('profilePicture') as HTMLInputElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const dobInput = document.getElementById('dob') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;

// Generate resume
generateButton.addEventListener('click', () => {
  const profilePictureURL = pictureInput.files?.[0] ? URL.createObjectURL(pictureInput.files[0]) : '';
  generatedResume.innerHTML = `
    <div class="resume-section">
      <img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">
      <br />
       <br />
      <h3 contenteditable="true">Name: ${nameInput.value}</h3>
          <br/>
      <p contenteditable="true">Date of Birth: ${dobInput.value}</p>
          <br/>
      <p contenteditable="true">Email: ${emailInput.value}</p>
        <br/>
      <p contenteditable="true">Phone: ${phoneInput.value}</p>
          <br/>
      <h2>Education</h2><p contenteditable="true">${educationInput.value}</p>
          <br/>
      <h2>Experience</h2><p contenteditable="true">${experienceInput.value}</p>
          <br/>
      <h2>Skills</h2><p contenteditable="true">${skillsInput.value}</p>
      
    </div>`;
  form.classList.add('hidden');
  resumePopup.classList.remove('hidden');
});

// Download as PDF
document.getElementById('download-pdf')?.addEventListener('click', () => {
    // Hide the form temporarily
    form.style.display = 'none';
    editButton.style.display = 'none';
    // Print the page
    window.print();
  
    // Show the form again after printing
    form.style.display = 'block';
    editButton.style.display = 'block';
  });
   

// Shareable link
shareButton.addEventListener('click', () => {
  const params = new URLSearchParams({
    name: nameInput.value,
    dob: dobInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    education: educationInput.value,
    experience: experienceInput.value,
    skills: skillsInput.value,
  });
  const link = `${window.location.origin}?${params.toString()}`;
  navigator.clipboard.writeText(link).then(() => alert('Link copied!')).catch(console.error);
});

// Edit resume
editButton.addEventListener('click', () => {
  const getText = (selector: string) => (generatedResume.querySelector(selector) as HTMLElement)?.innerText || '';
  nameInput.value = getText('h3');
  dobInput.value = getText('p:nth-child(2)').replace('Date of Birth: ', '');
  emailInput.value = getText('p:nth-child(3)').replace('Email: ', '');
  phoneInput.value = getText('p:nth-child(4)').replace('Phone: ', '');
  educationInput.value = getText('p:nth-child(6)');
  experienceInput.value = getText('p:nth-child(8)');
  skillsInput.value = getText('p:nth-child(10)');
  resumePopup.classList.add('hidden');
  form.classList.remove('hidden');
});
