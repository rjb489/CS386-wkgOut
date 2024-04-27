// Retrieve the session ID from localStorage
const sessionId = localStorage.getItem('sessionId');

// get the user
fetch('https://weebworkout.com:3000/data',{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        // Include the session ID in the request headers
        'Authorization': `Bearer ${sessionId}`
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
    // Create a new list item
    var exerciseItem = document.createElement("li");

    // Construct the exercise details string
    var exerciseDetails = `
        <strong>${exercise.name}</strong><br>
        Reps: ${exercise.reps}<br>
        Sets: ${exercise.sets}<br>
    `;

    // Add duration if it exists
    if (exercise.duration) {
        exerciseDetails += `Duration: ${exercise.duration}<br>`;
    }

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

    // Create an object to represent the exercise
    var exercise = {
        name: exerciseName,
        reps: reps,
        sets: sets
    };

    // Add the exercise to the "Workouts You Have Created" section
    addExerciseToWorkoutsList(exercise);

    // Clear the form inputs
    document.getElementById("exerciseName").value = "";
    document.getElementById("reps").value = "";
    document.getElementById("sets").value = "";
});
