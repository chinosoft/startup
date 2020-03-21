//------------- LocalStorage -------------------------------

function localS() {
  var inputText = document.getElementById("text");
  localStorage.setItem("text", inputText.value);
}
function clearLS() {
  localStorage.removeItem("text");
  document.getElementById("text").value = "";
}

//---------------------------- IndexDB ------------------

function indexDB() {
  var myText = document.getElementById("text").value;
  var indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;
  var openDB;

  try {
    openDB = indexedDB.open("SampleDatabase", 1);
    openDB.onupgradeneeded = function() {
      var db = openDB.result;
      var store = db.createObjectStore("SampleStore", { keyPath: "id" });
      var index = store.createIndex("Index", "pos.text");
    };

    openDB.onsuccess = function() {
      var db = openDB.result;
      var tx = db.transaction("SampleStore", "readwrite");
      var store = tx.objectStore("SampleStore");
      store.put({ id: 0, pos: myText });
    };

    openDB.onerror = function() {
      document.getElementById("text").innerHTML +=
        "Caught error in try block of indexeddb:  ";
    };
  } catch (e) {
    document.getElementById("text").innerHTML +=
      "Caught error in try block of indexeddb:  " + e.Message;
  }
}

function clearDB() {
  var req = indexedDB.deleteDatabase("SampleDatabase");
  req.onsuccess = function() {
    console.log("Deleted database successfully");
  };
  req.onerror = function() {
    console.log("Couldn't delete database");
  };
  req.onblocked = function() {
    console.log("Couldn't delete database due to the operation being blocked");
  };
  document.getElementById("text").value = "";
}

