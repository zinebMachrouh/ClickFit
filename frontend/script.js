$(document).ready(function () {
    // Fetch date fact
    $.ajax({
      url: "http://numbersapi.com/1/30/date?json",
      success: function (data) {
        $("#fact-section").text(data.text);
      },
      error: function () {
        $("#fact-section").text("Failed to load fact.");
      },
    });
  
    // Image upload
    $("#uploadForm").on("submit", function (e) {
      e.preventDefault();
  
      let formData = new FormData();
      formData.append("image", $("#imageInput")[0].files[0]);
  
      $.ajax({
        url: "http://localhost:3000/upload",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
          $("#uploadStatus").text(response.message);
        },
        error: function () {
          $("#uploadStatus").text("Image upload failed.");
        },
      });
    });
  });
