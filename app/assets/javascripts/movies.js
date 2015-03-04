function movieTitle(title) {
  $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?s" + title + "&title=movie",
    dataType: "json",
    success: function(data) {
      console.log(data);
    },
    error: function() {
      return("Sorry. No movie found");
    }
  });
}

function listenForSubmit() {
  $("form").on("submit", function(event){
    event.preventDefault();
    var inputSearch = this.search_for_movie.value;
    movieTitle(inputSearch);
  });
}
$(document).ready(listenForSubmit);