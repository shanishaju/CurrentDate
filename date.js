

function getDate() {
    const fullday = new Date();

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayIndex = fullday.getUTCDay(); 
    const day = fullday.getUTCDate(); 
    console.log(day);

    const monthIndex = fullday.getUTCMonth(); 
    console.log(monthIndex);

    const year = fullday.getUTCFullYear();
    console.log(year);

    const dayName = dayNames[dayIndex];
    const monthName = monthNames[monthIndex];
     
    const dateElement = document.getElementById('date');
    if (dateElement) {
        dateElement.innerHTML = `${dayName}, ${day} ${monthName} ${year}`;
    } else {
        console.error('No element with ID "date" found.');
    }
}

getDate();
