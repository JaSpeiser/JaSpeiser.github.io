$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "team.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#team").html("");
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#team").append(
                        value.name + "<br>" +
                        value.title + "<br>" +
                        value.bio + "<br><br>"
                    );
                });
            });
        }
    });
});