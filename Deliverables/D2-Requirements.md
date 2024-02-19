# **Positioning**

### Problem statement
The problem of not knowing how to work out affects gym goers;
the impact of which is causing 

### Product position statement
For gym goers who do not know how to work out, WkgOut is a work 
out and journaling app that provides preset workouts; unlike fitness Blender, 
our product provides preset workouts that use specific gym equipment.

---

# **Stakeholders**

- Xavier Graham
  
1. Users
    - The users of this application could be anyone who is interested in working out and would like to journal about their progress
2. Clients
    - An athletic team or club using our product to track their athletic and mental health growth 
3. Competitors
    - Myfitness Tracker
    - Apple Fitness
    - Any app that provides workouts to the user
5. Developers
    - Charles Diaz
    - Laura Guerrero
    - Riley Burke
    - Xavier Graham


---

# **Functional Requirements**

1. Workout Planner/Scheduler
2. Calendar
3. Journal 
4. Account System
5. Workout presets 
6. Experience Leveling System 
7. Sharing Workouts 
8. Sharing Progress
9. Link between Journal Entries & wkgOut builds


---

# **Non-Functional Requirements**


1. Usability of the workout planning system
-  Have a group of test users, test the planning system and give back their feedback focusing on if the experience was easy to use. If the feedback is positive then the planning system is a success. 
2. Scalability of the planning system
-  Make sure that the planning system can hold at least 20 exercises per day, and 10 sets per exercise. 
3. Performance of workout planner
- Be able to have at least 20 exercises per day, and 10 sets per exercise and have no noticeable delay on page loading or exercise loading. This will be tested by having a few test users load a page that has 20 exercises with 10 sets per exercise and then are asked if the page felt laggy.
4. Proper workout planner manageability 
- We will test this by having users who have never used the program and should be "workout literate" to design a workout plan in the planner. To be literal "workout literate" will mean they have worked out consistently for over six months. After they have designed a workout plan. They will be given the question "How manageable was the planner to use on a scale of 1-10?" along with some follow up questions.


---

# **MVP**

The Minimum Viable Product will be a web application that allows a user with an account to create a workout from preset or user created exercises, and has an area that allows users to create journal entries based off of preset or user generated prompts. The exercises will be viewable from a calendar that is a focal point of the website.

This will be validated by the developers by the means of testing at every stage of development.

---

# **Use Case**

## Diagram
![Use Case Diagram](https://github.com/rjb489/CS386-wkgOut/blob/main/Extra%20Files/images/use_case_diagram.jpg)


- Riley Burke

    - Use Case: Build Workout
    - Actor: User
    - Trigger: User selects "Build Workout"
    - Pre-Condition: User is registered and has an account
    - Post-Condition: User has access to a workout they built
    - Success Scenario:
        - User selects "Build Workout"
        - User is prompted to place "Exercises"
        - User picks the amount of reps and sets
        - User can add more or finish the build
        - User can access the workout to edit later

    - Alternate Scenario:
        - User selects "Build Workout"
        - User selects to create exercise (one that isn't a preset)
        - User inputs necessary information
        - User can add more or finish the build
        - The newly created exercise is saved to the user's profile for future use
        - User can access the workout to edit later

    ![Build Workout UI Concept](https://github.com/rjb489/CS386-wkgOut/blob/main/Extra%20Files/images/Build_Workout_UI_Concept1.jpg)

- Laura Guerrero

    - Use Case: Create Journal
    - Actor: User
    - Trigger: User selects "Create Journal"
    - Pre-Condition: User is registered and has an account
    - Post-Condition: User has access to a journal they created
    - Success Scenario:
        - User selects "Create Journal"
        - User is prompted to place "Journal Prompts'
        - User can add more prompts or finish the journal
        - User can access the journal to edit later

    - Alternate Scenario:
        - User selects "Create Journal"
        - User selects to create prompt (one that isn't a preset)
        - User inputs necessary information
        - User can add more prompts or finish the build
        - The newly created prompt is saved to the user's profile for future use
        - User can access the journal to edit later

    ![Create Journal UI Concept](https://github.com/rjb489/CS386-wkgOut/blob/main/Extra%20Files/images/Journal_prompts.jpg)



- Charles Diaz

    - Use Case: Create Account
    - Actor: User
    - Trigger: User selects "Create Account To Join"
    - Pre-Condition: User has an email 
    - Post-Condition: User will have access to an account that will keep track of there information
    - Success Scenario:
        - User selects "Create Account To Join"
        - User is prompted to create a password
        - User has access to login 
        - User has saved data that they can access after they login 

    - Alternate Scenario:
        - User may forget password
        - User may try to login without an account
        - User inputs incorrect information
        - User can reset password

    ![Create Account UI Concept](https://github.com/rjb489/CS386-wkgOut/blob/main/Extra%20Files/images/create_account.jpg)


- Xavier Graham

    - Use Case: Calories burned tracker
    - Actor: User
    - Trigger: User selects "Start Workout"
    - Pre-Condition: User has an account and workout created
    - Post-Condition: User can see how many calories they burned during workout
    - Success Scenario:
        - User selects "Start Workout"
        - timer starts
        - User selects "End workout"
        - Number of calories burned is displayed

    - Alternate Scenario:
        - User may not have account
        - User may not have a workout selected
        
    ![Calories burned tracker UI Concept](https://github.com/rjb489/CS386-wkgOut/blob/main/Extra%20Files/images/D2%20picture%20-%20CS386.png)

- Minuka Trikawalagoda
    - Use case: Progress tracker
    - Actor: User
    - Trigger: User selects "See Progress"
    - Pre-condition: User is registered and is logged in
    - Post-condition: User will be able to see workout history
    - Success Scenario:
        - User selects "See Progress"
        - User selects required day of progress
        - Displays progress for selected date
      
    - Alternate Scenario:
        - User selects "See Progress"
        - User does not have any previous workouts tracked

    ![Progress Tracker](https://github.com/rjb489/CS386-wkgOut/blob/main/Extra%20Files/images/progress_tracker.jpg)


---

# **User Stories**

- Riley Burke

    - As a workout planner, I want to have the ability to share workouts I build, so I can help my team with consistent workouts.
        - Priority Level: 3
        - Time Estimate: 3 Hours

    - As someone who works out, I want to be able to build my own workout plans, so that I can be more efficient in my workouts.
        - Priority Level: 1
        - Time Estimate: 6 Hours
    
- Laura Guerrero

    - As someone who journals, I want to be able to create my own journal prompts, so that I can track and reflect on crucial information.
        - Priority Level: 1
        - Time Estimate: 3 Hours

    - As someone who works out, I want to be able to choose preset workouts, so that I know how to build muscle and improve my workouts.
        - Priority Level: 3
        - Time Estimate: 3 Hours

- Charles Diaz

    - As someone who travels, I would like to be able to login to my account from whichever computer I would like to.
        - Priority Level: 1
        - Time Estimate: 5 Hours

    - As someone who keeps track of my workouts, I would like to have a way to track my experience in game like system.
        - Priority Level: 3
        - Time Estimate: 5 Hours

- Xavier Graham

    - As someone who works out, I would like to be able to see how many calories I burn after a workout.
        - Priority Level: 2
        - Time Estimate: 3 Hours

    - As someone who has friends who work out, I would like to compare who much calories I burn compared to them
        - Priority Level: 5
        - Time Estimate: 5 Hours

- Minuka Trikawalagoda
    - As someone who works out, I would like a visual aid that would show my progress
        - Priority Level: 3
        - Time Estimate: 5 hours
     
    - As someone who also participate in sports, I would like to have workouts that would help me out with my sport
        - Priority Level: 5 
        - Time Estimate: 3 hours
---

# **Issue Tracker**

![Calories burned tracker UI Concept](https://github.com/rjb489/CS386-wkgOut/blob/main/Extra%20Files/images/issue_tracker.JPG)

---
