// Modal Event
// var config = {
//     ".chosen-select": {},
//     ".chosen-select-deselect": {
//       allow_single_deselect: true
//     },
//     ".chosen-select-no-single": {
//       disable_search_threshold: 10
//     },
//     ".chosen-select-no-results": {
//       no_results_text: "Sorry... nothing found!"
//     },
//     ".chosen-select-width": {
//       width: "95%"
//     }
//   };


for (var selector in config) {
  $(selector).chosen(config[selector]);
}

// Capture survey inputs
$("#submit").on("click", function(event) {
  event.preventDefault();

  // Vaidate form
  function validateForm() {
    var isValid = true;
    $(".form-control").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });

    $(".chosen-select").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }

  // Form completion
  if (validateForm() == true) {
    // Create new friend from the values submitted
    var newFriend = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
      ]
    };

    // AJAX to post the data to friend API
    $.post("/api/friends", newFriend, function(data) {
      // Grab the result from the AJAX post to display best match name/photo
      $("#match-name").text(data.name);
      $("#match-image").attr("src", data.photo);

      // Display the modal with the best match
      $("#results-modal").modal("toggle");
    });
  } else {
    alert("Please fill out All fields before submitting survey!");
  }
});
