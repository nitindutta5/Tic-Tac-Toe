$(document).ready(function () {
    var c = 0;
    $("td").click(function () {
        c++;
        if (c % 2 == 0)
            // var id = event.target.id;
            $(".cross").show();
        else
            $(" .zero").show();
    });
});


// } else {
//     $(document).ready(function () {
//             $("td").click(function () {
//                     $("#(get_reply())".show(".cross");
//                     });
//             });
//     }
// }

function get_reply() {
    var a = "#".concat(event.target.id);
    console.log(event.target.id);
    alert(a);
}