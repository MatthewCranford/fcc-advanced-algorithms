
// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ 
      "Let It Rock", 
      "You Give Love a Bad Name" 
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for testswww
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
console.log("ID:",id, "Prop:", prop, "Value:", value);


// check if prop isn't "tracks" and value isn't empty "" within ID.
if(prop !== "tracks" && value !== "") {
  // push prop and value
  collection[id][prop] = value;
}
// else if prop === "tracks" and album doesn't have "tracks"
else if (prop === "tracks" && !collection[id][prop]) {
  console.log("true");
  // store value in array
  var tempArr = [value];
  // push prop with array
  collection[id][prop] = tempArr;
}
// else if prop === "tracks" and value isn't empty 
else if (prop === "tracks" && value !== "") {
  // push value to tracks array
  collection[id][prop].push(value);
}
// else if value === "empty 
else if (value === "") {
  // delete given prop from the album
  delete collection[id][prop];
}

return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

