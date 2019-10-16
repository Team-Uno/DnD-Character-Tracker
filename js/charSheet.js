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
function populatehitPoints(){
  var targetHitPointNode = document.getElementById('hitPoints');
  var hitPointValueNode = document.createElement('p');
  hitPointValueNode.value = currentCharacter.startingHitPoints + currentCharacter.abilityModifiers[2];
  hitPointValueNode.innerText = hitPointValueNode.value;
  targetHitPointNode.appendChild(hitPointValueNode);
}

//Get ability score values and create html elements to display
function populateAbilityScores(){
  var targetStrengthScoreNode = document.getElementById('strengthValue');
  var strengthValueNode = document.createElement('p');
  strengthValueNode.value = currentCharacter.abilityScore[0];
  strengthValueNode.innerText = currentCharacter.abilityScore[0];
  targetStrengthScoreNode.appendChild(strengthValueNode);

  var targetDexterityScoreNode = document.getElementById('dexterityValue');
  var dexterityValueNode = document.createElement('p');
  dexterityValueNode.value = currentCharacter.abilityScore[1];
  dexterityValueNode.innerText = currentCharacter.abilityScore[1];
  targetDexterityScoreNode.appendChild(dexterityValueNode);

  var targetConstitutionScoreNode = document.getElementById('constitutionValue');
  var constitutionValueNode = document.createElement('p');
  constitutionValueNode.value = currentCharacter.abilityScore[2];
  constitutionValueNode.innerText = currentCharacter.abilityScore[2];
  targetConstitutionScoreNode.appendChild(constitutionValueNode);

  var targetIntelligenceScoreNode = document.getElementById('intelligenceValue');
  var intelligenceValueNode = document.createElement('p');
  intelligenceValueNode.value = currentCharacter.abilityScore[3];
  intelligenceValueNode.innerText = currentCharacter.abilityScore[3];
  targetIntelligenceScoreNode.appendChild(intelligenceValueNode);

  var targetWisdomScoreNode = document.getElementById('wisdomValue');
  var wisdomValueNode = document.createElement('p');
  wisdomValueNode.value = currentCharacter.abilityScore[4];
  wisdomValueNode.innerText = currentCharacter.abilityScore[4];
  targetWisdomScoreNode.appendChild(wisdomValueNode);

  var targetCharismaScoreNode = document.getElementById('charismaValue');
  var charismaValueNode = document.createElement('p');
  charismaValueNode.value = currentCharacter.abilityScore[5];
  charismaValueNode.innerText = currentCharacter.abilityScore[5];
  targetCharismaScoreNode.appendChild(charismaValueNode);

}



loadCharacter();
console.log(currentCharacter);
populateAbilityScores();
populateName();
populatehitPoints();
