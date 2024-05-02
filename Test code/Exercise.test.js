const Exercise = require("./Exercise.js");

test("Testing the constructor", ()=>{
    const TestExercise = new Exercise("bench press", 3, 10);
    expect(TestExercise.exerciseName).toBe("bench press");
    expect(TestExercise.sets).toBe(3);
    expect(TestExercise.reps).toBe(10);
});

test("Testing the get excerise name method", ()=>{
    const TestExercise = new Exercise("squat", 3, 10);
    expect(TestExercise.getExerciseName()).toBe("squat");
});

test("Testing the get sets method", ()=>{
    const TestExercise = new Exercise("push up", 3, 10);
    expect(TestExercise.getSets()).toBe(3);
})
