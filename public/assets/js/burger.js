$(function () {
    //new burger form and button
    // $(".create-form").on("submit", function (event) {
    //     event.preventDefault();

    //     var burger_name = $("#name")
    //     $.ajax("/burger", {
    //         type: "POST",
    //         data: burger_name
    //     }).then(function () {
    //         console.log("new burger");
    //         location.reload();
    //     })
    // })
    
    //devour it button
    $(".devoured").on("submit", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        $ajax("/burger" + id, {
            type: "PUT"
        }).then(
            function() {
                console.log("devoured");
                location.reload();
            }
        )
    })
});