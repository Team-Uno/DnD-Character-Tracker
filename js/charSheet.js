'use strict';

//Global Variable
var currentCharacter = null;
//Dom Variables
var targetRollDiceButton = document.getElementById('rollDiceButton');
var targetRollDiceSelect = document.getElementById('diceRollSelect');
var targetDiceRollDisplay = document.getElementById('diceRollDisplay');
//Helper functions
function hitPointCalc(){
  return currentCharacter.startingHitPoints + currentCharacter.abilityModifiers[2];
}
function displayDiceRoll(){
  var rollTotal = 0;
  if(targetRollDiceSelect.value === 'd20'){
    rollTotal = roll20();
  }
  if(targetRollDiceSelect.value === 'd12'){
    rollTotal = roll12();
  }
  if(targetRollDiceSelect.value === 'd10'){
    rollTotal = roll10();
  }
  if(targetRollDiceSelect.value === 'd6'){
    rollTotal = roll6();
  }
  if(targetRollDiceSelect.value === 'd4'){
    rollTotal = roll4();
  }
  targetDiceRollDisplay.value = rollTotal;
  targetDiceRollDisplay.innerText = rollTotal;
}
//Dice rollers
function roll20(){
  return Math.floor(Math.random() * (20 -1 + 1) +1);
}
function roll12(){
  return Math.floor(Math.random() * (12 -1 + 1) +1);
}
function roll10(){
  return Math.floor(Math.random() * (10 -1 + 1) +1);
}
function roll6(){
  return Math.floor(Math.random() * (6 -1 + 1) +1);
}
function roll4(){
  return Math.floor(Math.random() * (4 -1 + 1) +1);
}

//Local storage functions
function loadCharacter(){
  var savedCharacter = localStorage.getItem('bob');
  currentCharacter = JSON.parse(savedCharacter);
}
//Event Listener
targetRollDiceButton.addEventListener('click', displayDiceRoll);
//DOM functions
function populateName(){
  var targetNameNode = document.getElementById('name');
  var nameValueNode = document.createElement('p');
  nameValueNode.innerText = currentCharacter.name;
  targetNameNode.appendChild(nameValueNode);
}
function populateHitPoints(){
  var targetHitPointNode = document.getElementById('hitPoints');
  var hitPointValueNode = document.createElement('p');
  hitPointValueNode.value = hitPointCalc();
  hitPointValueNode.innerText = hitPointCalc();
  targetHitPointNode.appendChild(hitPointValueNode);
}
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
function populateClass(){
  var targetClassNode = document.getElementById('class');
  var classValueNode = document.createElement('p');
  classValueNode.value = currentCharacter.characterClass;
  classValueNode.innerText = currentCharacter.characterClass;
  targetClassNode.appendChild(classValueNode);
}
function populateRace(){
  var targetRaceNode = document.getElementById('race');
  var raceValueNode = document.createElement('p');
  raceValueNode.value = currentCharacter.characterRace;
  raceValueNode.innerText = currentCharacter.characterRace;
  targetRaceNode.appendChild(raceValueNode);
}
function populateGold(){
  var targetGoldNode = document.getElementById('gold');
  var goldValueNode = document.createElement('p');
  goldValueNode.value = currentCharacter.gold;
  goldValueNode.innerText = currentCharacter.gold;
  targetGoldNode.appendChild(goldValueNode);
}


loadCharacter();
console.log(currentCharacter);
populateAbilityScores();
populateName();
populateHitPoints();
populateClass();
populateGold();
