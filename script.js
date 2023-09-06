// Add a click event listener to the hamburger icon
document.querySelector('.hamburger-icon').addEventListener('click', () => {
    const navlinks = document.getElementById('fas fa-bars');
    navlinks.classList.toggle('active');
});

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('active');
}


document.querySelector(".submit-rating").addEventListener("click", function () {
    const rating = document.querySelector('input[name="rating"]:checked').value;
    // Save the rating to your backend or handle it as needed
    alert("Thank you for your rating!");
});

document.querySelector(".submit-comment").addEventListener("click", function () {
    const name = document.querySelector(".comment-form input").value;
    const comment = document.querySelector(".comment-form textarea").value;
    // Save the comment to your backend or handle it as needed
    // Then, add the comment to the comments list
    const commentList = document.querySelector(".comments-list");
    const newComment = document.createElement("div");
    newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
    commentList.appendChild(newComment);
    document.querySelector(".comment-form input").value = "";
    document.querySelector(".comment-form textarea").value = "";
});

// Function to generate the calendar for a given month and year
function generateCalendar(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthCaption = document.getElementById("month-caption");
    monthCaption.textContent = monthNames[month] + " " + year;

    const calendarBody = document.getElementById("calendar-body");
    calendarBody.innerHTML = "";

    let date = 1;
    for (let week = 0; week < 6; week++) {
        const row = document.createElement("tr");
        for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
            if ((week === 0 && dayOfWeek < firstDay) || date > daysInMonth) {
                row.innerHTML += "<td></td>";
            } else {
                row.innerHTML += "<td>" + date + "</td>";
                date++;
            }
        }
        calendarBody.appendChild(row);
    }
}

// Get the current date and generate the calendar for the current month
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
generateCalendar(currentYear, currentMonth);


// Function to handle image selection and display it on the webpage
function handleImageSelect(event) {
    const image = event.target.files[0];
    const imageElement = document.getElementById('user-image');

    if (image) {
        const reader = new FileReader();

        // Load the selected image as a data URL
        reader.onload = function () {
            imageElement.src = reader.result;
        };

        reader.readAsDataURL(image);
    }
}

// Function to handle image selection and display it on the webpage
function handleImageSelect(event) {
    const image = event.target.files[0];
    const imageElement = document.getElementById('user-image');

    if (image) {
        const reader = new FileReader();

        // Load the selected image as a data URL
        reader.onload = function () {
            imageElement.src = reader.result;
        };

        reader.readAsDataURL(image);
    }
}

const uploadImageInput = document.getElementById('upload-image');
uploadImageInput.addEventListener('change', handleImageSelect);

// Function to handle the "Change Image" button click event
function handleChangeImage() {
    uploadImageInput.click();
}

const changeImageButton = document.getElementById('change-image-btn');
changeImageButton.addEventListener('click', handleChangeImage);


