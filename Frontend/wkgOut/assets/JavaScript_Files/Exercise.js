class Exercise
   {
    // PROBABLY MORE TO BE ADDED 
    
    // Exercise constructor
    constructor(exerciseName, sets, reps)
      {
       this.exerciseName = exerciseName;
       this.sets = sets
       this.reps = reps
      }

    // getter & setter for exerciseName
    getExerciseName()
      {
       return this.exerciseName;
      }

    setExerciseName(name)
      {
       this.exerciseName = name;
      }

    // getter & setter for sets
    getSets()
      {
       return this.sets;
      }

    setSets(sets)
      {
       this.sets = sets;
      }

    // setters and getters for reps
    getReps()
      {
       return this.reps;
      }

    setReps( reps )
      {
       this.reps = reps;
      }
   }

   module.exports = Exercise;