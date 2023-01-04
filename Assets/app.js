$(document).ready(function () {
  function movie() {
     let apiurl = "https://api.themoviedb.org/3/search/movie?";
    let key = "api_key=408148785d4227b956248e0bb1647b96&query=";
    let title = "creed "; 
    let movievidoes = "&append_to_response=videos"

    $.ajax({
      url: apiurl + key + title + movievidoes,
      method: "GET",
    }).then(function (response) {
      console.log(response);

      
  let moviecontainer = $("<img>")
  let path = response.results[0].poster_path
  let purl = "https://image.tmdb.org/t/p/w500/"
  moviecontainer.attr('src', purl + path)

  console.log(path)

  $('.anything').append(moviecontainer)
    });
  }

  movie();

});
