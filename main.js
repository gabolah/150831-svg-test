$(document).ready(function() {
    $("svg").attr("class", "basic");
    $(".btn.basic").prop('disabled', true);
    
    $(".btn").click(function(event) {
        var $btn = $(event.currentTarget);
        var $svg = $("svg");
        var requestedClass = $btn.attr("class").replace(/btn */, "");
        
        $("svg").attr("class", requestedClass);
        
        $(".btn").prop("disabled", false);
        $(".btn." + requestedClass).prop("disabled", true);
    });
});