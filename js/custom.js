$(document).ready(function () {
    var c = 1;
    $("td").click(function () {
        c++;
        var id = $(this).attr('id');
        if (c % 2 == 0) {
            $("#" + id).html("<div class='zero'><img class='img-fluid' src='assets/zero.png'></div>");
            $("#" + id).off('click');
        } else {
            $("#" + id).html("<div class='cross'><img class='img-fluid' src='assets/cross.jpeg'></div>");
            $("#" + id).off('click');
        }
        if (($("#1 div").hasClass("zero") && $("#2 div").hasClass("zero") && $("#3 div").hasClass("zero")) ||
            ($("#4 div").hasClass("zero") && $("#5 div").hasClass("zero") && $("#6 div").hasClass("zero")) ||
            ($("#7 div").hasClass("zero") && $("#8 div").hasClass("zero") && $("#9 div").hasClass("zero")) ||
            ($("#1 div").hasClass("zero") && $("#4 div").hasClass("zero") && $("#7 div").hasClass("zero")) ||
            ($("#2 div").hasClass("zero") && $("#5 div").hasClass("zero") && $("#8 div").hasClass("zero")) ||
            ($("#3 div").hasClass("zero") && $("#6 div").hasClass("zero") && $("#9 div").hasClass("zero")) ||
            ($("#1 div").hasClass("zero") && $("#5 div").hasClass("zero") && $("#9 div").hasClass("zero")) ||
            ($("#3 div").hasClass("zero") && $("#5 div").hasClass("zero") && $("#7 div").hasClass("zero"))) {
            alert("ZERO WINS");
            $("td").off('click');

        }
        else if(($("#1 div").hasClass("cross") && $("#2 div").hasClass("cross") && $("#3 div").hasClass("cross")) ||
            ($("#4 div").hasClass("cross") && $("#5 div").hasClass("cross") && $("#6 div").hasClass("cross")) ||
            ($("#7 div").hasClass("cross") && $("#8 div").hasClass("cross") && $("#9 div").hasClass("cross")) ||
            ($("#1 div").hasClass("cross") && $("#4 div").hasClass("cross") && $("#7 div").hasClass("cross")) ||
            ($("#2 div").hasClass("cross") && $("#5 div").hasClass("cross") && $("#8 div").hasClass("cross")) ||
            ($("#3 div").hasClass("cross") && $("#6 div").hasClass("cross") && $("#9 div").hasClass("cross")) ||
            ($("#1 div").hasClass("cross") && $("#5 div").hasClass("cross") && $("#9 div").hasClass("cross")) ||
            ($("#3 div").hasClass("cross") && $("#5 div").hasClass("cross") && $("#7 div").hasClass("cross"))) {
            alert("CROSS WINS");
            $("td").off('click');
        }
        else if(c==10){
        alert("DRAW");
        }

    });

});


function get_reply() {
    var a = "#".concat(event.target.id);
    console.log(a);
}
