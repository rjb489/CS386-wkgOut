//https://www.muscleandfitness.com/workouts/workout-routines/30-minute-full-body-workout/
//beginner workout 30 minutes weights
const beginnerWorkout30MinWeights = [
{ exercise: "Chest Press Machine", reps: 5, sets: 3 },
{ exercise: "Leg press", reps: 5, sets: 3 },
{ exercise: "Lateral Leg Raise", reps: 5, sets: 3 },
{ exercise: "Lat Pull Down or Seated Row", reps: 10, sets: 3 },
{ exercise: "Cable PushDown", reps: 10, sets: 3 },
{ exercise: "Preacher Curl", reps: 10, sets: 3 }
];

//https://www.coachweb.com/home-workouts/8494/a-30-minute-no-kit-home-workout-for-people-swerving-the-gym
//beginner workouts 30 min no weights
const beginnerWorkOut30MinWithoutWeights = [
    { exercise: "Mountain Climbers", duration: "30 seconds", restTime: "15 seconds" },
    { exercise: "Jump Squats", duration: "30 seconds", restTime: "15 seconds" },
    { exercise: "Bicycle Crunch", duration: "30 seconds", restTime: "15 seconds" },
    { exercise: "Reverse Lunge", duration: "30 seconds", restTime: "15 seconds" },
    { exercise: "Push up", duration: "30 seconds", restTime: "15 seconds" },
    { exercise: "Star Jump", duration: "30 seconds", restTime: "15 seconds" }
];

//beginner workouts 45 min weights
const beginnerWorkout45MinWeights = [
    { exercise: "Dumbbell Squats", reps: "12-15", sets: 3, restTime: "30 seconds" },
    { exercise: "Bent Over Rows with Dumbbells", reps: "12-15", sets: 3, restTime: "30 seconds" },
    { exercise: "Push-ups", reps: "10-12", sets: 3, restTime: "30 seconds" },
    { exercise: "Dumbbell Lunges", reps: "12-15 (each leg)", sets: 3, restTime: "30 seconds" },
    { exercise: "Dumbbell Chest Press", reps: "10-12", sets: 3, restTime: "30 seconds" },
    { exercise: "Plank", duration: "30-60 seconds", sets: 3, restTime: "30 seconds" },
    { exercise: "Bicep Curls with Dumbbells", reps: "12-15", sets: 3, restTime: "30 seconds" },
    { exercise: "Tricep Dips", reps: "10-12", sets: 3, restTime: "30 seconds" },
    { exercise: "Russian Twists with Dumbbell", reps: "20 (10 each side)", sets: 3, restTime: "30 seconds" }
];

//beginner workouts 45 min no weights
var beginnerWorkout45MinWithoutWeights = [
    { exercise: "Bodyweight Squats", reps: "15-20", sets: 3, restTime: "30 seconds" },
    { exercise: "Push-ups", reps: "10-12", sets: 3, restTime: "30 seconds" },
    { exercise: "Lunges", reps: "12-15 (each leg)", sets: 3, restTime: "30 seconds" },
    { exercise: "Mountain Climbers", reps: "20 (10 each leg)", sets: 3, restTime: "30 seconds" },
    { exercise: "Burpees", reps: "10-12", sets: 3, restTime: "30 seconds" },
    { exercise: "Plank", duration: "30-60 seconds", sets: 3, restTime: "30 seconds" },
    { exercise: "Jumping Jacks", reps: "30 seconds", sets: 3, restTime: "30 seconds" },
    { exercise: "Crunches", reps: "15-20", sets: 3, restTime: "30 seconds" },
    { exercise: "Leg Raises", reps: "12-15", sets: 3, restTime: "30 seconds" },
];

//beginner workouts 60 min weights
var beginnerWorkout60MinWithWeights = [
    { exercise: "Dumbbell Squats", reps: "12-15", sets: 4, restTime: "30 seconds" },
    { exercise: "Bent Over Rows with Dumbbells", reps: "12-15", sets: 4, restTime: "30 seconds" },
    { exercise: "Push-ups", reps: "10-12", sets: 4, restTime: "30 seconds" },
    { exercise: "Dumbbell Lunges", reps: "12-15 (each leg)", sets: 4, restTime: "30 seconds" },
    { exercise: "Dumbbell Chest Press", reps: "10-12", sets: 4, restTime: "30 seconds" },
    { exercise: "Plank", duration: "60 seconds", sets: 4, restTime: "30 seconds" },
    { exercise: "Bicep Curls with Dumbbells", reps: "12-15", sets: 4, restTime: "30 seconds" },
    { exercise: "Tricep Dips", reps: "10-12", sets: 4, restTime: "30 seconds" },
    { exercise: "Russian Twists with Dumbbell", reps: "20 (10 each side)", sets: 4, restTime: "30 seconds" },
];

//beginner workout 60 min no weights
var beginnerWorkout60MinWithoutWeights = [
    { exercise: "Bodyweight Squats", reps: "15-20", sets: 4, restTime: "30 seconds" },
    { exercise: "Push-ups", reps: "10-12", sets: 4, restTime: "30 seconds" },
    { exercise: "Lunges", reps: "12-15 (each leg)", sets: 4, restTime: "30 seconds" },
    { exercise: "Mountain Climbers", reps: "20 (10 each leg)", sets: 4, restTime: "30 seconds" },
    { exercise: "Burpees", reps: "10-12", sets: 4, restTime: "30 seconds" },
    { exercise: "Plank", duration: "60 seconds", sets: 4, restTime: "30 seconds" },
    { exercise: "Jumping Jacks", reps: "30 seconds", sets: 4, restTime: "30 seconds" },
    { exercise: "Crunches", reps: "15-20", sets: 4, restTime: "30 seconds" },
    { exercise: "Leg Raises", reps: "12-15", sets: 4, restTime: "30 seconds" },
];

var intermediate30MinWithWeights = [
    { exercise: "Goblet Squats", reps: "12-15", sets: 3, restTime: "30 seconds" },
    { exercise: "Dumbbell Rows", reps: "12-15 (each arm)", sets: 3, restTime: "30 seconds" },
    { exercise: "Push-ups", reps: "10-12", sets: 3, restTime: "30 seconds" },
    { exercise: "Dumbbell Lunges", reps: "12-15 (each leg)", sets: 3, restTime: "30 seconds" },
    { exercise: "Dumbbell Bench Press", reps: "10-12", sets: 3, restTime: "30 seconds" },
    { exercise: "Plank", duration: "30-45 seconds", sets: 3, restTime: "30 seconds" },
    // Add more exercises as needed
];

var intermediate30MinWithoutWeights = [
    { exercise: "Bodyweight Squats", reps: "15-20", sets: 3, restTime: "30 seconds" },
    { exercise: "Push-ups", reps: "12-15", sets: 3, restTime: "30 seconds" },
    { exercise: "Lunges", reps: "15-20 (each leg)", sets: 3, restTime: "30 seconds" },
    { exercise: "Mountain Climbers", reps: "20 (10 each leg)", sets: 3, restTime: "30 seconds" },
    { exercise: "Burpees", reps: "10-12", sets: 3, restTime: "30 seconds" },
    { exercise: "Plank", duration: "30-45 seconds", sets: 3, restTime: "30 seconds" },
    // Add more exercises as needed
];

var intermediate45MinWithWeights = [
    { exercise: "Back Squats", reps: "12-15", sets: 4, restTime: "30 seconds" },
    { exercise: "Bent Over Rows with Barbell", reps: "12-15", sets: 4, restTime: "30 seconds" },
    { exercise: "Push-ups", reps: "10-12", sets: 4, restTime: "30 seconds" },
    { exercise: "Dumbbell Step-ups", reps: "12-15 (each leg)", sets: 4, restTime: "30 seconds" },
    { exercise: "Incline Dumbbell Press", reps: "10-12", sets: 4, restTime: "30 seconds" },
    { exercise: "Plank", duration: "45-60 seconds", sets: 4, restTime: "30 seconds" },
    // Add more exercises as needed
];

var intermediate45MinWithoutWeights = [
    { exercise: "Jump Squats", reps: "15-20", sets: 4, restTime: "30 seconds" },
    { exercise: "Push-ups", reps: "12-15", sets: 4, restTime: "30 seconds" },
    { exercise: "Walking Lunges", reps: "15-20 (each leg)", sets: 4, restTime: "30 seconds" },
    { exercise: "Mountain Climbers", reps: "20 (10 each leg)", sets: 4, restTime: "30 seconds" },
    { exercise: "Burpees", reps: "10-12", sets: 4, restTime: "30 seconds" },
    { exercise: "Plank", duration: "45-60 seconds", sets: 4, restTime: "30 seconds" },
    // Add more exercises as needed
];

var intermediate60MinWithWeights = [
    { exercise: "Front Squats", reps: "12-15", sets: 5, restTime: "30 seconds" },
    { exercise: "Deadlifts", reps: "10-12", sets: 5, restTime: "30 seconds" },
    { exercise: "Push-ups", reps: "10-12", sets: 5, restTime: "30 seconds" },
    { exercise: "Dumbbell Walking Lunges", reps: "12-15 (each leg)", sets: 5, restTime: "30 seconds" },
    { exercise: "Dumbbell Flyes", reps: "10-12", sets: 5, restTime: "30 seconds" },
    { exercise: "Plank", duration: "60-75 seconds", sets: 5, restTime: "30 seconds" },
    // Add more exercises as needed
];

var intermediate60MinWithoutWeights = [
    { exercise: "Box Jumps", reps: "15-20", sets: 5, restTime: "30 seconds" },
    { exercise: "Push-ups", reps: "12-15", sets: 5, restTime: "30 seconds" },
    { exercise: "Reverse Lunges", reps: "15-20 (each leg)", sets: 5, restTime: "30 seconds" },
    { exercise: "Mountain Climbers", reps: "20 (10 each leg)", sets: 5, restTime: "30 seconds" },
    { exercise: "Burpees", reps: "10-12", sets: 5, restTime: "30 seconds" },
    { exercise: "Plank", duration: "60-75 seconds", sets: 5, restTime: "30 seconds" },
    // Add more exercises as needed
];

var advanced30MinWithWeights = [
    { exercise: "Barbell Back Squats", reps: "10-12", sets: 4, restTime: "30 seconds" },
    { exercise: "Barbell Bent Over Rows", reps: "10-12", sets: 4, restTime: "30 seconds" },
    { exercise: "Push-ups (Weighted)", reps: "8-10", sets: 4, restTime: "30 seconds" },
    { exercise: "Dumbbell Walking Lunges", reps: "10-12 (each leg)", sets: 4, restTime: "30 seconds" },
    { exercise: "Incline Dumbbell Press", reps: "8-10", sets: 4, restTime: "30 seconds" },
    { exercise: "Hanging Leg Raises", reps: "12-15", sets: 4, restTime: "30 seconds" },
    // Add more exercises as needed
];

var advanced30MinWithoutWeights = [
    { exercise: "Box Jumps", reps: "10-12", sets: 4, restTime: "30 seconds" },
    { exercise: "Plyometric Push-ups", reps: "8-10", sets: 4, restTime: "30 seconds" },
    { exercise: "Reverse Lunges (Jumping)", reps: "10-12 (each leg)", sets: 4, restTime: "30 seconds" },
    { exercise: "Mountain Climbers (Explosive)", reps: "15-20 (10 each leg)", sets: 4, restTime: "30 seconds" },
    { exercise: "Burpee Box Jumps", reps: "8-10", sets: 4, restTime: "30 seconds" },
    { exercise: "Plank (Extended)", duration: "30-45 seconds", sets: 4, restTime: "30 seconds" },
    // Add more exercises as needed
];

var advanced45MinWithWeights = [
    { exercise: "Barbell Front Squats", reps: "10-12", sets: 5, restTime: "30 seconds" },
    { exercise: "Deadlifts", reps: "8-10", sets: 5, restTime: "30 seconds" },
    { exercise: "Weighted Pull-ups", reps: "8-10", sets: 5, restTime: "30 seconds" },
    { exercise: "Dumbbell Step-ups (Weighted)", reps: "10-12 (each leg)", sets: 5, restTime: "30 seconds" },
    { exercise: "Dumbbell Flyes", reps: "8-10", sets: 5, restTime: "30 seconds" },
    { exercise: "Plank (Extended)", duration: "45-60 seconds", sets: 5, restTime: "30 seconds" },
    // Add more exercises as needed
];

var advanced45MinWithoutWeights = [
    { exercise: "Box Jumps", reps: "12-15", sets: 5, restTime: "30 seconds" },
    { exercise: "Explosive Push-ups", reps: "10-12", sets: 5, restTime: "30 seconds" },
    { exercise: "Walking Lunges (Jumping)", reps: "12-15 (each leg)", sets: 5, restTime: "30 seconds" },
    { exercise: "Mountain Climbers (Explosive)", reps: "15-20 (10 each leg)", sets: 5, restTime: "30 seconds" },
    { exercise: "Burpee Box Jumps", reps: "10-12", sets: 5, restTime: "30 seconds" },
    { exercise: "Plank (Extended)", duration: "45-60 seconds", sets: 5, restTime: "30 seconds" },
    // Add more exercises as needed
];

var advanced60MinWithWeights = [
    { exercise: "Overhead Barbell Squats", reps: "10-12", sets: 6, restTime: "30 seconds" },
    { exercise: "Sumo Deadlifts", reps: "8-10", sets: 6, restTime: "30 seconds" },
    { exercise: "Weighted Dips", reps: "8-10", sets: 6, restTime: "30 seconds" },
    { exercise: "Walking Lunges with Barbell", reps: "10-12 (each leg)", sets: 6, restTime: "30 seconds" },
    { exercise: "Incline Dumbbell Flyes", reps: "8-10", sets: 6, restTime: "30 seconds" },
    { exercise: "Hanging Leg Raises (Weighted)", reps: "12-15", sets: 6, restTime: "30 seconds" },
    // Add more exercises as needed
];

var advanced60MinWithoutWeights = [
    { exercise: "Box Jumps", reps: "15-20", sets: 6, restTime: "30 seconds" },
    { exercise: "Explosive Push-ups", reps: "12-15", sets: 6, restTime: "30 seconds" },
    { exercise: "Reverse Lunges (Jumping)", reps: "15-20 (each leg)", sets: 6, restTime: "30 seconds" },
    { exercise: "Mountain Climbers (Explosive)", reps: "20-25 (10 each leg)", sets: 6, restTime: "30 seconds" },
    { exercise: "Burpee Box Jumps", reps: "12-15", sets: 6, restTime: "30 seconds" },
    { exercise: "Plank (Extended)", duration: "60-75 seconds", sets: 6, restTime: "30 seconds" },
    // Add more exercises as needed
];

//refreshes page
function refreshPage()
{
    window.location.reload();
}

//displays workout saved message to user
function displayWorkout( selectedWorkout )
{
    //document.getElementById("workoutDisplay").innerHTML += "Workout Saved"
    var exercisePlanDiv = document.getElementById("workoutDisplay");
    var html = '<h2>Advanced 60 Minutes Without Weights Exercise Plan</h2>';
    html += '<ul>';
    selectedWorkout.forEach(function( workout ) {
        html += '<li>';
        html += '<strong>' + workout.exercise + '</strong><br>';
        html += 'Reps: ' + workout.reps + '<br>';
        html += 'Sets: ' + workout.sets + '<br>';
        html += 'Rest Time: ' + workout.restTime + '<br>';
        if (workout.duration) {
            html += 'Duration: ' + workout.duration + '<br>';
        }
        html += '</li>';
    });
    html += '</ul>';
    exercisePlanDiv.innerHTML = html;
    
}

function disableButton( workoutToDisplay )
{
    var accessBtn = document.getElementById('displayWorkoutButton');
    var messageDisplayed = false;
    
    accessBtn.addEventListener('click', function() {
        if(!messageDisplayed) 
        {
            displayWorkout( workoutToDisplay );
            messageDisplayed = true;
            accessBtn.disabled = true;
        }
    });
}
//saves the user input to variables and then checks what workout is assigned to them.
//adds workout to database and prints out success message
document.addEventListener('DOMContentLoaded', function() 
{
    
    function submitForm() {
        var workoutStage = document.getElementById('workoutStage').value;
        var workoutType = document.getElementById('workoutType').value;
        var workoutLength = document.getElementById('workoutLength').value;

        // Return values as an object
        return {
            workoutStage: workoutStage,
            workoutType: workoutType,
            workoutLength: workoutLength
        };
    }

    var form = document.getElementById('workoutBuilderForm');
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Call the submitForm function
        var formValues = submitForm();

        //control flow to show the workout on the webpage
        if(formValues.workoutLength == "30min" && formValues.workoutStage == "Beginner" && formValues.workoutType == "Weights")
        {
            var selectedWorkout = beginnerWorkout30MinWeights;
            console.log( selectedWorkout );
        }
        else if(formValues.workoutLength == "45min" && formValues.workoutStage == "Beginner" && formValues.workoutType == "Weights")
        {
            var selectedWorkout = beginnerWorkout45MinWeights;
            console.log( selectedWorkout );
        }
        else if(formValues.workoutLength == "60min" && formValues.workoutStage == "Beginner" && formValues.workoutType == "Weights")
        {
            var selectedWorkout = beginnerWorkout60MinWithWeights;
            console.log( selectedWorkout );
        }
        else if(formValues.workoutLength == "30min" && formValues.workoutStage == "Beginner" && formValues.workoutType == "Body Weight")
        {
            var selectedWorkout = beginnerWorkOut30MinWithoutWeights;
            console.log( selectedWorkout );
        }
        else if(formValues.workoutLength == "45min" && formValues.workoutStage == "Beginner" && formValues.workoutType == "Body Weight")
        {
            var selectedWorkout = beginnerWorkout45MinWithoutWeights;
            console.log( selectedWorkout );
        }
        else if(formValues.workoutLength == "60min" && formValues.workoutStage == "Beginner" && formValues.workoutType == "Body Weight")
        {
            var selectedWorkout = beginnerWorkout60MinWithoutWeights;
            console.log( selectedWorkout );
        }
        else if(formValues.workoutLength == "30min" && formValues.workoutStage == "Intermeidate" && formValues.workoutType == "Weights")
        {
            var selectedWorkout = intermediate30MinWithWeights;
            console.log( selectedWorkout );
        }
        else if(formValues.workoutLength == "45min" && formValues.workoutStage == "Intermeidate" && formValues.workoutType == "Weights")
        {
            var selectedWorkout = intermediate45MinWithWeights;
            console.log( selectedWorkout );
        }
        else if(formValues.workoutLength == "60min" && formValues.workoutStage == "Intermeidate" && formValues.workoutType == "Weights")
        {
            var selectedWorkout = intermediate60MinWithWeights;
            console.log( selectedWorkout );
        }
        else if(formValues.workoutLength == "30min" && formValues.workoutStage == "Intermeidate" && formValues.workoutType == "Body Weight")
        {
            var selectedWorkout = intermediate30MinWithoutWeights;
            console.log( selectedWorkout );
        }
        else if(formValues.workoutLength == "45min" && formValues.workoutStage == "Intermeidate" && formValues.workoutType == "Body Weight")
        {
            var selectedWorkout = intermediate45MinWithoutWeights;
            console.log( selectedWorkout );
        }
        else if(formValues.workoutLength == "60min" && formValues.workoutStage == "Intermeidate" && formValues.workoutType == "Body Weight")
        {
            var selectedWorkout = intermediate60MinWithoutWeights;
            console.log( selectedWorkout );
        }
        else if(formValues.workoutLength == "30min" && formValues.workoutStage == "Advanced" && formValues.workoutType == "Weights")
        {
            var selectedWorkout = advanced30MinWithWeights;
            console.log( selectedWorkout );
        }
        else if(formValues.workoutLength == "45min" && formValues.workoutStage == "Advanced" && formValues.workoutType == "Weights")
        {
            var selectedWorkout = advanced45MinWithWeights;
            console.log( selectedWorkout );
        }
        else if(formValues.workoutLength == "60min" && formValues.workoutStage == "Advanced" && formValues.workoutType == "Weights")
        {
            var selectedWorkout = advanced60MinWithWeights;
            console.log( selectedWorkout );
        }
        else if(formValues.workoutLength == "30min" && formValues.workoutStage == "Advanced" && formValues.workoutType == "Body Weight")
        {
            var selectedWorkout = advanced30MinWithoutWeights;
            console.log( selectedWorkout );
        }
        else if(formValues.workoutLength == "45min" && formValues.workoutStage == "Advanced" && formValues.workoutType == "Body Weight")
        {
            var selectedWorkout = advanced45MinWithoutWeights;
            console.log( selectedWorkout );
        }
        else if(formValues.workoutLength == "60min" && formValues.workoutStage == "Advanced" && formValues.workoutType == "Body Weight")
        {
            var selectedWorkout = advanced60MinWithoutWeights;
            console.log( selectedWorkout );
        }
        else
        {
            console.log("Error, workout not saved")
            //add error message visable to user
        }
        
        //call the add to database funciton with the selected workout variable

        //call the disable button function to disable button after workout is saved
        disableButton( selectedWorkout );
    });
});

