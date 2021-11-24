$(".wrapper .text-container").on('mouseover',function(){
    $(".text-container").addClass('.image:hover + .text-container');//remove from other elements
});