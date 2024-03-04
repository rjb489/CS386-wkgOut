# **System Description**

 There is the problem of not knowing how workouts affect gym goers consistently and prevent the risk of injury or overtraining. Therefore, for gym goers with any experience level of working out, wkgOut is a journaling/schedualing application that provides unique workout presets that can either use bodyweight or free weights. Indeed, wkgOut is a journaling/schedualing webpage that allows gym goers to have more efficient and less injury-prone gym going experiences through the use of a gym scheduler that can both build unique gym schedules and provide gym schedule presets. 

The current key requirements of the system start with the **Workout** which has an *schedule* that ***is A*** **Schedule** type and it also has an *xpValue* that is an integer. The **Workout** can be completed with the *isComplete* method, the xp can be updated with *updateXP* and we can copy a workout with the *copyWorkout* method. A ***is A*** **Schedule** in a 1 to 1 relationship.

 The **Workout Builder** has a *presetExercises* that is a **ExerciseType**. A **Workout Builder** can *buildPlan* method which will create an **ExerciseType**. A *selectExercise* method will select an exercise to be able to edit. A *createExercise* method which will create an exerciese that can be saved. The **Workout Builder** will also have a *moveExercise* method to move an exercise execersise around in a schedule. **Workout Builder** ***creates*** a **Workout** in a many to one format where **Workout Builder** can have many but has to at least have one **Workout**.

A **Journal** has a *journalEntry* which is a string that stores the text. It then has a method called *addEntry* which will allow an entry to be named and added to a workout. It has the method called *editEntry* which allows the user to be able to edit an entry and change the string. It has a method called *deleteEntry* which allows an entry to be deleted. A **Journal** can **References** a **Workout** which essentially means that it can reference a workout many **Journal** can reference many **Workout**. 

A **Calendar** has a *month* that is a string, and *days*, which are an integer. It also contains a *updateDay* method which will allow for the days to be updated and has an *importWorkoutPlan* method which will ***Place In*** a **Workout** into the Calendar. This relationship is for one **Calendar** to many **Workout**.

A **User** has a *username* which is a string, a *password* which is also a string, a *level* which is an integer, and a *xp* which is also an integer. A **user** has the method called *getProfileData* which ***Accesses*** the  **Workout Builder**, **Journal**, and **Calendar** all of these relationships are in one to many with the **User** being the one. The *getLevel* method is used to get the *level* so is the *getXP* method by getting the *xp*. *updateLevel* and *updateXp* change the *level* and *xp* integers respectively. 

The **Administrator** has an *AdminID* which is an integer. The **Administrator** has the method *setLevel* which can forcibly change the level of a **User** and it also has the power to be able to create exercise presets with *createPresetExercise* method. It can also create a journal preset prompt with the *createPresetJournalPrompt*.

The **Schedule** has an *exercises* which is a **ExerciseType**. The **Schedule** can **createWorkout** which is the list of **ExerciseType** and can **arrangeExercises** which is to change the order of the list of **ExerciseType**. The **Schedule** is **Made of** **ExerciseType**.

The **ExerciseType** has the *name* which is a string, *sets* which are an integer, *reps* which are an integer, and *xpVal* which is an integer. The *setXp* will set the number for *xpVal*. The *setName* will set the string for *name*. The *setSets* will set the integer for *sets*. The *setReps* will change the integer for *reps*.



# ** Model **

![Use Case Diagram](https://github.com/rjb489/CS386-wkgOut/blob/main/Extra%20Files/images/FInal%20UML%20V1.jpg)