
$(document).ready(function() {
    console.log("Everything is ready, let's dooooooooooo");

$("#delete").on("click", function(){

$('#itemList li:last-child').remove();
});

$("#empty").on("click", function(){
$('#itemList').empty();

});

  });

class essential {
  constructor(description, price) {
    this.description = description;
    this.price = price;
  }
}

  let plush1 = new essential("Teddy Bear with Plaid Bowtie", 28);



  // var plush1 = {description: "Teddy Bear with Plaid Bowtie", price: 28}
  var plush2 = {description: "Owl Plush Toy", price: 29}
  var plush3 = {description: "Melt-Resistant Snowman", price: 25}
  var plush4 = {description: "Teddy Bear with Book", price: 18}
  var plush5 = {description: "Beige Monkey Plush Toy", price: 24}
  var plush6 = {description: "Easter Bunny Plush Toy", price: 22}

  var onesie1 = {description: "Fox Onesie", price: 22}
  var onesie2 = {description: "Shark Onesie", price: 18}
  var onesie3 = {description: "Elephant Onesie", price: 18}
  var onesie4 = {description: "Panda Onesie", price: 18}
  var onesie5 = {description: "Rainbow Unicorn Onesie", price: 18}
  var onesie6 = {description: "Kangaroo Onesie", price: 18}

  var pillow1 = {description: "Reversible Golden Retriever Pillow", price: 22}
  var pillow2 = {description: "Reversible Bulldog Pillow", price: 22}
  var pillow3 = {description: "Reversible Grey Cat Pillow", price: 22}
  var pillow4 = {description: "Unicorn Sequin Pillow", price: 22}
  var pillow5 = {description: "Black Cat Sequin Pillow", price: 22}
  var pillow6 = {description: "Baby Red Dragon Sequin Pillow", price: 22}

  var plushies = [plush1, plush2, plush3, plush4, plush5, plush6]
  var onesies = [onesie1, onesie2, onesie3, onesie4, onesie5, onesie6]
  var pillows = [pillow1, pillow2, pillow3, pillow4, pillow5, pillow6]


var plushButton = document.getElementById("plushies");
var onesieButton = document.getElementById("onesies");
var pillowButton = document.getElementById("pillows");


//IMPORTANT
//adds the images to the div when button is clicked
var addPlushImages = function(){
  //loops through the array
  for (var i=0; i<plushies.length; i++) {
    //this gets the img tag in the html - this is where we want to display the
    //selected image at index i in the array.

    //this code below is to get that img tag
  var loadingImage = document.querySelectorAll("#display img")[i];
  //ignore this for now
  var imageDescription = document.querySelectorAll("#display h3")[i];
  imageDescription.innerHTML = plushies[i].description;
  var a = i+1;

  //this sets the attribute src in the image tag
  loadingImage.src= "./images/plush" + a + ".png";
  loadingImage.alt= plushies[i].description;
  //loadingImage.setAttribute("onclick", "putInCart()");
  loadingImage.addEventListener("click", putInCart);
    }
}


var addOnesieImages = function(){
  for (var i=0; i<onesies.length; i++) {
  var loadingImage = document.querySelectorAll("#display img")[i];
  var imageDescription = document.querySelectorAll("#display h3")[i];
  imageDescription.innerHTML = onesies[i].description;
  var a = i+1;
  loadingImage.src="./images/onesie" + a + ".png";
  loadingImage.alt= onesies[i].description;
  //loadingImage.setAttribute("onclick", "putInCart()");
  loadingImage.addEventListener("click", putInCart);

/*
  //create an h2 element
  var newPriceItem = document.createElement('h3');
  //create price variable as an int
  var price = onesies[i].price;
  newPriceItem.innerHTML = "$" + price;
  document.querySelectorAll('.price')[i].appendChild(newPriceItem);
  //set the price
  //when clicked put in cart and get total.
*/

  }
}

var addPillowImages = function(){
  for (var i=0; i<pillows.length; i++) {
  var loadingImage = document.querySelectorAll("#display img")[i];
  var imageDescription = document.querySelectorAll("#display h3")[i];
  imageDescription.innerHTML = pillows[i].description;
  var a = i+1;
  loadingImage.src="./images/pillow" + a + ".png";
  loadingImage.alt= pillows[i].description;
  //loadingImage.setAttribute("onclick", "putInCart()");
  loadingImage.addEventListener("click", putInCart);
    }
}

var putInCart = function()
  {

      // Create list item and store it in a variable.
      var newListItem = document.createElement('li');

      // Update the text content of that list item.
      // HOW TO GET SPECIFIC IMAGE DESCRIPTION - it's also the alt text

      newListItem.innerHTML = this.alt;
      //returns undefined;
      //document.getElementById("").alt;
      //this.querySelector("img").src;
      newListItem.style.margin = "1em 1em 0 0 ";

      // Append list item as a child of the ul with class itemList.
      document.getElementById('itemList').appendChild(newListItem);
    }


plushButton.addEventListener("click", addPlushImages);
onesieButton.addEventListener("click", addOnesieImages);
pillowButton.addEventListener("click", addPillowImages);





var imageArray = document.querySelectorAll('.display img');

for (let i =0; i<imageArray.length; i++) {
  var loadingImage = imageArray[i];
  //alttext =
}


var buttons = document.querySelectorAll('li');


for (let i = 0; i< buttons.length; i++) {
   buttons[i].addEventListener('click', switchTheme);
}

function switchTheme(){
  var clickedButton = this.className;
  var body = document.getElementsByTagName('body')[0];
  body.className = clickedButton;
}

