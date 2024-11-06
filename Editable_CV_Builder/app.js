// Collect form elements
var form = document.getElementById('resume-form');
var generateButton = document.getElementById('generate-resume');
var resumePopup = document.getElementById('resume-popup');
var generatedResume = document.getElementById('generated-resume');
var editButton = document.getElementById('edit-resume');
// Input elements
var pictureInput = document.getElementById('profilePicture');
var nameInput = document.getElementById('name');
var dobInput = document.getElementById('dob');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var experienceInput = document.getElementById('experience');
var workInput = document.getElementById('work');
var skillsInput = document.getElementById('skills');
// Function to generate resume
generateButton.addEventListener('click', function () {
    // Retrieve input values
    var _a;
    var name = nameInput.value;
    var dob = dobInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var experience = experienceInput.value;
    var work = workInput.value;
    var skills = skillsInput.value;
    // Hide the form and show the resume popup
    form.classList.add('hidden');
    resumePopup.classList.remove('hidden');
    // Get the uploaded profile picture file, if any, and create a URL to display it
    var picturefile = (_a = pictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = picturefile ? URL.createObjectURL(picturefile) : '';
    // Create the resume display in HTML and insert it into the DOM
    generatedResume.innerHTML = "\n    <div class=\"resume-section\">\n  \n <img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\" >\n      <h3 contenteditable=\"true\" class=\"para\">Name:").concat(name, "</h3>\n      <p contenteditable=\"true\" class=\"para\">Date of Birth: ").concat(dob, "</p>\n      <p contenteditable=\"true\" class=\"para\">Email: ").concat(email, "</p>\n      <p contenteditable=\"true\" class=\"para\">Phone: ").concat(phone, "</p>\n      <h2 id=\"heading\">Experience</h2>\n      <p contenteditable=\"true\" class=\"para\">").concat(experience, "</p>\n      <h2 id=\"heading\">Work</h2>\n      <p contenteditable=\"true\" class=\"para\">").concat(work, "</p>\n      <h2 id=\"heading\">Skills</h2>\n      <p contenteditable=\"true\" class=\"para\">").concat(skills, "</p>\n    </div>\n  ");
});
// Edit functionality
editButton.addEventListener('click', function () {
    var _a, _b, _c, _d, _e, _f, _g;
    // Collect values from the generated resume to allow editing
    var editedName = (_a = generatedResume.querySelector('h3')) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var editedDob = (_b = generatedResume.querySelector('p:nth-child(2)')) === null || _b === void 0 ? void 0 : _b.innerHTML.replace('Date of Birth: ', '');
    var editedEmail = (_c = generatedResume.querySelector('p:nth-child(3)')) === null || _c === void 0 ? void 0 : _c.innerHTML.replace('Email: ', '');
    var editedPhone = (_d = generatedResume.querySelector('p:nth-child(4)')) === null || _d === void 0 ? void 0 : _d.innerHTML.replace('Phone: ', '');
    var editedExperience = (_e = generatedResume.querySelector('p:nth-child(6)')) === null || _e === void 0 ? void 0 : _e.innerHTML;
    var editedWork = (_f = generatedResume.querySelector('p:nth-child(8)')) === null || _f === void 0 ? void 0 : _f.innerHTML;
    var editedSkills = (_g = generatedResume.querySelector('p:nth-child(10)')) === null || _g === void 0 ? void 0 : _g.innerHTML;
    // Populate the form fields with the edited values
    nameInput.value = editedName || '';
    dobInput.value = editedDob || '';
    emailInput.value = editedEmail || '';
    phoneInput.value = editedPhone || '';
    experienceInput.value = editedExperience || '';
    workInput.value = editedWork || '';
    skillsInput.value = editedSkills || '';
    // Hide resume popup and show the form again
    resumePopup.classList.add('hidden');
    form.classList.remove('hidden');
});
