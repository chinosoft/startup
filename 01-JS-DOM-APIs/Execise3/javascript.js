function fetchOne() {
  const Url = "http://api.icndb.com/jokes/random";
  fetch(Url)
    .then(data => {
      return data.json();
    })
    .then(res => {
      document.getElementById("messages").style.backgroundColor = "white";
      document.getElementById("msg").innerHTML =
        "<h3>" + res.value.joke + "</h3>";
    })
    .catch(function(err) {
      document.getElementById("messages").style.backgroundColor = "red";
      document.getElementById("msg").innerHTML =
        "<h2>Something went wrong ";
    });
}
