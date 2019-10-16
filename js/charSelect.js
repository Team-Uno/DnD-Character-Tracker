'use strict';

var allSavedCharacters = null;

function checkForSavedCharacters(){
  var saves = [];
  if(window.localStorage.getItem('character') !== null){
    saves = JSON.parse('character');
  }
  return allSavedCharacters = saves;
}

function createCharacterSelects(){
  var targetCardNode = document.getElementById('cardTarget');
  for(var i = 0; i < allSavedCharacters.length; i++){
    var cardNode = document.createElement('div');
    var classLogoNode = document.createElement('img');
    //TODO: add sr for logo images based on class
    classLogoNode.setAttribute = ('src', allSavedCharacters[i].classLogo);
    var charNameNode = document.createElement('a');
    charNameNode.setAttribute = ('id', 'nameLink');
    charNameNode.innerText = allSavedCharacters[i].name;
    charNameNode.setAttribute = ('href', '../pages/characterSheet.html');
    var charInfoNode = document.createElement('div');
    charInfoNode.innerText = `${allSavedCharacters.level}/${allSavedCharacters.class}/${allSavedCharacters.race}`;
    cardNode.appendChild(classLogoNode);
    cardNode.appendChild(charNameNode);
    cardNode.appendChild(charInfoNode);
  }
  targetCardNode.appendChild(cardNode);
}


checkForSavedCharacters();
createCharacterSelects();
console.log(allSavedCharacters);
