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
  setTimeout(showSlides, 2000); // Change image every x000 seconds
}

//click event for the dots may be bubbling up and affecting lightbox, making it show up
//when clicking on dot????






//BEGIN THE JQUERY!

$(document).ready(function() {
    console.log("Everything is ready, let's dooooooooooo this");
$('nav').hide();
$('.hero h1').hide();
$("#blank").fadeOut(3000);
//45 sec.
$("#mainImg").delay(4000).queue(function(){
    $(this).addClass("filter").dequeue();
});

  $("body").delay(3000).queue(function(){
  $('nav').slideDown().dequeue();
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
    .fadeOut(500)
    .next()
    .delay(500)
    .fadeIn(500)
    .end()
    .appendTo('#quoteBox');
},  2000);



//  for(var i = 1; i <= 3; i++){
//       $(`#dot${i}`).on('click', function(){
//         //stop the slideshow and show slide 1.
//         $("#slide, #slide").hide();
//         $(`#slide${i}`).show();
//       })
// }




 $(".lightbox").on('click', function(){
        $(".lightbox:target").show();
        //when you click
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






