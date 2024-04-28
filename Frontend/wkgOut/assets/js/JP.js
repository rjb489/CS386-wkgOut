const sessionId = localStorage.getItem('sessionId');

getJournals(sessionId);

document.addEventListener("DOMContentLoaded", function() {
    // Define journal questions based on different types
    const journalQuestions = {
        "Physical": [
            "How did your body feel during today's workout?",
            "What was your energy level like before and after exercising?",
            "Did you achieve any personal records or milestones in your workout today?",
            "How did you challenge yourself physically during your workout?",
            "Did you experience any discomfort or pain during your workout? If so, how did you manage it?",
            "What exercises did you focus on today, and why?",
            "How did you warm up and cool down before and after your workout?",
            "Did you notice any improvements in your strength, flexibility, or endurance compared to previous workouts?",
            "How did you maintain proper form and technique throughout your exercises?",
            "Did you incorporate any new exercises or variations into your workout routine today?",
            "How did you adjust your workout intensity based on your fitness level and goals?",
            "Did you encounter any obstacles or setbacks during your workout? If so, how did you overcome them?",
            "How did you stay motivated and focused during your workout session?",
            "Did you track your progress or performance metrics during your workout? If so, what did you learn from it?",
            "How did you hydrate and refuel your body before, during, and after your workout?",
            "Did you engage in any cross-training activities or supplementary exercises to complement your main workout routine?",
            "How did you prevent or address any muscle soreness or fatigue after your workout?",
            "Did you incorporate any mobility or stretching exercises to improve your range of motion and flexibility?",
            "How did your workout environment or surroundings impact your performance and mindset?",
            "Reflect on one thing you learned about your physical capabilities or limitations during today's workout?",
        ],
        "Emotional": [
            "How did you feel emotionally before, during, and after your workout?",
            "What emotions did you experience while exercising, and how did they affect your performance?",
            "Did you notice any changes in your mood or mindset after completing your workout?",
            "How did you manage stress or tension during your workout?",
            "Did you find your workout to be a form of stress relief or emotional release? If so, how?",
            "What emotions did you use as fuel to push through challenging moments in your workout?",
            "Did you set any emotional intentions or goals for your workout session? If so, did you achieve them?",
            "How did your workout contribute to your overall emotional well-being?",
            "Did you experience any mental barriers or negative thoughts during your workout? If so, how did you overcome them?",
            "How did you cultivate a positive mindset during your workout?",
            "Did you use any visualization or mental imagery techniques to enhance your emotional state during exercise?",
            "What role did mindfulness or mental presence play in your workout experience?",
            "How did your workout impact your confidence and self-esteem?",
            "Did you experience any feelings of accomplishment or pride after completing your workout?",
            "Reflect on one thing you learned about yourself emotionally during today's workout.",
            "How did your workout contribute to your sense of self-care and self-love?",
            "What emotional connections or insights did you gain while engaging in physical activity?",
            "How did your workout help you manage or cope with any emotional challenges you faced today?",
            "Did you find your workout to be a source of inspiration or motivation for other areas of your life? If so, how?",
            "How do you plan to carry the emotional benefits of your workout into the rest of your day?",
        ],
    };

    // Function to generate a random question from the selected type
    function generateQuestion(type) {
        const questions = journalQuestions[type];
        const randomIndex = Math.floor(Math.random() * questions.length);
        const questionText = questions[randomIndex]; 
        const questionContainer = document.getElementById("questionContainer");
        const saveButton = document.getElementById("saveButton");
        saveButton.style.display = "inline"; 
        questionContainer.innerHTML = `<p>${questionText}</p><textarea id="answerTextArea" rows="4" cols="50"></textarea>`;
        return questionText; 
    }

    // Function to handle save button click event
    function handleSaveAnswer(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        const answerTextArea = document.getElementById("answerTextArea");
        const answer = answerTextArea.value;

        // Get the question text from the question container
        const questionInput = document.getElementById("questionContainer");
        const questionText = questionInput.querySelector("p").innerText;

        // Save question and answer to the database
        saveToDatabase(sessionId, questionText, answer);

        // Create a new <div> element to display the journal prompt
        const journalPromptDiv = document.createElement("div");
        journalPromptDiv.classList.add("journal-prompt");

        // Create <h3> element for the question
        const questionHeader = document.createElement("h3");
        questionHeader.textContent = "Question: " + questionText;

        // Create <p> element for the answer
        const answerParagraph = document.createElement("p");
        answerParagraph.textContent = "Answer: " + answer;

        // Append question header and answer paragraph to the journal prompt div
        journalPromptDiv.appendChild(questionHeader);
        journalPromptDiv.appendChild(answerParagraph);

        // Append the journal prompt div to the "Previous Journal Prompts" section
        const previousJournalPromptsSection = document.getElementById("previousJournalPrompts");
        previousJournalPromptsSection.appendChild(journalPromptDiv);

        // Clear the answer textarea after saving
        answerTextArea.value = "";
        answerTextArea.style.display = "none";
        questionInput.style.display = "none";
        const saveButton = document.getElementById("saveButton");
        saveButton.style.display = "none";

        // Hide the saved question from the journal preset section
        questionInput.style.display = "none";
    }

    // Function to handle generate question button click event
    function handleGenerateQuestion(event) {
        event.preventDefault(); 
        const selectElement = document.getElementById("questionType");
        const selectedType = selectElement.value;
        const questionText = generateQuestion(selectedType);

        // Show the question in the journal preset section
        const questionInput = document.getElementById("questionContainer");
        questionInput.style.display = "block";
    }
    
    // Function to generate a custom question
    function generateCustomQuestion() {
        const customQuestionInput = document.getElementById("customQuestion");
        const customQuestion = customQuestionInput.value.trim();
        const questionContainer = document.getElementById("customQuestionContainer");
        const saveCustomButton = document.getElementById("saveCustomButton");
        saveCustomButton.style.display = "inline";

        questionContainer.innerHTML = `<p>${customQuestion}</p><textarea id="answerTextArea" rows="4" cols="50"></textarea>`;
        return customQuestion;
    }

    function handleGenerateCustomQuestion(event) {
        event.preventDefault();
        const customQuestionText = generateCustomQuestion();

        // Remove any existing save button from the "Build Your Own Journal Questions" section
        const existingSaveButton = document.getElementById("saveCustomButton");
        if (existingSaveButton) {
            existingSaveButton.remove();
        }

        // Remove any existing custom question from the "Previous Journal Prompts" section
        const existingCustomQuestion = document.querySelector("#previousJournalPrompts .journal-prompt");
        if (existingCustomQuestion) {
            existingCustomQuestion.remove();
        }

        // Remove any existing answer textarea from the "Build Your Own Journal Questions" section
        const existingAnswerTextArea = document.getElementById("answerTextArea");
        if (existingAnswerTextArea) {
            existingAnswerTextArea.remove();
        }

        // Create a new <div> element to display the custom question
        const customQuestionDiv = document.createElement("div");
        customQuestionDiv.classList.add("journal-prompt");

        // Create <h3> element for the question
        const questionHeader = document.createElement("h3");
        questionHeader.textContent = "Question: " + customQuestionText;

        // Append question header to the custom question div
        customQuestionDiv.appendChild(questionHeader);

        // Append the custom question div to the "Previous Journal Prompts" section
        const previousJournalPromptsSection = document.getElementById("previousJournalPrompts");
        previousJournalPromptsSection.appendChild(customQuestionDiv);

        // Create textarea for the answer
        const answerTextArea = document.createElement("textarea");
        answerTextArea.rows = "4";
        answerTextArea.cols = "50";
        answerTextArea.id = "answerTextArea";

        // Append answer textarea to the "Build Your Own Journal Questions" section
        const buildJournalForm = document.getElementById("buildJournalForm");
        buildJournalForm.appendChild(answerTextArea);

        // Create save button
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.id = "saveCustomButton";
        saveButton.classList.add("primary");
        saveButton.addEventListener("click", handleSaveCustomAnswer);

        // Append save button to the "Build Your Own Journal Questions" section
        buildJournalForm.appendChild(saveButton);

        // Optionally, you can hide the custom question form after generating
        const customQuestionContainer = document.getElementById("customQuestionContainer");
        customQuestionContainer.innerHTML = "";
    }
    function handleSaveCustomAnswer(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        const answerTextArea = document.getElementById("answerTextArea");
        const answer = answerTextArea.value.trim();

        // Get the question text from the custom question container
        const questionInput = document.getElementById("customQuestion");
        const questionText = questionInput.value.trim();

        // Save custom question and answer to the database
        saveToDatabase(sessionId, questionText, answer);
        

        // create sections
        const journalPromptDiv = document.createElement("div");
        journalPromptDiv.classList.add("journal-prompt");
        const questionHeader = document.createElement("h3");
        questionHeader.textContent = "Question: " + questionText;
        const answerParagraph = document.createElement("p");
        answerParagraph.textContent = "Answer: " + answer;

        // Append question header and answer paragraph to the journal prompt div
        journalPromptDiv.appendChild(questionHeader);
        journalPromptDiv.appendChild(answerParagraph);

        // Append the journal prompt div to the "Previous Journal Prompts" section
        const previousJournalPromptsSection = document.getElementById("previousJournalPrompts");
        previousJournalPromptsSection.appendChild(journalPromptDiv);

        // Clear/ hide
        answerTextArea.value = "";
        answerTextArea.style.display = "none";
        questionHeader.style.display = "none";
        const saveCustomButton = document.getElementById("saveCustomButton");
        saveCustomButton.style.display = "none";
        questionInput.value = "";
        const customQuestionContainer = document.getElementById("customQuestionContainer");
        customQuestionContainer.innerHTML = "";
    }
    document.getElementById("saveButton").addEventListener("click", handleSaveAnswer);
    document.getElementById("saveCustomButton").addEventListener("click", handleSaveAnswer);
    document.getElementById("generateCustomButton").addEventListener("click", handleGenerateCustomQuestion);
    document.getElementById("generateButton").addEventListener("click", handleGenerateQuestion);
});





/*

function: saveToDatabase(sessionID, question, answer)
description: will save the question and answer to the sql database

*/

function saveToDatabase(sessionID, question, answer)
   {
    var data = {
        sessionID: sessionID,
        question: question,
        answer: answer,
    };

    fetch('https://weebworkout.com:3000/setJournal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Exercise data sent successfully:', data);

        window.location.reload();
    })
    .catch(error => {
        console.error('Error sending exercise data:', error);
    });


   }

/*

function: getJournals(sessionID)
description: will get the jounrals and display them

*/


function getJournals(sessionId)
   {

    let jounrals;


    // set the headers
    const headers = {
        'Content-Type': 'application/json',
    };

    const url = new URL('https://weebworkout.com:3000/getJournals');
    url.searchParams.append('sessionId', sessionId);
    

    // get the user
    fetch(url,{
        method: 'GET',
        headers: headers,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        //save the workouts to a variable
        jounrals = data.journals;

        console.log('Response from server:', jounrals);

        // call the function to display a journal
        displayJournals(jounrals);

    })
    .catch(error => console.error('Error:', error));
   }


function displayJournals(jounrals)
   {
        

// Reference the container where workouts will be displayed
const workoutsContainer = document.getElementById('journals-container');

// Iterate over the workouts data and create HTML elements for each workout
jounrals.forEach(jounral => {
    // Create a div element to represent the workout
    const workoutDiv = document.createElement('div');
    workoutDiv.classList.add('workout');

    // Create HTML content for the workout
    const workoutHTML = `
        <h4>${jounral.question}</h4>
        <p><strong>Answer:</strong> ${jounral.answer}</p>
        <button class="delete-btn" data-workout-id="${jounral.id}" >Delete</button>
    `;

    // Set the HTML content of the workout div
    workoutDiv.innerHTML = workoutHTML;

    // Append the workout div to the container
    workoutsContainer.appendChild(workoutDiv);

    const deleteBtn = workoutDiv.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            event.preventDefault();

            const journalId = deleteBtn.getAttribute('data-workout-id');

            // Call a function to handle deletion of a journal
            deleteJournal(journalId);
        });

});
   }


function deleteJournal(journalId)
   {



    // Make a fetch request to delete the workout
    fetch('https://weebworkout.com:3000/deleteJournalById', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Include the workoutId in the request headers
        },

        body: JSON.stringify({ journalId: journalId }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete journal');
        }
        console.log("Journal deleted successfully");

    })
    .catch(error => console.error('Error:', error));

    // Log the workout id to test
    console.log("Journal will be deleted:", journalId);


    const deleteBtn = document.querySelector(`[data-workout-id="${journalId}"]`);
    const workoutContainer = deleteBtn.closest('.workout');

    // Check if the workout div exists
    if (workoutContainer) {
        // Remove the workout div from the DOM
        workoutContainer.remove();
    } else {
        console.warn(`Workout container with ID ${journalId} not found.`);
    }

   }