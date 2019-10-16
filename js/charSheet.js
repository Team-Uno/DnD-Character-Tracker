'use strict';

//Global Variable
var currentCharacter = null;
//dom variables


function loadCharacter(){
  var savedCharacter = localStorage.getItem('bob');
  currentCharacter = JSON.parse(savedCharacter);
}
function populateName(){
  var targetNameNode = document.getElementById('name');
  var nameValueNode = document.createElement('p');
  nameValueNode.innerText = currentCharacter.name;
  targetNameNode.appendChild(nameValueNode);
}

//Get ability score values and create html elements to display
function populateAbilityScores(){
  var targetStrengthScoreNode = document.getElementById('strengthValue');
  var strengthValueNode = document.createElement('p');
  strengthValueNode.value = currentCharacter.str;
  strengthValueNode.innerText = currentCharacter.str;
  targetStrengthScoreNode.appendChild(strengthValueNode);

  var targetDexterityScoreNode = document.getElementById('dexterityValue');
  var dexterityValueNode = document.createElement('p');
  dexterityValueNode.value = currentCharacter.dex;
  dexterityValueNode.innerText = currentCharacter.dex;
  targetDexterityScoreNode.appendChild(dexterityValueNode);

  var targetConstitutionScoreNode = document.getElementById('constitutionValue');
  var constitutionValueNode = document.createElement('p');
  constitutionValueNode.value = currentCharacter.con;
  constitutionValueNode.innerText = currentCharacter.con;
  targetConstitutionScoreNode.appendChild(constitutionValueNode);

  var targetIntelligenceScoreNode = document.getElementById('intelligenceValue');
  var intelligenceValueNode = document.createElement('p');
  intelligenceValueNode.value = currentCharacter.int;
  intelligenceValueNode.innerText = currentCharacter.int;
  targetIntelligenceScoreNode.appendChild(intelligenceValueNode);

  var targetWisdomScoreNode = document.getElementById('wisdomValue');
  var wisdomValueNode = document.createElement('p');
  wisdomValueNode.value = currentCharacter.wis;
  wisdomValueNode.innerText = currentCharacter.wis;
  targetWisdomScoreNode.appendChild(wisdomValueNode);

  var targetCharismaScoreNode = document.getElementById('charismaValue');
  var charismaValueNode = document.createElement('p');
  charismaValueNode.value = currentCharacter.cha;
  charismaValueNode.innerText = currentCharacter.cha;
  targetCharismaScoreNode.appendChild(charismaValueNode);

}



loadCharacter();
populateAbilityScores();
populateName();
