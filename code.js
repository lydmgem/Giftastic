// This will be the queryURL in order for the AJAX function to work
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=ExIo4rUIvNcw8XkTsjNDpVeEUqJ0LeNU";

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

    // Your app should take the topics in this array and create buttons in your HTML.
    // Try using a loop that appends a button for each string in the array.

    for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
        var a = $("<button>");
        a.addClass("gif")
        a.attr("gif-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
    }
}
// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).

// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
        $("#add-topic").on("click", function(event) {
            event.preventDefault();
            
            // This line will grab the text from the input box
            var topic = $("#topic-input").val().trim();

            // The input from the textbox is then added to our array
            topics.push(topic);

            renderButtons();
        
        });
        // To display the initial list of movies, we have to call the renderButtons function
            renderButtons();
        
