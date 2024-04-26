// testing for fetching
fetch('https://weebworkout.com:3000/checkSessionData', {
  method: 'GET',
  credentials: 'include' // Important for sending cookies (session data)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Assuming the response contains JSON data
  })
  .then(data => {
    console.log('Session data:', data); // Log the session data received from the server
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// fetch using fetch API to get session info
/*
fetch('https://weebworkout.com:3000/getSessionData')
    .then(response => response.json())
    .then(data => {
        // Handle received session data
        console.log('Successful he is data:',data);
    })
    .catch(error => {
        console.error('Error fetching session data:', error);
    });
*/




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
