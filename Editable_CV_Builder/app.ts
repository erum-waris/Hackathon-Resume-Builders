// Collect form elements
const form = document.getElementById("resume-form") as HTMLFormElement;
const generateButton = document.getElementById(
  "generate-resume"
) as HTMLButtonElement;
const resumePopup = document.getElementById("resume-popup") as HTMLElement;
const generatedResume = document.getElementById(
  "generated-resume"
) as HTMLElement;
const editButton = document.getElementById("edit-resume") as HTMLButtonElement;

// Input elements
const pictureInput = document.getElementById(
  "profilePicture"
) as HTMLInputElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const dobInput = document.getElementById("dob") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;

const experienceInput = document.getElementById(
  "experience"
) as HTMLInputElement;
const workInput = document.getElementById("work") as HTMLInputElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;

// Function to generate resume
generateButton.addEventListener("click", () => {
  // Retrieve input values

  const name = nameInput.value;
  const dob = dobInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;

  const experience = experienceInput.value;
  const work = workInput.value;
  const skills = skillsInput.value;

  // Hide the form and show the resume popup
  form.classList.add("hidden");
  resumePopup.classList.remove("hidden");

  // Get the uploaded profile picture file, if any, and create a URL to display it

  const picturefile = pictureInput.files?.[0];

  const profilePictureURL = picturefile ? URL.createObjectURL(picturefile) : "";
  // Create the resume display in HTML and insert it into the DOM
  generatedResume.innerHTML = `
    <div class="resume-section">
  
 <img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture" >
      <h3 contenteditable="true" class="para">Name:${name}</h3>
      <p contenteditable="true" class="para">Date of Birth: ${dob}</p>
      <p contenteditable="true" class="para">Email: ${email}</p>
      <p contenteditable="true" class="para">Phone: ${phone}</p>
      <h2 id="heading">Experience</h2>
      <p contenteditable="true" class="para">${experience}</p>
      <h2 id="heading">Work</h2>
      <p contenteditable="true" class="para">${work}</p>
      <h2 id="heading">Skills</h2>
      <p contenteditable="true" class="para">${skills}</p>
    </div>
  `;
});

// Edit functionality
editButton.addEventListener("click", () => {
  // Collect values from the generated resume to allow editing
  const editedName = generatedResume.querySelector("h3")?.innerHTML;
  const editedDob = generatedResume
    .querySelector("p:nth-child(2)")
    ?.innerHTML.replace("Date of Birth: ", "");
  const editedEmail = generatedResume
    .querySelector("p:nth-child(3)")
    ?.innerHTML.replace("Email: ", "");
  const editedPhone = generatedResume
    .querySelector("p:nth-child(4)")
    ?.innerHTML.replace("Phone: ", "");
  const editedExperience =
    generatedResume.querySelector("p:nth-child(6)")?.innerHTML;
  const editedWork = generatedResume.querySelector("p:nth-child(8)")?.innerHTML;
  const editedSkills =
    generatedResume.querySelector("p:nth-child(10)")?.innerHTML;

  // Populate the form fields with the edited values
  nameInput.value = editedName || "";
  dobInput.value = editedDob || "";
  emailInput.value = editedEmail || "";
  phoneInput.value = editedPhone || "";
  experienceInput.value = editedExperience || "";
  workInput.value = editedWork || "";
  skillsInput.value = editedSkills || "";

  // Hide resume popup and show the form again
  resumePopup.classList.add("hidden");
  form.classList.remove("hidden");
});
