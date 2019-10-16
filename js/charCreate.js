'use strict';

//Source Data
var fighterAbilities = {
  fightingStyle: [
    'archery',
    'defense',
    'dueling',
    'great weapon fighting',
    'protection',
    'two weapon fighting'
  ],
  generalAbilities: [
    'second wind',
    'action surge',
    'extra attack',
    'indomitable'
  ],
  martialArchetype: {
    champion: {
      skills:[
        ['improved critical'],
        ['remarkable athlete'],
        ['additional fighting style'],
        ['superior critical'],
        ['survivor']
      ],
    },
    battleMaster: {
      manuevers: [
        'commander\'s strike',
        'disarming attack',
        'distracting strike',
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
        'trip attack'
      ],
      skills: [
        ['combat superiority'],
        ['know your enemy'],
        ['improved combat superiority'],
        ['relentless'],
        ['advanced combat superiority']
      ],
    },
  },
};
var alignments = ['Lawful Good','Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'Neutral Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];
// Global Variables
var characterClassArray = [];
var characterArray = [];
var selectedCharacterClass = null;
var selectedFirstSkill = null;
// Dom Variables
var targetCharacterClassForm = document.getElementById('classSelect');
var targetFirstSkillSelectElement = document.getElementById('skillSelectFirst');
var targetSecondSkillSelectElement = document.getElementById('skillSelectSecond');
var targetAbilitySelectElement = document.getElementById('abilitiesSelectFirst');
var targetAlignmentSelectElement = document.getElementById('alignmentSelect');
var targetSubmitButtonElement = document.getElementById('submitButton');
var abilitiesDefault = document.getElementById('abilitiesDefault');
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

var Character = function(name, level, xp, gold, startingHitPoints, skills, abilities, alignment, savingThrow, abilityScore, background, characterClass, characterRace) {
  this.name = name;
  this.level = level;
  this.xp = xp;
  this.gold = gold;
  this.startingHitPoints = startingHitPoints;
  this.skills = skills;
  this.abilities = abilities;
  this.alignment = alignment;
  this.savingThrow = savingThrow;
  this.abilityScore = abilityScore;
  this.background = background;
  this.characterClass = characterClass;
  this.characterRace = characterRace;
  this.abilityModifiers = [0, 0, 0, 0, 0, 0];
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

function populateFighterAbilitiesSelectFirst(){
  for (var i = 0; i < characterClassArray.length; i++){
    if(characterClassArray[i].name === selectedCharacterClass.name){
      for(var j = 0; j < fighterAbilities.fightingStyle.length; j++){
        var newAbilitySelectNode = document.createElement('option');
        newAbilitySelectNode.value = fighterAbilities.fightingStyle[j];
        newAbilitySelectNode.innerText = fighterAbilities.fightingStyle[j];
        targetAbilitySelectElement.appendChild(newAbilitySelectNode);
      }
    }
  }
  abilitiesDefault.innerText = 'Fighting Styles';
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
  populateFighterAbilitiesSelectFirst();
}

function skillSelectFirstListener(event){
  selectedFirstSkill = event.target.value;
  targetSecondSkillSelectElement.disabled = false;
  populateSkillsSelectSecond();
}

function submitListener(event){
  event.preventDefault();
  console.log(document.forms.characterCreatorForm.elements.fullName.value);
  var newCharacter = new Character(formElements.fullName.value, 0, 0, 0, selectedCharacterClass.startingHitPoints, [formElements.skillSelectFirst.value, formElements.skillSelectSecond.value], [formElements.abilitiesSelectFirst.value, fighterAbilities], formElements.alignmentSelect.value, selectedCharacterClass.saveThrow, [parseInt(formElements.strengthNumber.value), parseInt(formElements.dexterityNumber.value), parseInt(formElements.constitutionNumber.value), parseInt(formElements.intelligenceNumber.value), parseInt(formElements.wisdomNumber.value), parseInt(formElements.charismaNumber.value)], formElements.background.value, selectedCharacterClass.name);
  newCharacter.calcAbilityModifier();
  console.log(characterArray);
  saveCharacter();
}
// Make Objects
var fighterClass = new CharacterClass('Fighter', 10, 6, ['str', 'con'], ['acrobatics', 'animal handling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival'], fighterAbilities, [2, 3, 4, 5, 6], 0, [], 0, [] );

// Run Functions
populateCharacterClassSelect();
populateAlignmentSelect();
targetCharacterClassForm.addEventListener('change', CharacterClassSelectListener);
targetFirstSkillSelectElement.addEventListener('change',skillSelectFirstListener);
targetSubmitButtonElement.addEventListener('click', submitListener);
