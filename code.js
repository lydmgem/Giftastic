// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
var topics = [
    "The Beatles",
    "3rd Rock from the Sun",
    "Pandas",
    "Birdbox"
];

// Function for displaying GIF data
function renderButtons() {
    
    // //Delete the buttons prior to adding new ones
    $(".added-buttons").empty();
    
    // A loop function that appends a button for each string in the array.
    
    for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
        var a = $("<button>");
        a.addClass("gif")
        a.attr("gif-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
    }
};
// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
$(document).on("click", ".gif", function() {
    var clickedOn = $(this).attr("gif-name");
    // This will be the queryURL in order for the AJAX function to work
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + clickedOn +
    "&api_key=ExIo4rUIvNcw8XkTsjNDpVeEUqJ0LeNU&limit=10";
    
    $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            var results = response.data;

            for (var r = 0; r < results.length; r++) {
                var resultDiv = $("<div id='result-container'>");
                // Grabbing the rating from the response data in order for us to display it on the page
                var rating = results[r].rating;
                var p = $("<p>").text("Rating: " + rating);

                //
                var gifImg = $("<img class='result'>");
                gifImg.attr("src", results[r].images.fixed_height_still.url);
                gifImg.attr("data-state", "still");
                gifImg.attr("data-still", results[r].images.fixed_height_still.url);
                gifImg.attr("data-animate", results[r].images.fixed_height.url);
    
                resultDiv.prepend(gifImg);
                resultDiv.prepend(p);
    
                $("#gif-results").prepend(resultDiv);
            }
        })
    });

// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
    $(document).on("click", ".result", function(){
        var state = $(this).attr("data-state");

        if (state === "still") {
            state = $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else if (state === "animate") {
            state = $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }});

// Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
        $("#add-topic").on("click", function(event) {
            event.preventDefault();

            var buttonExist = false;

            if (topics.indexOf($("#topic-input").val()) !== -1) {
                buttonExist = true;
            }
            if ($("#topic-input").val() !== "" && buttonExist === false) {
                var topic = $("#topic-input").val().trim();
                topics.push(topic);

                var newButton = $("<button>");
                newButton.attr("gif-name", topic);
                newButton.addClass("gif");
                newButton.text(topic);
                $("#buttons-view").append(newButton);
            }
	            $("#topic-input").val("");
        });
        // To display the initial list of movies, we have to call the renderButtons function
            renderButtons();
        
