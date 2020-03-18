function fetchRepo() {
  var search = document.getElementById("search").value;
  const Url = "https://api.github.com/search/repositories?q=" + search;
  fetch(Url)
    .then(data => {
      return data.json();
    })
    .then(res => {
      document.getElementById("messages").style.backgroundColor = "white";
      var repos = document.getElementById("repo");
      var listsearch = res.items;
      for (i = 0; i < listsearch.length; i++) {
        repos.innerHTML += "<li>" + listsearch[i].name + "</li>";
      }
    })
    .catch(function(err) {
      document.getElementById("messages").style.backgroundColor = "red";
      document.getElementById("msg").innerHTML = "<h2>Something went wrong ";
    });
}
