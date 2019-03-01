import React, {Component} from 'react'

class Beanbags extends Component  {
    state = {
       giphyURL: ""
    };

   //functions here

    render () {
      return (
      <div className="Giphy">
        <img src={this.state.giphyURL} alt=""> </img>

        </div>

      )
    }
  }

export default Beanbags








componentDidMount()
{
 let newArray = [];
 
 const giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";
 const searchText = "dogs";
 const key = '&api_key=B8mP31D9bIFjhfWvUap2TDtR5PImqLev&limit=25';
// http://api.giphy.com/v1/gifs/search?q=dogs&api_key=B8mP31D9bIFjhfWvUap2TDtR5PImqLev&limit=25
 

axios.get(giphyUrl + searchText + key) 
 //.then(response => console.log(response))

 .then(response => {
   for (var i = 0; i < response.data.length; i++) {
   let gifSource = response.data[i].images.downsized.url;
   newArray.push(gifSource)}
   console.log(response)
   },

   this.setState({
       gifArray: newArray
   })
 )
 
 .catch(err => console.log(err))

}



// setGifs = (gifs) => {
//     this.setState({
//         gifArray: gifs
//     });
// }





// render() {

//     return (
//       <div>
     
   
//     <Searchbar setGifs={this.setGifs} />

//       put some gifs in here

     
//       </div>
//     )



//   }
// }

// export default GiphyList;