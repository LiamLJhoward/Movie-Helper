$(document).ready(function () {
  function movie() {
    let apiurl = "https://api.themoviedb.org/3/search/movie?";
    let key = "api_key=408148785d4227b956248e0bb1647b96&query=";
    let title = "creed ";
    let movievidoes = "&append_to_response=videos";

    $.ajax({
      url: apiurl + key + title + movievidoes,
      method: "GET",
    }).then(function (response) {
      console.log(response);


// for posters 
      let moviecontainer = $("<img>");
      let path = response.results[0].poster_path;
      let purl = "https://image.tmdb.org/t/p/w500/";
      moviecontainer.attr("src", purl + path);

      console.log(path);

     

      // for movies 

     

   /*    let movievideo = $("<video>")
      let source = "https://api.themoviedb.org/3/movie/312221/videos?api_key=408148785d4227b956248e0bb1647b96&language=en-US"
      movievideo.attr("src", source) 
 */

      $(".anything").append(moviecontainer);
    });

    $.ajax({

        url:  "https://api.themoviedb.org/3/movie/312221/videos?api_key=408148785d4227b956248e0bb1647b96&language=en-US",
        method: "GET",
      }).then(function(response){

        console.log(response)

        
        let youtube= "https://www.youtube.com/embed/"
        let id = response.results[0].key
        $('.videos').attr("src", youtube + id) 
       



console.log(youtube + id)
        


      }) 
  }

  movie();
});



