$(document).ready(function () {
  function movie(event) {
    event.preventDefault();
    clear();

    let apiurl = "https://api.themoviedb.org/3/search/movie?";
    let key = "api_key=408148785d4227b956248e0bb1647b96&query=";
    let title = $("#search-input").val().trim();
    let movievidoes = "&append_to_response=videos";

    $.ajax({
      url: apiurl + key + title + movievidoes,
      method: "GET",
    }).then(function (response) {
      console.log(response);

      // for posters
      let moviePostercontainer = $("<img>");
      let path = response.results[0].poster_path;
      let purl = "https://image.tmdb.org/t/p/w500/";
      moviePostercontainer.attr("src", purl + path);

      console.log(path);
      // movie synopsis
      let movieDetail = $("<p>");
      movieDetail.text(response.results[0].overview);

      // movie title

      let mTitle = $("<h2>");
      mTitle.text(response.results[0].title);

      // for movies
      // setting up movie url
      let trailerUrl = "https://api.themoviedb.org/3/movie/";
      let trailerkey =
        "/videos?api_key=408148785d4227b956248e0bb1647b96&language=en-US";
      let trailerid = response.results[0].id;

      // movie trailer api call
      $.ajax({
        url: trailerUrl + trailerid + trailerkey,
        method: "GET",
      }).then(function (response) {
        console.log(response);

        let youtube = "https://www.youtube.com/embed/";
        let id = response.results[0].key;
        $(".videos").attr("src", youtube + id);

        console.log(youtube + id);
      });

      $(".anything").append(mTitle, moviePostercontainer, movieDetail);
    });
  }

  $("#search-button").on("click", movie);

  function clear() {
    $(".anything").empty();
  }
});
