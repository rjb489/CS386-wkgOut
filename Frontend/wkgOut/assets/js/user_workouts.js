// Retrieve the session ID from localStorage
const sessionId = localStorage.getItem('sessionId');
const dayOfWeek = 'Monday';

// save workout data
let workoutData;

// set the headers
const headers = {
    'Content-Type': 'application/json',
};

const url = new URL('https://weebworkout.com:3000/workouts');
url.searchParams.append('sessionId', sessionId);
url.searchParams.append('dayOfWeek', dayOfWeek);

// get the user
fetch(url,{
    method: 'GET',
    headers: headers,
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    //save the workouts to a variable
    workoutData = data.workouts;

    console.log('Response from server:', workoutData);

    // call the function to create a workotu
    displayWorkouts(workoutData);

    // Check if the request was successful and handle the response data
})
.catch(error => console.error('Error:', error));



// here is where we will add the data to the page

function displayWorkouts(workoutData)
   {

    // Assuming workoutsData contains the array of workouts fetched from the server

// Reference the container where workouts will be displayed
const workoutsContainer = document.getElementById('workouts-container');

// Iterate over the workouts data and create HTML elements for each workout
workoutData.forEach(workout => {
    // Create a div element to represent the workout
    const workoutDiv = document.createElement('div');
    workoutDiv.classList.add('workout');

    // Create HTML content for the workout
    const workoutHTML = `
        <h2>${workout.name}</h2>
        <p><strong>Reps:</strong> ${workout.reps}</p>
        <p><strong>Sets:</strong> ${workout.sets}</p>
        <p><strong>Rest Time:</strong> ${workout.restTime}</p>
    `;

    // Set the HTML content of the workout div
    workoutDiv.innerHTML = workoutHTML;

    // Append the workout div to the container
    workoutsContainer.appendChild(workoutDiv);
});
   }

