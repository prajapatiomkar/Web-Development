$("h1").addClass("add-class");
var str = "";
$(document).keypress(function(event){
    str+=event.key;
    $("h1").text(str);
});