$(function() {
  $(".devoured-button").on("click", function(event) {
    var id = $(this).data("id");
    var justDevoured = $(this).data("justDevoured");

    var newJustDevoured = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newJustDevoured
    }).then(
      function() {
        console.log("A burger was devoured.");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bn").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("A new burger was created");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
