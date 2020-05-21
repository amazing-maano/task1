$(document).ready(function() {

    // GET REQUEST


    // DO GET
    function ajaxGet() {
        $.ajax({
            type: "GET",
            url: "/outputs",
            success: function(result) {

                console.log("Success: ", result);
            },
            error: function(e) {

                console.log("ERROR: ", e);
            }
        });
    }
})