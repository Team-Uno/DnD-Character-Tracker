'use strict';

var allSavedCharacters = [];

var selectCharacter = document.getElementsByClassName('nameLink');
var allKeys = Object.keys(localStorage);
console.log(allKeys);

function checkForSavedCharacters(){
  for(var i = 0; i < allKeys.length; i++){
    var characters = window.localStorage.getItem(`${allKeys[i]}`);
    allSavedCharacters.push(JSON.parse(characters));
  }
  console.log(allSavedCharacters);
}

function createCharacterSelects(){
  var targetCardNode = document.getElementById('cardTarget');
  for(var i = 0; i < allSavedCharacters.length; i++){
    var cardNode = document.createElement('div');
    var classLogoNode = document.createElement('img');
    classLogoNode.src = allSavedCharacters[i].classLogo;
    var charNameNode = document.createElement('a');
    charNameNode.setAttribute = ('class', 'nameLink');
    charNameNode.setAttribute = ('id', `${allSavedCharacters[i].name}`);
    charNameNode.innerText = allSavedCharacters[i].name;
    charNameNode.setAttribute = ('href', '../pages/characterSheet.html');
    var charInfoNode = document.createElement('div');
    charInfoNode.innerText = `${allSavedCharacters[i].level}/${allSavedCharacters[i].characterClass}/${allSavedCharacters[i].race}`;
    cardNode.appendChild(classLogoNode);
    cardNode.appendChild(charNameNode);
    cardNode.appendChild(charInfoNode);
    targetCardNode.appendChild(cardNode);
  }
}

// function saveCharacterReference(){
//   name = 
// }

// selectCharacter.addEventListener('click', saveCharacterReference());

checkForSavedCharacters();
console.log(allSavedCharacters);
createCharacterSelects();

console.log(characterArray);