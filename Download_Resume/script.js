var _a;
// Assign elements
var form = document.getElementById('resume-form');
var generateButton = document.getElementById('generate-resume');
var resumePopup = document.getElementById('resume-popup');
var generatedResume = document.getElementById('generated-resume');
var shareButton = document.getElementById('share-link');
var editButton = document.getElementById('edit-resume');
var pictureInput = document.getElementById('profilePicture');
var nameInput = document.getElementById('name');
var dobInput = document.getElementById('dob');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var educationInput = document.getElementById('education');
var experienceInput = document.getElementById('experience');
var skillsInput = document.getElementById('skills');
// Generate resume
generateButton.addEventListener('click', function () {
    var _a;
    var profilePictureURL = ((_a = pictureInput.files) === null || _a === void 0 ? void 0 : _a[0]) ? URL.createObjectURL(pictureInput.files[0]) : '';
    generatedResume.innerHTML = "\n    <div class=\"resume-section\">\n      <img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">\n      <br />\n       <br />\n      <h3 contenteditable=\"true\">Name: ").concat(nameInput.value, "</h3>\n          <br/>\n      <p contenteditable=\"true\">Date of Birth: ").concat(dobInput.value, "</p>\n          <br/>\n      <p contenteditable=\"true\">Email: ").concat(emailInput.value, "</p>\n        <br/>\n      <p contenteditable=\"true\">Phone: ").concat(phoneInput.value, "</p>\n          <br/>\n      <h2>Education</h2><p contenteditable=\"true\">").concat(educationInput.value, "</p>\n          <br/>\n      <h2>Experience</h2><p contenteditable=\"true\">").concat(experienceInput.value, "</p>\n          <br/>\n      <h2>Skills</h2><p contenteditable=\"true\">").concat(skillsInput.value, "</p>\n      \n    </div>");
    form.classList.add('hidden');
    resumePopup.classList.remove('hidden');
});
// Download as PDF
(_a = document.getElementById('download-pdf')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
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
shareButton.addEventListener('click', function () {
    var params = new URLSearchParams({
        name: nameInput.value,
        dob: dobInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        education: educationInput.value,
        experience: experienceInput.value,
        skills: skillsInput.value,
    });
    var link = "".concat(window.location.origin, "?").concat(params.toString());
    navigator.clipboard.writeText(link).then(function () { return alert('Link copied!'); }).catch(console.error);
});
// Edit resume
editButton.addEventListener('click', function () {
    var getText = function (selector) { var _a; return ((_a = generatedResume.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.innerText) || ''; };
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
