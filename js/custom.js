$(document).ready(function () {
    var c = 1;
    $("td").click(function () {
        c++;
        var id = $(this).attr('id');
        if (c % 2 == 0)
            $("#" + id + " .zero").show();
        else
            $("#" + id + " .cross ").show();

    });
});


function get_reply() {
    var a = "#".concat(event.target.id);
    console.log(a);
}