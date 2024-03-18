//connect to database libaray for workout builder page
//import the required modules(in this case sql)
const mySQL = require("mysql");


//define workout data
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
const beginnerWorkout45MinWithoutWeights = [
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
const beginnerWorkout60MinWithWeights = [
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
const beginnerWorkout60MinWithoutWeights = [
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
    
const intermediate30MinWithWeights = [
    { exercise: "Goblet Squats", reps: "12-15", sets: 3, restTime: "30 seconds" },
    { exercise: "Dumbbell Rows", reps: "12-15 (each arm)", sets: 3, restTime: "30 seconds" },
    { exercise: "Push-ups", reps: "10-12", sets: 3, restTime: "30 seconds" },
    { exercise: "Dumbbell Lunges", reps: "12-15 (each leg)", sets: 3, restTime: "30 seconds" },
    { exercise: "Dumbbell Bench Press", reps: "10-12", sets: 3, restTime: "30 seconds" },
    { exercise: "Plank", duration: "30-45 seconds", sets: 3, restTime: "30 seconds" },
        // Add more exercises as needed
    ];
    
const intermediate30MinWithoutWeights = [
    { exercise: "Bodyweight Squats", reps: "15-20", sets: 3, restTime: "30 seconds" },
    { exercise: "Push-ups", reps: "12-15", sets: 3, restTime: "30 seconds" },
    { exercise: "Lunges", reps: "15-20 (each leg)", sets: 3, restTime: "30 seconds" },
    { exercise: "Mountain Climbers", reps: "20 (10 each leg)", sets: 3, restTime: "30 seconds" },
    { exercise: "Burpees", reps: "10-12", sets: 3, restTime: "30 seconds" },
    { exercise: "Plank", duration: "30-45 seconds", sets: 3, restTime: "30 seconds" },
    // Add more exercises as needed
    ];
    
const intermediate45MinWithWeights = [
    { exercise: "Back Squats", reps: "12-15", sets: 4, restTime: "30 seconds" },
    { exercise: "Bent Over Rows with Barbell", reps: "12-15", sets: 4, restTime: "30 seconds" },
    { exercise: "Push-ups", reps: "10-12", sets: 4, restTime: "30 seconds" },
    { exercise: "Dumbbell Step-ups", reps: "12-15 (each leg)", sets: 4, restTime: "30 seconds" },
    { exercise: "Incline Dumbbell Press", reps: "10-12", sets: 4, restTime: "30 seconds" },
    { exercise: "Plank", duration: "45-60 seconds", sets: 4, restTime: "30 seconds" },
        // Add more exercises as needed
    ];
    
const intermediate45MinWithoutWeights = [
    { exercise: "Jump Squats", reps: "15-20", sets: 4, restTime: "30 seconds" },
    { exercise: "Walking Lunges", reps: "15-20 (each leg)", sets: 4, restTime: "30 seconds" },
    { exercise: "Mountain Climbers", reps: "20 (10 each leg)", sets: 4, restTime: "30 seconds" },
    { exercise: "Burpees", reps: "10-12", sets: 4, restTime: "30 seconds" },
    { exercise: "Plank", duration: "45-60 seconds", sets: 4, restTime: "30 seconds" },
    { exercise: "Push-ups", reps: "12-15", sets: 4, restTime: "30 seconds" },
        // Add more exercises as needed
    ];
    
const intermediate60MinWithWeights = [
    { exercise: "Front Squats", reps: "12-15", sets: 5, restTime: "30 seconds" },
    { exercise: "Deadlifts", reps: "10-12", sets: 5, restTime: "30 seconds" },
    { exercise: "Push-ups", reps: "10-12", sets: 5, restTime: "30 seconds" },
    { exercise: "Dumbbell Walking Lunges", reps: "12-15 (each leg)", sets: 5, restTime: "30 seconds" },
    { exercise: "Dumbbell Flyes", reps: "10-12", sets: 5, restTime: "30 seconds" },
    { exercise: "Plank", duration: "60-75 seconds", sets: 5, restTime: "30 seconds" },
        // Add more exercises as needed
    ];
    
const intermediate60MinWithoutWeights = [
    { exercise: "Box Jumps", reps: "15-20", sets: 5, restTime: "30 seconds" },
    { exercise: "Push-ups", reps: "12-15", sets: 5, restTime: "30 seconds" },
    { exercise: "Reverse Lunges", reps: "15-20 (each leg)", sets: 5, restTime: "30 seconds" },
    { exercise: "Mountain Climbers", reps: "20 (10 each leg)", sets: 5, restTime: "30 seconds" },
    { exercise: "Burpees", reps: "10-12", sets: 5, restTime: "30 seconds" },
    { exercise: "Plank", duration: "60-75 seconds", sets: 5, restTime: "30 seconds" },
        // Add more exercises as needed
    ];
    
const advanced30MinWithWeights = [
    { exercise: "Barbell Back Squats", reps: "10-12", sets: 4, restTime: "30 seconds" },
    { exercise: "Barbell Bent Over Rows", reps: "10-12", sets: 4, restTime: "30 seconds" },
    { exercise: "Push-ups (Weighted)", reps: "8-10", sets: 4, restTime: "30 seconds" },
    { exercise: "Dumbbell Walking Lunges", reps: "10-12 (each leg)", sets: 4, restTime: "30 seconds" },
    { exercise: "Incline Dumbbell Press", reps: "8-10", sets: 4, restTime: "30 seconds" },
    { exercise: "Hanging Leg Raises", reps: "12-15", sets: 4, restTime: "30 seconds" },
        // Add more exercises as needed
    ];
    
const advanced30MinWithoutWeights = [
    { exercise: "Box Jumps", reps: "10-12", sets: 4, restTime: "30 seconds" },
    { exercise: "Plyometric Push-ups", reps: "8-10", sets: 4, restTime: "30 seconds" },
    { exercise: "Reverse Lunges (Jumping)", reps: "10-12 (each leg)", sets: 4, restTime: "30 seconds" },
    { exercise: "Mountain Climbers (Explosive)", reps: "15-20 (10 each leg)", sets: 4, restTime: "30 seconds" },
    { exercise: "Burpee Box Jumps", reps: "8-10", sets: 4, restTime: "30 seconds" },
    { exercise: "Plank (Extended)", duration: "30-45 seconds", sets: 4, restTime: "30 seconds" },
        // Add more exercises as needed
    ];
    
const advanced45MinWithWeights = [
    { exercise: "Barbell Front Squats", reps: "10-12", sets: 5, restTime: "30 seconds" },
    { exercise: "Deadlifts", reps: "8-10", sets: 5, restTime: "30 seconds" },
    { exercise: "Weighted Pull-ups", reps: "8-10", sets: 5, restTime: "30 seconds" },
    { exercise: "Dumbbell Step-ups (Weighted)", reps: "10-12 (each leg)", sets: 5, restTime: "30 seconds" },
    { exercise: "Dumbbell Flyes", reps: "8-10", sets: 5, restTime: "30 seconds" },
    { exercise: "Plank (Extended)", duration: "45-60 seconds", sets: 5, restTime: "30 seconds" },
        // Add more exercises as needed
    ];
    
const advanced45MinWithoutWeights = [
    { exercise: "Box Jumps", reps: "12-15", sets: 5, restTime: "30 seconds" },
    { exercise: "Explosive Push-ups", reps: "10-12", sets: 5, restTime: "30 seconds" },
    { exercise: "Walking Lunges (Jumping)", reps: "12-15 (each leg)", sets: 5, restTime: "30 seconds" },
    { exercise: "Mountain Climbers (Explosive)", reps: "15-20 (10 each leg)", sets: 5, restTime: "30 seconds" },
    { exercise: "Burpee Box Jumps", reps: "10-12", sets: 5, restTime: "30 seconds" },
    { exercise: "Plank (Extended)", duration: "45-60 seconds", sets: 5, restTime: "30 seconds" },
        // Add more exercises as needed
    ];
    
const advanced60MinWithWeights = [
    { exercise: "Overhead Barbell Squats", reps: "10-12", sets: 6, restTime: "30 seconds" },
    { exercise: "Sumo Deadlifts", reps: "8-10", sets: 6, restTime: "30 seconds" },
    { exercise: "Weighted Dips", reps: "8-10", sets: 6, restTime: "30 seconds" },
    { exercise: "Walking Lunges with Barbell", reps: "10-12 (each leg)", sets: 6, restTime: "30 seconds" },
    { exercise: "Incline Dumbbell Flyes", reps: "8-10", sets: 6, restTime: "30 seconds" },
    { exercise: "Hanging Leg Raises (Weighted)", reps: "12-15", sets: 6, restTime: "30 seconds" },
        // Add more exercises as needed
    ];
    
const advanced60MinWithoutWeights = [
    { exercise: "Box Jumps", reps: "15-20", sets: 6, restTime: "30 seconds" },
    { exercise: "Explosive Push-ups", reps: "12-15", sets: 6, restTime: "30 seconds" },
    { exercise: "Reverse Lunges (Jumping)", reps: "15-20 (each leg)", sets: 6, restTime: "30 seconds" },
    { exercise: "Mountain Climbers (Explosive)", reps: "20-25 (10 each leg)", sets: 6, restTime: "30 seconds" },
    { exercise: "Burpee Box Jumps", reps: "12-15", sets: 6, restTime: "30 seconds" },
    { exercise: "Plank (Extended)", duration: "60-75 seconds", sets: 6, restTime: "30 seconds" },
        // Add more exercises as needed
    ];

// Create a connection to the database
// 'your_database_host', 'your_username', 'your_password', 'your_database_name' are places holders
const connection = mysql.createConnection({
    host: 'your_database_host',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name'
  });

  //create connection
  connection.connect((err) => {
    if(err)
    {
        console.log("Error connecting to the database", err);
        return;
    }

    console.log("Connected to database");

  });

//adds the workout that was genereated for the user into the database
function addWorkoutToDatabase( workout ){
    
  }