$( document ).ready(function() {
    console.log("Ready");
    $(".main_btna").click( function() {
        $(".overlay").fadeToggle("slow");
        $(".modal").slideDown("slow");
        console.log("button");
    });
    $(".close").click( function (){
        $(".modal").slideUp("slow");
        $(".overlay").fadeToggle("slow");
    });
});