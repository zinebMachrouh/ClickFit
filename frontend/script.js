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

    // User registration
    $('#userForm').on('submit', function (e) {
        e.preventDefault();
        const email = $('#email').val().trim();
        const password = $('#password').val().trim();
        const type = $('#type').val();
        const active = $('#status').val();

        let isValid = true;

        if (!email) {
          $('#email-feedback').text('Email is required');
          isValid = false;
        } else {
          $('#email-feedback').text('');
        }

        if (!password) {
          $('#password-feedback').text('Password is required');
          isValid = false;
        } else {
          $('#password-feedback').text('');
        }

        if (!isValid) return;

        $.ajax({
          url: 'http://localhost:3000/add-user',
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({ email, password, type, active }),
          success: function (response) {
            $('#responseMessage').html('<div class="alert alert-success">' + response.message + '</div>');
            $('#userForm')[0].reset();
          },
          error: function () {
            $('#responseMessage').html('<div class="alert alert-danger">Failed to add user. Please try again.</div>');
          }
        });
      });
  });


  const questions = document.querySelectorAll('.qst');

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const chev = question.lastElementChild;
        if (answer.style.display === 'flex') {
            answer.style.display = 'none';
            chev.style.transform = "rotate(0deg)";
        } else {
            answer.style.display = 'flex';
            chev.style.transform = "rotate(180deg)";
        }
    });
});

