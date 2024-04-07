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

###

# Design Patterns

###

# Design Principles
