function fetchOne() {
  const Url = "http://api.icndb.com/jokes/random";
  fetch(Url)
    .then(data => {
      return data.json();
    })
    .then(res => {
      console.log(res);
      document.getElementById("msg").innerHTML =
        "<h3>" + res.value.joke + "</h3>";
    })
    .catch(function(err) {
      // There was an error
      document.getElementById("msg").innerHTML =
       "<h2>Something went wrong</h2>";
    });
}
