// $(document).ready(function(){
//     var c=0;
//     $("td").click(function(){
//         c++;
//         if(c%2==0)
//       $(".cross").show();
//     });
//   });
for (let i = 1; i <= 9; i++) {

    // if (i % 2 == 0) {
    //     $(document).ready(function () {
    //         $("td").click(function () {
    //             $("#(get_reply())").show(".cross");
    //         });
    //     });

    // } else {
    //     $(document).ready(function () {
    //             $("td").click(function () {
    //                     $("#(get_reply())".show(".cross");
    //                     });
    //             });
    //     }
    // }

    function get_reply() {
        var id = event.target.id;
        console.log(id);
        return id;
    }