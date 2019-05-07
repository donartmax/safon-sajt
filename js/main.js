$(document).ready(function(){

    $("#nav>img").hide();
    setTimeout(function(){
        $("#nav>img").show(1000);

    },3000)
})

$(".card").flip({
    axis: 'x',
    trigger: 'hover',
    reverse: true
});

function homePage(){

};






