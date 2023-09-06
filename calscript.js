const calendarBody = document.getElementById('calendar-body');
const monthYearElement = document.getElementById('month-year');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentDate = new Date();

function generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthYearElement.textContent = `${monthNames[month]} ${year}`;

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

generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
});


const uploadInput = document.getElementById('upload-input');
const previewImage = document.getElementById('preview-image');
const changeBtn = document.getElementById('change-btn');
const deleteBtn = document.getElementById('delete-btn');

// Function to handle image selection and display it on the webpage
function handleImageSelect(event) {
    const image = event.target.files[0];

    if (image) {
        const reader = new FileReader();

        reader.onload = function () {
            previewImage.src = reader.result;
        };

        reader.readAsDataURL(image);
    }
}

uploadInput.addEventListener('change', handleImageSelect);

// Function to handle the "Change Image" button click event
function handleChangeImage() {
    uploadInput.click();
}

changeBtn.addEventListener('click', handleChangeImage);

// Function to handle the "Delete Image" button click event
function handleDeleteImage() {
    previewImage.src = 'default-image.jpg';
    uploadInput.value = '';
}

deleteBtn.addEventListener('click', handleDeleteImage);
