'use strict';

var allSavedCharacters = [];

function checkForSavedCharacters(){
  var test = window.localStorage.getItem('character');
  if(test){
    allSavedCharacters.push(JSON.parse(test));
  }
}

function createCharacterSelects(){
  var targetCardNode = document.getElementById('cardTarget');
  for(var i = 0; i < allSavedCharacters.length; i++){
    var cardNode = document.createElement('div');
    var classLogoNode = document.createElement('img');
    //TODO: add sr for logo images based on class
    classLogoNode.src = allSavedCharacters[i].classLogo;
    var charNameNode = document.createElement('a');
    charNameNode.setAttribute = ('id', 'nameLink');
    charNameNode.innerText = allSavedCharacters[i].name;
    charNameNode.setAttribute = ('href', '../pages/characterSheet.html');
    var charInfoNode = document.createElement('div');
    charInfoNode.innerText = `${allSavedCharacters[i].level}/${allSavedCharacters[i].characterClass}/${allSavedCharacters[i].race}`;
    cardNode.appendChild(classLogoNode);
    cardNode.appendChild(charNameNode);
    cardNode.appendChild(charInfoNode);
  }
  targetCardNode.appendChild(cardNode);
}


checkForSavedCharacters();
createCharacterSelects();
console.log(allSavedCharacters);
