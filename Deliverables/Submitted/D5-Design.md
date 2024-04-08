# Description

  A web app that is designed to help people who enjoy working out. wkgOut is a journaling/scheduling webpage that allows gym goers to have more efficient and less injury-prone gym going experiences through the use of a gym scheduler that can both build unique gym schedules and provide schedule presets. The main features of this software include being able to build, share, and use other workouts as well as track and reflect on these sessions in the journal session.
  High-quality images of a gym and natural landscapes provide visual motivation and context, suggesting both the environment where workouts take place and the outdoor activities that might relate to fitness goals. As well as a sans-serif font presents a modern and clean look that is easy on the eyes, enhancing readability. The brand name "wrkOut" is boldly placed at the top of each page, reinforcing brand identity.

# Architecture
![High Level Architecture Diagram](https://github.com/rjb489/CS386-wkgOut/blob/main/Extra%20Files/images/HighLevelArchitecture.png)

Our architecture starts off with users who can access the presentation layer, which is just UI. The presentation layer is then what connects the users to the cross-cutting accounts, and the operation layer is done so users have a pleasant experience through a UI, making it easier for the user to use the product. The operation layer has access to both the data layer and the cross-cutting, as the Journal Workout Builder and Calendar all need to be connected to an account to access the data they need via the data layer. The data layer is connected to data storage, as you need to have data to access.

###

# Class Diagram
![Class Diagram](https://github.com/rjb489/CS386-wkgOut/blob/main/Extra%20Files/images/Final%20Class%20Diagram.png)

###

# Sequence Diagram
![Class Diagram](https://github.com/rjb489/CS386-wkgOut/blob/main/Extra%20Files/images/d5_Sequence.JPG)

The Use case is when a user wants to create an exercise. The first thing that a user must do is create a Workout, which will return a Workout. If that does not work properly, an error message will be returned to the user. After a Workout has been created, an Exercise can be created through the method addExercise. Again, an error will be returned if the user puts in the wrong information while creating the exercise.

###

# Design Patterns
Exercise Builder: https://github.com/rjb489/CS386-wkgOut/blob/main/Frontend/JavaScript_Files/Exercise.js
![image](https://github.com/rjb489/CS386-wkgOut/assets/128425706/667843c7-0166-43cd-88e4-c79e7a22c23b)

Workout List: https://github.com/rjb489/CS386-wkgOut/blob/main/Frontend/JavaScript_Files/WorkoutList.js
![image](https://github.com/rjb489/CS386-wkgOut/assets/99576318/1d621c5c-1d6d-4d7f-b08a-e8cdb55c7aab)


###

# Design Principles
The SOLID principles guide software design towards maintainability and flexibility. Single Responsibility Principle ensures each class has only one responsibility, we have a class for a workout builer and in this class it will only build a workout and nothing else. Open/Closed Principle allows for extension without modification, in the workout builder class thier is a subfunction that creates the workout with out changing the code for the workout generator. Liskov Substitution Principle ensures substitutability of subclasses, we do this in our system by allowing all of our subclasses to be able to use the same data types and values of thier parent class without breaking the system. Interface Segregation Principle prevents unnecessary dependencies, this works with the first rule because we seprate each class and make sure that it only has one job so no class will have a subfunction or class that it does not need or use. Dependency Inversion Principle promotes abstraction over concrete implementations. For instance, separating authentication and user profile management into distinct classes adheres to SRP, while using interfaces for dependencies, such as a DataProvider interface for a ReportGenerator, follows DIP.
