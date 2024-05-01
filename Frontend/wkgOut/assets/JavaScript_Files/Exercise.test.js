import Exercise from "./Exercise.js";

test("Testing the constructor", () =>{
    const TestExercise = new Exercise("bench press", 3, 10);
    expect(TestExercise.exerciseName).toBe("bench press");
    expect(TestExercise.sets).toBe(3);
    expect(TestExercise.reps).toBe(10);
});
