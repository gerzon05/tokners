$(".lista").hide();         
$(".click").click(function(e){
    e.preventDefault();
    $(".lista").animate({height:"fadein"});
    $(".lista").toggle(1500);
})
$(".bus").click(function(e){
    e.preventDefault();
    $(".lista").hide();
})
$(".menos").hide();
$(".ocultar").hide()
$(".mas").click(function(e){
    e.preventDefault();
    $(".ocultar").show();
    $(".menos").show();
    $(".mas").hide();
})
$(".menos").click(function(e){
    e.preventDefault();
    $(".ocultar").hide();
    $(".menos").hide();
    $(".mas").show();
})
$("a").click(function (e) { 
    e.preventDefault();
    
});