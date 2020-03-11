function fetchRepo() {
  var search = document.getElementById("search").value;
  const Url = "https://api.github.com/search/repositories?q=" + search;
  fetch(Url)
    .then(data => {
      return data.json();
    })
    .then(res => {
      console.log(res);
      var repos = document.getElementById("repo");
      var listsearch = res.items;
      for (i=0; i<listsearch.length;i++){
        repos.innerHTML += "<li>"+ listsearch[i].name + "</li>";
        console.log(listsearch[i].name);
      }
    })
    .catch(function(err) {
      // There was an error
      document.getElementById("msg").innerHTML =
       "<h2>Something went wrong</h2>"+err;
    });
}
