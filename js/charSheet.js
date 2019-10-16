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
function armorClassCalc(){
  return currentCharacter.startingArmorClass + currentCharacter.abilityModifiers[1];
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
  var nameValueNode = document.createElement('div');
  nameValueNode.innerText = currentCharacter.name;
  targetNameNode.appendChild(nameValueNode);
}
function populateHitPoints(){
  var targetHitPointNode = document.getElementById('hitPoints');
  var hitPointValueNode = document.createElement('div');
  hitPointValueNode.value = hitPointCalc();
  hitPointValueNode.innerText = hitPointCalc();
  targetHitPointNode.appendChild(hitPointValueNode);
}
function populateAbilityScores(){
  var targetStrengthScoreNode = document.getElementById('strengthValue');
  var strengthValueNode = document.createElement('div');
  strengthValueNode.value = currentCharacter.abilityScore[0];
  strengthValueNode.innerText = currentCharacter.abilityScore[0];
  targetStrengthScoreNode.appendChild(strengthValueNode);

  var targetDexterityScoreNode = document.getElementById('dexterityValue');
  var dexterityValueNode = document.createElement('div');
  dexterityValueNode.value = currentCharacter.abilityScore[1];
  dexterityValueNode.innerText = currentCharacter.abilityScore[1];
  targetDexterityScoreNode.appendChild(dexterityValueNode);

  var targetConstitutionScoreNode = document.getElementById('constitutionValue');
  var constitutionValueNode = document.createElement('div');
  constitutionValueNode.value = currentCharacter.abilityScore[2];
  constitutionValueNode.innerText = currentCharacter.abilityScore[2];
  targetConstitutionScoreNode.appendChild(constitutionValueNode);

  var targetIntelligenceScoreNode = document.getElementById('intelligenceValue');
  var intelligenceValueNode = document.createElement('div');
  intelligenceValueNode.value = currentCharacter.abilityScore[3];
  intelligenceValueNode.innerText = currentCharacter.abilityScore[3];
  targetIntelligenceScoreNode.appendChild(intelligenceValueNode);

  var targetWisdomScoreNode = document.getElementById('wisdomValue');
  var wisdomValueNode = document.createElement('div');
  wisdomValueNode.value = currentCharacter.abilityScore[4];
  wisdomValueNode.innerText = currentCharacter.abilityScore[4];
  targetWisdomScoreNode.appendChild(wisdomValueNode);

  var targetCharismaScoreNode = document.getElementById('charismaValue');
  var charismaValueNode = document.createElement('div');
  charismaValueNode.value = currentCharacter.abilityScore[5];
  charismaValueNode.innerText = currentCharacter.abilityScore[5];
  targetCharismaScoreNode.appendChild(charismaValueNode);

}
function populateAbilityModifiers(){
  var targetStrengthModNode = document.getElementById('strengthModifier');
  var strengthModValueNode = document.createElement('div');
  strengthModValueNode.value = currentCharacter.abilityModifiers[0];
  strengthModValueNode.innerText = currentCharacter.abilityModifiers[0];
  targetStrengthModNode.appendChild(strengthModValueNode);

  var targetDexterityModNode = document.getElementById('dexterityModifier');
  var dexterityModValueNode = document.createElement('div');
  dexterityModValueNode.value = currentCharacter.abilityModifiers[1];
  dexterityModValueNode.innerText = currentCharacter.abilityModifiers[1];
  targetDexterityModNode.appendChild(dexterityModValueNode);

  var targetConstitutionModNode = document.getElementById('constitutionModifier');
  var constitutionModValueNode = document.createElement('div');
  constitutionModValueNode.value = currentCharacter.abilityModifiers[2];
  constitutionModValueNode.innerText = currentCharacter.abilityModifiers[2];
  targetConstitutionModNode.appendChild(constitutionModValueNode);

  var targetIntelligenceModNode = document.getElementById('intelligenceModifier');
  var intelligenceModValueNode = document.createElement('div');
  intelligenceModValueNode.value = currentCharacter.abilityModifiers[3];
  intelligenceModValueNode.innerText = currentCharacter.abilityModifiers[3];
  targetIntelligenceModNode.appendChild(intelligenceModValueNode);

  var targetWisdomModNode = document.getElementById('wisdomModifier');
  var wisdomModValueNode = document.createElement('div');
  wisdomModValueNode.value = currentCharacter.abilityModifiers[4];
  wisdomModValueNode.innerText = currentCharacter.abilityModifiers[4];
  targetWisdomModNode.appendChild(wisdomModValueNode);

  var targetCharismaModNode = document.getElementById('charismaModifier');
  var charismaModValueNode = document.createElement('div');
  charismaModValueNode.value = currentCharacter.abilityModifiers[5];
  charismaModValueNode.innerText = currentCharacter.abilityModifiers[5];
  targetCharismaModNode.appendChild(charismaModValueNode);
}
function populateClass(){
  var targetClassNode = document.getElementById('class');
  var classValueNode = document.createElement('div');
  classValueNode.value = currentCharacter.characterClass;
  classValueNode.innerText = currentCharacter.characterClass;
  targetClassNode.appendChild(classValueNode);
}
function populateRace(){
  var targetRaceNode = document.getElementById('race');
  var raceValueNode = document.createElement('div');
  raceValueNode.value = currentCharacter.race;
  raceValueNode.innerText = currentCharacter.race;
  targetRaceNode.appendChild(raceValueNode);
}
function populateGold(){
  var targetGoldNode = document.getElementById('gold');
  var goldValueNode = document.createElement('div');
  goldValueNode.value = currentCharacter.gold;
  goldValueNode.innerText = currentCharacter.gold;
  targetGoldNode.appendChild(goldValueNode);
}
function populateExp(){
  var targetExpNode = document.getElementById('experienceTotal');
  var expValueNode = document.createElement('div');
  expValueNode.value = currentCharacter.xp;
  expValueNode.innerText = currentCharacter.xp;
  targetExpNode.appendChild(expValueNode);
}
function populateAlignment(){
  var targetAlignmentNode = document.getElementById('alignment');
  var alignmentValueNode = document.createElement('div');
  alignmentValueNode.value = currentCharacter.alignment;
  alignmentValueNode.innerText = currentCharacter.alignment;
  targetAlignmentNode.appendChild(alignmentValueNode);
}
function populateArmorClass(){
  var targetArmorClassNode = document.getElementById('armorClass');
  var armorClassNode = document.createElement('div');
  armorClassNode.value = armorClassCalc();
  armorClassNode.innerText = armorClassCalc();
  targetArmorClassNode.appendChild(armorClassNode);
}


loadCharacter();
console.log(currentCharacter);
populateAbilityModifiers();
populateAbilityScores();
populateName();
populateHitPoints();
populateClass();
populateRace();
populateGold();
populateExp();
populateAlignment();
populateArmorClass();
