document.addEventListener('DOMContentLoaded', function() 
{
    
    function submitForm() {
        var workoutStage = document.getElementById('workoutStage').value;
        var workoutType = document.getElementById('workoutType').value;
        var workoutLength = document.getElementById('workoutLength').value;

        // Return values as an object
        return {
            workoutStage: workoutStage,
            workoutType: workoutType,
            workoutLength: workoutLength
        };
    }

    var form = document.getElementById('workoutBuilderForm');
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Call the submitForm function
        var formValues = submitForm();
        
    });
});


