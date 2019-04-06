
function function5leave() {
    $("#picture5").css("content", "url(https://www.w3schools.com/w3css/img_lights.jpg");
}

$(document).ready(function(){
    $("#nav>img").hide();
    setTimeout(function(){
        $("#nav>img").show(1000);


    },4000)
})

function playVideo(){
    $('html, body').animate({scrollTop:0}, 'slow');

    var curVid=$("#videowelcome");
    curVid.get(0).pause();
    curVid.get(0).currentTime = '0';
    curVid.get(0).play();
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }