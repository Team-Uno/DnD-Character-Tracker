'use strict';

//Source Data
var fighterAbilities = [
  'archery',
  'defense',
  'dueling',
  'great weapon fighting',
  'protection',
  'two weapon fighting',
  'second wind',
  'action surge',
  'extra attack',
  'indomitable',
  'improved critical',
  'remarkable athlete',
  'additional fighting style',
  'superior critical',
  'survivor',
  'commander\'s strike',
  'disarming attack',
  'evasive footwork',
  'feinting attack',
  'goading attack',
  'lunging attack',
  'maneuvering attack',
  'menacing attack',
  'parry',
  'precision attack',
  'pushing attack',
  'rally',
  'riposte',
  'sweeping attack',
  'trip attack',
  'combat superiority',
  'know your enemy',
  'improved combat superiority',
  'relentless',
  'advanced combat superiority'
];

var alignments = ['Lawful Good','Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'Neutral Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];
// Global Variables
var characterClassArray = [];
var characterArray = [];
var selectedCharacterClass = null;
var selectedFirstSkill = null;
var selectedAbilitiesArray = [];
var pointsPool = null;
var pointsPoolArray = [];
var d6 = 6;
// Dom Variables
var targetCharacterClassForm = document.getElementById('classSelect');
var targetFirstSkillSelectElement = document.getElementById('skillSelectFirst');
var targetSecondSkillSelectElement = document.getElementById('skillSelectSecond');
var targetAbilityDivElement = document.getElementById('abilityDiv');
var targetAlignmentSelectElement = document.getElementById('alignmentSelect');
var targetSubmitButtonElement = document.getElementById('submitButton');
var targetAbilityOutput = document.getElementById('abilityScoreOutput');
var targetStatButton = document.getElementById('statButton');
var formElements = document.forms.characterCreatorForm.elements;
//Constructor Functions
var CharacterClass = function(name, startingHitPoints, hitDice, saveThrow, skills, abilities, proficiency, spellsKnown, spells, cantripsKnown, cantrips) {
  this.name = name;
  this.startingHitPoints = startingHitPoints;
  this.hitDice = hitDice;
  this.saveThrow = saveThrow;
  this.skills = skills;
  this.abilities = abilities;
  this.proficiency = proficiency;
  this.spellsKnown = spellsKnown;
  this.spells = spells;
  this.cantripsKnown = cantripsKnown;
  this.cantrips = cantrips;
  characterClassArray.push(this);
};


var Character = function(name, level, xp, gold, startingHitPoints, skills, abilities, alignment, savingThrow, abilityScore, background, characterClass, race) {
  this.name = name;
  this.level = level;
  this.xp = xp;
  this.gold = gold;
  this.startingHitPoints = startingHitPoints;
  this.startingArmorClass = 10;
  this.skills = skills;
  this.abilities = abilities;
  this.alignment = alignment;
  this.savingThrow = savingThrow;
  this.abilityScore = abilityScore;
  this.background = background;
  this.characterClass = characterClass;
  this.abilityModifiers = [0, 0, 0, 0, 0, 0];
  this.race = race;

  characterArray.push(this);
};

Character.prototype.calcAbilityModifier = function(){
  for(var i = 0; i < this.abilityScore.length; i++){
    if(this.abilityScore[i] === 0 || this.abilityScore[i] === 1){
      this.abilityModifiers[i] = -5;
    }
    if(this.abilityScore[i] === 2 || this.abilityScore[i] === 3){
      this.abilityModifiers[i] = -4;
    }
    if(this.abilityScore[i] === 4 || this.abilityScore[i] === 5){
      this.abilityModifiers[i] = -3;
    }
    if(this.abilityScore[i] === 6 || this.abilityScore[i] === 7){
      this.abilityModifiers[i] = -2;
    }
    if(this.abilityScore[i] === 8 || this.abilityScore[i] === 9){
      this.abilityModifiers[i] = -1;
    }
    if(this.abilityScore[i] === 10 || this.abilityScore[i] === 11){
      this.abilityModifiers[i] = 0;
    }
    if(this.abilityScore[i] === 12 || this.abilityScore[i] === 13){
      this.abilityModifiers[i] = 1;
    }
    if(this.abilityScore[i] === 14 || this.abilityScore[i] === 15){
      this.abilityModifiers[i] = 2;
    }
    if(this.abilityScore[i] === 16 || this.abilityScore[i] === 17){
      this.abilityModifiers[i] = 3;
    }
    if(this.abilityScore[i] === 18 || this.abilityScore[i] === 19){
      this.abilityModifiers[i] = 4;
    }
    if(this.abilityScore[i] === 20){
      this.abilityModifiers[i] = 5;
    }
  }
};

//Local Storage
function saveCharacter(){
  var saveCharacter = JSON.stringify(characterArray[0]);
  window.localStorage.setItem(characterArray[0].name, saveCharacter);
}

//Dom Functions
function populateCharacterClassSelect(){
  for (var i = 0; i < characterClassArray.length; i++){
    var newCharacterClassNode = document.createElement('option');
    newCharacterClassNode.value = characterClassArray[i].name;
    newCharacterClassNode.innerText = characterClassArray[i].name;
    targetCharacterClassForm.appendChild(newCharacterClassNode);
  }
}

function populateSkillSelectFirst(){
  for (var i = 0; i < characterClassArray.length; i++){
    if(characterClassArray[i].name === selectedCharacterClass.name){
      for(var j = 0; j < characterClassArray[i].skills.length; j++){
        var newSkillSelectNode = document.createElement('option');
        newSkillSelectNode.value = characterClassArray[i].skills[j];
        newSkillSelectNode.innerText = characterClassArray[i].skills[j];
        targetFirstSkillSelectElement.appendChild(newSkillSelectNode);
      }
    }
  }
}

function populateSkillsSelectSecond(){
  for (var i = 0; i < characterClassArray.length; i++){
    if(characterClassArray[i].name === selectedCharacterClass.name){
      for(var j = 0; j < characterClassArray[i].skills.length; j++){
        if(selectedFirstSkill !== characterClassArray[i].skills[j]){
          var newSkillSelectNode = document.createElement('option');
          newSkillSelectNode.value = characterClassArray[i].skills[j];
          newSkillSelectNode.innerText = characterClassArray[i].skills[j];
          targetSecondSkillSelectElement.appendChild(newSkillSelectNode);
        }
      }
    }
  }
}

function populateFighterAbilitiesSelect(){
  for (var i = 0; i < characterClassArray.length; i++){
    if(characterClassArray[i].name === selectedCharacterClass.name){
      for(var j = 0; j < formElements.levelInput.value;j++){
        var newLabelNode = document.createElement('label');
        newLabelNode.for = `abilitySelect${j}`;
        newLabelNode.innerText = 'Choose an ability:';
        targetAbilityDivElement.appendChild(newLabelNode);

        var newSelectNode = document.createElement('select');
        newSelectNode.name = `abilitySelect${j}`;
        newSelectNode.id = `abilitySelect${j}`;
        newSelectNode.className = 'abilitySelect';
        newLabelNode.appendChild(newSelectNode);
        for(var k = 0; k < selectedCharacterClass.abilities.length; k++){
          var newAbilityOptionNode = document.createElement('option');
          newAbilityOptionNode.value = selectedCharacterClass.abilities[k];
          newAbilityOptionNode.innerText = selectedCharacterClass.abilities[k];
          newSelectNode.appendChild(newAbilityOptionNode);
        }
      }
    }
  }
}

function populateAlignmentSelect(){
  for (var i = 0; i < alignments.length; i++){
    var newAlignmentOptionNode = document.createElement('option');
    newAlignmentOptionNode.value = alignments[i];
    newAlignmentOptionNode.innerText = alignments[i];
    targetAlignmentSelectElement.appendChild(newAlignmentOptionNode);
  }
}

// Event Listeners
function CharacterClassSelectListener(event){
  selectedCharacterClass = event.target.value;
  for (var i = 0; i < characterClassArray.length; i++){
    if(characterClassArray[i].name === selectedCharacterClass){
      selectedCharacterClass = characterClassArray[i];
    }
  }
  populateSkillSelectFirst();
  populateFighterAbilitiesSelect();
}

function skillSelectFirstListener(event){
  selectedFirstSkill = event.target.value;
  targetSecondSkillSelectElement.disabled = false;
  populateSkillsSelectSecond();
}

function submitListener(event){
  event.preventDefault();
  pushAbilitiesToArray();
  var newCharacter = new Character(formElements.fullName.value, 0, 0, 0, selectedCharacterClass.startingHitPoints, [formElements.skillSelectFirst.value, formElements.skillSelectSecond.value], selectedAbilitiesArray, formElements.alignmentSelect.value, selectedCharacterClass.saveThrow, [parseInt(formElements.strengthNumber.value), parseInt(formElements.dexterityNumber.value), parseInt(formElements.constitutionNumber.value), parseInt(formElements.intelligenceNumber.value), parseInt(formElements.wisdomNumber.value), parseInt(formElements.charismaNumber.value)], formElements.background.value, selectedCharacterClass.name, formElements.raceSelect.value);
  newCharacter.calcAbilityModifier();
  console.log(characterArray);
  saveCharacter();
}

function generateStatBlockListener (){
  pointsPool = null;
  for (var j = 0; j < 6;j++){
    pointsPoolArray = [];
    for (var i = 0; i < 4;i++){
      pointsPoolArray.push(Math.floor((Math.random() * d6) + 1));
    }
    var minNumber = null;
    var newPointsPoolArray = pointsPoolArray.filter(function(element){
      if(element === Math.min(...pointsPoolArray) && minNumber === null){
        minNumber = element;
      } else if(element !== Math.min(...pointsPoolArray || minNumber)){
        return true;
      }
    });
    var totalValue = newPointsPoolArray.reduce(statAdder);
    pointsPool += totalValue;
  }
  displayStatBlockListener();
}

// function abilityScoreChangeListener(event){
//   var initialValue = event.target.value;
  
// }
// Helper Functions
function displayStatBlockListener(){
  targetAbilityOutput.innerText = pointsPool;
}

function statAdder(accumulator, currentElement){
  return accumulator + currentElement;
}

function pushAbilitiesToArray(){
  var targetAbilityClass = document.querySelectorAll('.abilitySelect');
  for(var i = 0; i < formElements.levelInput.value;i++){
    selectedAbilitiesArray.push(targetAbilityClass[i].value);
  }
}

// Make Objects
var fighterClass = new CharacterClass('Fighter', 10, 6, ['str', 'con'], ['acrobatics', 'animal handling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival'], fighterAbilities, [2, 3, 4, 5, 6], 0, [], 0, [] );

// Run Functions
populateCharacterClassSelect();
populateAlignmentSelect();
targetCharacterClassForm.addEventListener('change', CharacterClassSelectListener);
targetFirstSkillSelectElement.addEventListener('change',skillSelectFirstListener);
targetSubmitButtonElement.addEventListener('click', submitListener);
targetStatButton.addEventListener('click', generateStatBlockListener);
// targetAbilityClass.addEventListener('click', pushAbilitiesToArray);
