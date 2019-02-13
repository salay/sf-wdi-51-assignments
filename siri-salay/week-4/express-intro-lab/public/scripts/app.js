console.log("Sanity Check: JS is working!");

$(document).ready(() => {

  // code in here

  const handleSuccess = json =>  {console.log(json);
    for(i=0; i<json.length; i++) {
      var newListItem = document.createElement('li');
      newListItem.innerHTML = "the artist is " + json[i].artist + ", and their album title is " + json[i].title;  
      document.getElementById("albums").appendChild(newListItem);
    }
     };

const handleError = (xhr, status, errorThrown) => console.log('uh oh');


$.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/albums',
   success: handleSuccess,
   error: handleError
 })


});
