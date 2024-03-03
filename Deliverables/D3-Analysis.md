# **System Description**

*Provide a brief textual description of your system. The first paragraph of the description must contain the problem statement, the product position statement, and the value proposition of your system (you can refine/update what you presented in D.2). The following paragraphs should describe the key requirements of the system. This description should be consistent with D.2 stakeholders, requirements, use cases, and user stories. Again, refinements/updates are welcome since your understanding of the system is constantly evolving. Use Bold every time that you use a noun that is a class in your model. Use Italic every time that you use a noun that is an attribute in your model. Use Bold and Italic every time that you use a noun or verb that is an association in your model. Grading criteria (5 points): The description should be clear, concise, and well-written, free of typos and grammar problems. The use of bold, italic, and underline should be coherent with the model presented in Section 2---all classes, attributes, and associations from the model should appear in the text and their role in the system, as described in the text, should be consistent with the model.*

We currently have the problem of not knowing how workouts affect gym goers consistently and prevent the risk of injury or overtraining. Therefore, for gym goers with any experience level of working out, wkgOut is a journaling/schedualing application that provides unique workout presets that can either use bodyweight or free weights. Indeed, wkgOut is a journaling/schedualing webpage that allows gym goers to have more efficient and less injury-prone gym going experiences through the use of a gym scheduler that can both build unique gym schedules and provide gym schedule presets. 

The current key reqirments of the system start with the **Workout** which has an *excercies* that is an ExercisType and has an *xpValue* that is an integer. The **Workout** can be completed with the *isComplete* method, the xp can be updated with *updateXP* and we can copy a workout with the *copyWorkout* method. A **Workout** ***Creates*** a **Workout Builder** in a 1 to many relationship.

 The **Workout Builder** has a *presetExercises* that is is a ExcerciseType. A **Workout Builder** can *buildPlan* method which will create an ExercisType. A *selectExercise* method will select an exercise to be able to edit. A *createExercise* method which will create an exerciese that can be saved. The **Workout Builder** will also have a *moveExercise* method to move an exercise execersise around in a schedule.

A **Journal** has a *journalEntry* which is a string, that stores the text. It then has a method called *addEntry* which will allow an entry to be named and added to a workout. It has the method called *editEntry* which allows the user to be able to edit an entry and change the text. It has a method called *deleteEntry* which allows an entry to be deleted. A **Journal** can **Refrences** a **Workout** which esently means that it can refrence a workout one **Journal** can only refrence one **Workout**. 

A **Calendar** has a *month* that is a string and *days* that are an integer. It also contains a *updateDay* method which will allow for the days to be updated and has an *importWorkoutPlan* method which will ***Place In*** a **Workout** into the Calendar this relationship is for one **Calendar** to many **Workout**.

A **User** has a *username* which is a string, a *password* which is also a string, a *level* which is an integer, and a *xp* which is also an integer. A **user** has the method called *getProfileData* which ***Accesses*** the  **Workout Builder**, **Journal**, and **Calendar** all of these relationships are in the one to many with the **User** being the one. The *getLevel* method is used to get the *level* so is the *getXP* method with getting the *xp*. *updateLevel* and *updateXp* changes the *level* and *xp* integers repectivly. 

The **Administrator** has a *AdminID* which is an integer. The **Administrator** has the method *setLevel* which can forcibly change the level of a **User** and it also has the power to be able to create create exersise presets with *createPresetExercise* method. It can also create a journal preset prompt with the *createPresetJournalPrompt*.






### What To Do 
Product Statement
Product Position
Value Proposition

Describe Key Requirements


# ** Model **

*Provide the conceptual model of your system as a UML class diagram. Represent proper cardinalities (multiplicities) for all associations. Also include the association names.*

Some points to consider:

- Use UML adequately. Do not use graphical elements that are not part of the language. Represent compositions and aggregations when relevant. 
- This model is not an ER diagram (entity-relationship model), which is focused on relational database systems. However, both diagrams have similarities. 
- Do not overcomplicate how you represent the elements of your model (e.g., using inheritance or an association when they are not necessary). Pay attention to simplicity,maintainability, unnecessary repetition, cohesion, and coupling.
- Do not represent actions that don’t need to be registered in the system. 
- Do not represent technical elements, such as user interface or programming language libraries in the model. At this point, we are modeling the business logic/domain of your system.
- During the design phase, the model will be refined to include technology-specific elements and decisions. 
- Do not represent "System" as a class in your model. Everything that you are modeling is part of the system.
- If you feel the need to justify your decisions, you can write your rationale in this section or as UML comments in the diagram.
- The model must have at least 8 classes. You can add requirements in the system description if you need more classes. 

*Grading criteria: You should correctly use the UML specification. Your model should have the minimum number of classes. Your domain should be adequately modeled. The model should avoid unnecessary complexity, repetition, lack of cohesion, and coupling. The classes should be at an adequate abstraction level.*
