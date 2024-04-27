// Retrieve the session ID from localStorage
const sessionId = localStorage.getItem('sessionId');

// get the user
fetch('https://weebworkout.com:3000/data',{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        // Include the session ID in the request headers
        'Authorization': `${sessionId}`
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log('Response from server:', data);
    // Check if the request was successful and handle the response data
})
.catch(error => console.error('Error:', error));



// Function to add a new exercise to the "Workouts You Have Created" section
function addExerciseToWorkoutsList(exercise) {
    // Create a unique identifier for the workout
    var workoutId = "workout_" + Date.now(); // Generating a timestamp-based ID

    // Create a new list item
    var exerciseItem = document.createElement("li");

    // Add a class to the list item for styling
    exerciseItem.className = "workout-item"; // Define a class name for workout items

    // Construct the exercise details string
    var exerciseDetails = `
        <strong>${exercise.name}</strong><br>
        Reps: ${exercise.reps}<br>
        Sets: ${exercise.sets}<br>
        Weekday: ${exercise.weekday}<br>
    `;

    // Set the unique identifier as the ID of the list item
    exerciseItem.id = workoutId;

    // Set the inner HTML of the list item with exercise details
    exerciseItem.innerHTML = exerciseDetails;

    // Append the exercise item to the workouts list
    var workoutsList = document.getElementById("createdWorkoutsList");
    workoutsList.appendChild(exerciseItem);
}

// Event listener for the "Add Exercise" form submission
document.getElementById("createOwnWorkoutForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get input values
    var exerciseName = document.getElementById("exerciseName").value;
    var reps = document.getElementById("reps").value;
    var sets = document.getElementById("sets").value;
    var weekday = document.getElementById("weekday").value; // Get the weekday input

    // Create an object to represent the exercise
    var exercise = {
        name: exerciseName,
        reps: reps,
        sets: sets,
        weekday: weekday // Add the weekday property to the exercise object
    };

    // Add the exercise to the "Workouts You Have Created" section
    addExerciseToWorkoutsList(exercise);

    // Clear the form inputs
    document.getElementById("exerciseName").value = "";
    document.getElementById("reps").value = "";
    document.getElementById("sets").value = "";
    document.getElementById("weekday").value = ""; // Clear the weekday input
});
