//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
  return Object.values(object);
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
  return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
  var arr = [];
  for (var key in object) {
    if (typeof object[key] === "string") {
      arr.push(object[key]);
    }
  }
  return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
  if (Array.isArray(collection)) {
    return "array";
  } else if (typeof collection === "object") {
    return "object";
  }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(str) {
  var newstr = str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
  return newstr;
}
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  return string.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// use capitalize Word to capitalize the name
function welcomeMessage(object) {
  var name = object.name;
  name = name.charAt(0).toUpperCase() + name.slice(1);
  var message = "Welcome " + name + "!";
  return message;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// use capitalize Word to capitalize the name and species
function profileInfo(object) {
  var name = object.name;
  var species = object.species;
  name = name.charAt(0).toUpperCase() + name.slice(1);
  species = species.charAt(0).toUpperCase() + species.slice(1);
  var message = name + " is a " + species;
  return message;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  var noises = object.noises;
  if (noises === undefined) {
    return "there are no noises";
  } else if (noises.length > 0) {
    return object.noises.join(" ");
  } else {
    return "there are no noises";
  }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
  if (string.includes(word)) {
    return true;
  } else {
    return false;
  }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
  object.friends.push(name);
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  if (object.friends === undefined) {
    return false;
  } else if (object.friends.includes(name)) {
    return true;
  } else {
    return false;
  }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
  var nonFriends = [];

  for (var i = 0; i < array.length; i++) {
    var person = array[i];
    if (person.name != name && !person.friends.includes(name)) {
      nonFriends.push(person.name);
    }
  }
  return nonFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  object[key] = value;

  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  for (var i = 0; i < array.length; i++) {
    var prop = array[i];
    delete object[prop];
  }
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  var deduped = [];

  for (var i = 0; i < array.length; i++) {
    var elt = array[i];

    if (deduped.includes(elt) === false) {
      deduped.push(elt);
    }
  }

  return deduped;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.objectValues = objectValues;
  module.exports.keysToString = keysToString;
  module.exports.valuesToString = valuesToString;
  module.exports.arrayOrObject = arrayOrObject;
  module.exports.capitalizeWord = capitalizeWord;
  module.exports.capitalizeAllWords = capitalizeAllWords;
  module.exports.welcomeMessage = welcomeMessage;
  module.exports.profileInfo = profileInfo;
  module.exports.maybeNoises = maybeNoises;
  module.exports.hasWord = hasWord;
  module.exports.addFriend = addFriend;
  module.exports.isFriend = isFriend;
  module.exports.nonFriends = nonFriends;
  module.exports.updateObject = updateObject;
  module.exports.removeProperties = removeProperties;
  module.exports.dedup = dedup;
}
