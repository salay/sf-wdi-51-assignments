
/* if user clicks on plush toys
    make the images appear in the display

    /* make the object have 2 keys. the image id and the description you want
    to display on the shopping car */

  var plush1 = {imageId: "plush1", description: "Teddy Bear with Plaid Bowtie"}
  var plush2 = {imageId: "plush2", description: "Owl Plush Toy"}
  var plush3 = {imageId: "plush3", description: "Melt-Resistant Snowman"}
  var plush4 = {imageId: "plush4", description: "Teddy Bear with Book"}
  var plush5 = {imageId: "plush5", description: "Beige Monkey Plush Toy"}
  var plush6 = {imageId: "plush6", description: "Easter Bunny Plush Toy"}

  var onesie1 = {imageId:"onesie1", description: "Fox Onesie"}
  var onesie2 = {imageId:"onesie2", description: "Shark Onesie"}
  var onesie3 = {imageId:"onesie3", description: "Elephant Onesie"}
  var onesie4 = {imageId:"onesie4", description: "Panda Onesie"}
  var onesie5 = {imageId:"onesie5", description: "Rainbow Unicorn Onesie"}
  var onesie6 = {imageId:"onesie6", description: "Kangaroo Onesie"}

  var pillow1 = {imageId: "pillow1", description: "Reversible Golden Retriever Pillow"}
  var pillow2 = {imageId: "pillow2", description: "Reversible Bulldog Pillow"}
  var pillow3 = {imageId: "pillow3", description: "Reversible Grey Cat Pillow"}
  var pillow4 = {imageId: "pillow4", description: "Unicorn Sequin Pillow"}
  var pillow5 = {imageId: "pillow5", description: "Black Cat Sequin Pillow"}
  var pillow6 = {imageId: "pillow6", description: "Baby Red Dragon Sequin Pillow"}

  var plushies = [plush1, plush2, plush3, plush4, plush5, plush6]
  var onesies = [onesie1, onesie2, onesie3, onesie4, onesie5, onesie6]
  var pillows = [pillow1, pillow2, pillow3, pillow4, pillow5, pillow6]

  /* could potentially have done it this way? :
  for(i=0; i<pillows.length; i++){
  pillows[i].imageId = "pillow" + i;
  }


for (var i=0; i<plushies.length; i++)
{
  //for i=0, then loadingImage = document.querySelectorAll("#display img")[0]
  var loadingImage = document.querySelectorAll("#display img")[i];
  //creating a newImg
  var newImg = new Image;
   newImg.onload = function() {
    loadingImage.src=this.src;
    }
  //setting image source to the next one;
    newImg.src = "./images/plush" + i + ".png";
}
*/

var plushButton = document.getElementById("plushies");
var onesieButton = document.getElementById("onesies");
var pillowButton = document.getElementById("pillows");



var addPlushImages = function(){
  for (var i=0; i<plushies.length; i++) {
  var loadingImage = document.querySelectorAll("#display img")[i];
  var a = i+1;
  loadingImage.src= "./images/plush" + a + ".png";
  loadingImage.alt= plushies[i].imageId;
    }
}

var addOnesieImages = function(){
  for (var i=0; i<onesies.length; i++) {
  var loadingImage = document.querySelectorAll("#display img")[i];
  var a = i+1;
  loadingImage.src="./images/onesie" + a + ".png";
  loadingImage.alt= onesies[i].imageId;
    }
}

var addPillowImages = function(){
  for (var i=0; i<pillows.length; i++) {
  var loadingImage = document.querySelectorAll("#display img")[i];
  var a = i+1;
  loadingImage.src="./images/pillow" + a + ".png";
  loadingImage.alt= pillows[i].imageId;
    }
}


plushButton.addEventListener("click", addPlushImages);
onesieButton.addEventListener("click", addOnesieImages);
pillowButton.addEventListener("click", addPillowImages);


var imageArray = document.querySelectorAll('.display img');

for (let i =0; i<imageArray.length; i++) {
  var loadingImage = imageArray[i];
  alttext =
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

/*
  you want the shopping cart to fill with the things when you click on each image

  button = getElementByTagName("BUTTON");
  So button.onclick = function() {


if clicked
 (image)


    image.onclick = function(){
      create a new 'li' element in the cart that
       has the inner HTML set to the description (the alt) of the image



    }


THIS IS VALID
  element.addEventListener('nameOfEvent', function => (arguments) {
    do something; }
  )



  }


*/

/*
let addNewItem = (htmlInside, tagName) => {
  let newListItem = document.createElement(`${tagName}`);
  newListItem.innerHTML = `${htmlInside}`;
  document.querySelector('ul').appendChild(newListItem);
};

why not
let addNewItem = (html, tagName) => {
  let newListItem = document.createElement(tagName);
  newListItem.innerHTML = html;
  document.querySelector('ul').appendChild(newListItem);
};

WHY IS IT IN JQUERY?
*/




/*

thisImage.innerHTML = 'src = "./images/plush2.png"';
document.getElementById("imageid").src="../template/save.png";

 THIS HELPED SO MUCH!
var _img = document.getElementById('id1');
var newImg = new Image;
newImg.onload = function() {
    _img.src = this.src;
}
newImg.src = 'http://whatever';

https://stackoverflow.com/questions/19396390/load-image-from-javascript


*/



// for (var i = 0; i < plushies.length; i++) {
//   plushies[i].appear = function(){
//     document.querySelectorAll('.display img')[i].setAttribute('src', 'images/' + this.name + '.jpg');
//   };
// }