'use strict';

//Global variables
var allSavedCharacters = [];
var allKeys = Object.keys(localStorage);

function checkForSavedCharacters(){
  for(var i = 0; i < allKeys.length; i++){
    var characters = window.localStorage.getItem(`${allKeys[i]}`);
    allSavedCharacters.push(JSON.parse(characters));
  }
}

function createCharacterSelects(){
  var targetCardNode = document.getElementById('cardTarget');
  for(var i = 0; i < allSavedCharacters.length; i++){
    var cardNode = document.createElement('div');
    var classLogoNode = document.createElement('img');
    classLogoNode.src = allSavedCharacters[i].classLogo;
    var charNameNode = document.createElement('p');
    charNameNode.setAttribute('class', 'nameLink');
    charNameNode.setAttribute('id', `${allSavedCharacters[i].name}`);
    charNameNode.innerText = allSavedCharacters[i].name;
    var charInfoNode = document.createElement('div');
    charInfoNode.innerText = `${allSavedCharacters[i].level}/${allSavedCharacters[i].characterClass}/${allSavedCharacters[i].race}`;
    var charSelectButton = document.createElement('button');
    charSelectButton.setAttribute('id', `${allSavedCharacters[i].name}`);
    charSelectButton.setAttribute('class', 'charSelectButton');
    charSelectButton.innerText = 'Select Character';
    charSelectButton.addEventListener('click', saveCharacterReference);
    cardNode.appendChild(classLogoNode);
    cardNode.appendChild(charNameNode);
    cardNode.appendChild(charInfoNode);
    cardNode.appendChild(charSelectButton);
    targetCardNode.appendChild(cardNode);
  }
}

function saveCharacterReference(event){
  var selectedName = event.target.id;
  console.log(selectedName);
  for(var i = 0; i < allSavedCharacters.length; i++){
    if(selectedName === allSavedCharacters[i].name){
      var selectedCharacter = JSON.stringify(allSavedCharacters[i]);
      window.localStorage.setItem('selectedCharacter', selectedCharacter);
    }
  }
}

checkForSavedCharacters();
createCharacterSelects();
