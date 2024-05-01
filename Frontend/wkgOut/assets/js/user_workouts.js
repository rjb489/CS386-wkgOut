// Retrieve the session ID from localStorage
//const sessionId = localStorage.getItem('sessionId');
const sessionIds = localStorage.getItem('sessionId');
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


for(let index = 0; index < daysOfWeek.length; index++)
   {
    // call the getWorkouts for each day of the week
    getWorkouts(sessionIds,daysOfWeek[index]);
   }

/*
Function: getWorkouts
Definition: will get a list of workout and display in depending
on the sessionId and the day of the week entered
*/

function getWorkouts(sessionId,dayOfWeek)
   {
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
        displayWorkouts(workoutData,dayOfWeek);

        // Check if the request was successful and handle the response data
    })
    .catch(error => console.error('Error:', error));

   }





// here is where we will add the data to the page

function displayWorkouts(workoutData,dayOfWeek)
   {

    // append the dayOfWeek to end of workouts-container
    const containerWithDay = 'workouts-container-' + dayOfWeek;

// Reference the container where workouts will be displayed
const workoutsContainer = document.getElementById(containerWithDay);

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
        <button class="delete-btn" data-workout-id="${workout.id}" >Delete</button>
    `;

    // Set the HTML content of the workout div
    workoutDiv.innerHTML = workoutHTML;

    // Append the workout div to the container
    workoutsContainer.appendChild(workoutDiv);

    const deleteBtn = workoutDiv.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            event.preventDefault();

            const workoutId = deleteBtn.getAttribute('data-workout-id');
            // Call a function to handle deletion of the workout
            deleteWorkout(workoutId);
        });

});
   }


function deleteWorkout(workoutId) 
   {


    // Make a fetch request to delete the workout
    fetch('https://weebworkout.com:3000/deleteExerciseById', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Include the workoutId in the request headers
        },

        body: JSON.stringify({ workoutId: workoutId }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete workout');
        }
        console.log("Workout deleted successfully");

    })
    .catch(error => console.error('Error:', error));

    // Log the workout id to test
    console.log("Workout will be deleted:", workoutId);


    const deleteBtn = document.querySelector(`[data-workout-id="${workoutId}"]`);
    const workoutContainer = deleteBtn.closest('.workout');

    // Check if the workout div exists
    if (workoutContainer) {
        // Remove the workout div from the DOM
        workoutContainer.remove();
    } else {
        console.warn(`Workout container with ID ${workoutId} not found.`);
    }
    
   } 
