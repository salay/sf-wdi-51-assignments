var slideIndex = 0;
showSlides();

// function stopSlides() {
//   if(an image is clicked on) === true {
//     break;
//   }
// }

// function showLightBox() {
//   display lightbox
//   if clicked resume function
// }


function showSlides() {
  var slides = document.getElementsByClassName("mySlides");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every x000 seconds
}


// var i = 0;
// var txt = 'Lorem ipsum typing effect!'; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// typewriter();

// function typewriter() {
//   var text = document.querySelector(".hero h1");
//   textArray = ["H", "i", ",", " ", "I", "'", "m", " ", "S", "i", "r", "i", "!"];
//   for (var i = 0; i < textArray.length; i++) {
//   text.innerHTML += textArray[i];
//   setTimeout(typewriter, 3000);
//   }
// }

//

//click event for the dots may be bubbling up and affecting lightbox, making it show up
//when clicking on dot????






//BEGIN THE JQUERY!

$(document).ready(function() {
    console.log("Everything is ready, let's dooooooooooo this");


$(".thumbnail").on('click', function(){
  if ($(this).hasClass("lightbox") === true) {
  $(this).removeClass("lightbox");
  }
  else if ($(this).hasClass("lightbox") === false) {
  $(this).addClass("lightbox");
  }
})

$('nav').hide();
$('.hero h1').hide();
$("#blank").fadeOut(1000);
//45 sec.
$("#mainImg").delay(2000).queue(function(){
    $(this).addClass("filter").dequeue();
});

  $("body").delay(2000).queue(function(){
  $('nav').slideDown().dequeue();
});

  $("#header").delay(3000).queue(function(){
   $('.hero h1').show().dequeue();
  });



// $("#mainImg").fadeIn(60000, function() {
//     $(this).addClass("filter");
// });

$("nav ul li a").on('click', function(){
  $("nav ul li a").removeClass("highlight");
  $(this).addClass("highlight");
});

$("section").on('mouseover', function(){
    $("nav ul li a").removeClass("highlight");
    var nowIn = $(this).attr('id');
    $(`a[href$='${nowIn}']`).addClass("highlight");
   });






//dot functionality

  $(`#dot1`).on('click', function(){
        //hide the other slides ("stop" the slideshow)
        $("#slide2, #slide3").hide();
         //and show slide 1.
        $(`#slide1`).show();
      })

  $(`#dot2`).on('click', function(){
        $("#slide1, #slide3").hide();
        $(`#slide2`).show();
      })

  $(`#dot3`).on('click', function(){
        $("#slide1, #slide2").hide();
        $(`#slide3`).show();
      })




//QUOTES QUOTES QUOTES QUOTES QUOTES QUOTES QUOTES QUOTES QUOTES QUOTES QUOTES

// var quotes = $(".quoteTitles").text().toString();
// for (var i = 0; i < quotes.length; i++) {
//   console.log(quotes[i]);
//  //$(`${quotes[i]}`).fadeIn( "slow")
// }

$("#quoteBox> div:gt(0)").hide();

setInterval(function() {
  $('#quoteBox > div:first')
    .fadeOut(1000)
    .next()
    .delay(1000)
    .fadeIn(1000)
    .end()
    .appendTo('#quoteBox');
},  4000);



//  for(var i = 1; i <= 3; i++){
//       $(`#dot${i}`).on('click', function(){
//         //stop the slideshow and show slide 1.
//         $("#slide, #slide").hide();
//         $(`#slide${i}`).show();
//       })
// }




 $(".lightbox").on('click', function(){
        $(".lightbox:target").show();
      })




 // //if lightbox is on click, then you stop
 // //if ($(".lightbox:target").css("display") === "block")
 //  if ($(".lightbox:target").is(":visible")) {
 //    //stop the slideshow! how do I do this?
 //  }


  // $('.zooomin').zooomin();





  // define globals
var cheezyQuotes = "http://quotes.rest/qod.json?category=";
var category1 = "love";
var category2 = "life";
var category3 = "inspire";

// for(var i = 0; i < count; i++){
// $()
// $("#category1").fadeIn( "slow" )
// //uhhYouCanPutAFunctionHere
// };


$('form').on('submit',function(e) {
   e.preventDefault();

     if($('#contact form input[type = "text"]').val() === '') {
    $('#contact form input[type = "text"]').addClass('error');
  }
   });


 $.ajax({
        method: 'GET',

        url: cheezyQuotes + category3,

        success:
         function (response){
            var cheezyQuoteOfDay = response.contents.quotes[0].quote;
            console.log(response.contents.quotes[0].quote);
            $('#quotes').append(`<div> ${cheezyQuoteOfDay} </div>`)

        }, //end of success

        error:
        function (response){
        console.log("error");
        } //end of error

     }); // end of ajax


}); //end of Jquery. badaboom.






