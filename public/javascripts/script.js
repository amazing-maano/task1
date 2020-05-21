$(document).ready(function() {

    // SUBMIT FORM
    $("#valuesform").submit(function(event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        ajaxPost();
    });

    $("#reset-btn").click(function() {
        $("#valuesform").trigger("reset");
        $("#resultdiv").empty();
    });

    function ajaxPost() {

        let firstNumber = $("#firstNumber").val();
        let secondNumber = $("#secondNumber").val();
        let result1 = parseFloat(firstNumber) + parseFloat(secondNumber);
        let result2 = parseFloat(firstNumber) - parseFloat(secondNumber);
        let result3 = parseFloat(firstNumber) * parseFloat(secondNumber);
        let result4 = parseFloat(firstNumber) / parseFloat(secondNumber);
        $("#result1").html(result1);
        $("#result2").html(result2);
        $("#result3").html(result3);
        $("#result4").html(result4);

        var formData = {
            firstNumber: $("#firstNumber").val(),
            secondNumber: $("#secondNumber").val(),
            result1: parseFloat(firstNumber) + parseFloat(secondNumber),
            result2: parseFloat(firstNumber) - parseFloat(secondNumber),
            result3: parseFloat(firstNumber) * parseFloat(secondNumber),
            result4: parseFloat(firstNumber) / parseFloat(secondNumber)
        }

        console.log(result1, result2, result3, result4);

        // DO POST
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: '/',
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function(data) {
                console.log("Successful!", data);
            },
            error: function(e) {
                alert("Error!")
                console.log("ERROR: ", e);
            }
        });
    }

    $.ajax({
        type: "GET",
        url: "/outputs",
        success: function(data) {

            console.log("Success: ");
        },
        error: function(e) {

            console.log("ERROR: ", e);
        }
    });


})