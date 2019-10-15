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
var rangerAbilities = {
  generalAbilities: [
    'favored enemy',
    'natural explorer',
    'primeval awareness',
    'extra attack',
    'land\'s stride',
    'hide in plain sight',
    'vanish',
    'feral senses',
    'foe slayer'
  ],
  spells: {
    firstLevel: [
      'alarm',
      'animal friendship',
      'cure wounds',
      'detect magic',
      'detect poision and disease',
      'ensnaring strike',
      'fog cloud',
      'goodberry',
      'hail of thorns',
      'hunter\'s mark',
      'jump',
      'longstrider',
      'speak with animals'
    ],
    secondLevel: [
      'animal messenger',
      'bark skin',
      'beast sense',
      'cordon of arrows',
      'dark vision',
      'find traps',
      'lesser restoration',
      'locate animals or plants',
      'locate objects',
      'pass without trace',
      'protection from poison',
      'silence',
      'spike growth'
    ],
    thirdLevel: [
      'conjure animals',
      'conjure barrage',
      'daylight',
      'lightning arrow',
      'nondetection',
      'plant growth',
      'protection from energy',
      'speak with plants',
      'water breathing',
      'water walk',
      'wind wall'
    ],
    fourthLevel: [
      'conjure woodland beings',
      'freedom of movement',
      'grasping vine',
      'locate creature',
      'stoneskin'
    ],
    fifthLevel: [
      'commune with nature',
      'conjure volley',
      'swift quiver',
      'tree stride'
    ],
  },
  fightingStyle: [
    'archery',
    'defense',
    'dueling',
    'two-weapon fighting'
  ],
  rangerArchetype: {
    hunter: {
      huntersPrey: [
        'colossus slayer',
        'giant killer',
        'horder breaker'
      ],
      defensiveTactics: [
        'escape the horde',
        'multiattack defense',
        'steel will'
      ],
      multiattack: [
        'volley',
        'whirlwind attack'
      ],
      superiorHuntersDefense: [
        'evasion',
        'stand against the tide',
        'uncanny dodge'
      ],
    },
    beastMaster: {
      skills: [
        'ranger\'s companion',
        'exceptional training',
        'bestial fury',
        'share spells'
      ],
    },
  },
};
// Global Variables
var characterClassArray = [];
var selectedCharacterClass = null;
var selectedFirstSkill = null;
// Dom Variables
var targetCharacterClassForm = document.getElementById('classSelect');
var targetFirstSkillSelectElement = document.getElementById('skillSelectFirst');
var targetSecondSkillSelectElement = document.getElementById('skillSelectSecond');
//Global Functions
var CharacterClass = function(name, hitPoints, hitDice, saveThrow, skills, abilities, proficiency, spellsKnown, spells, cantripsKnown, cantrips) {
  this.name = name;
  this.hitPoints = hitPoints;
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
    if(characterClassArray[i].name === selectedCharacterClass){
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
    if(characterClassArray[i].name === selectedCharacterClass){
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
// Event Listeners
function CharacterClassSelectListener(event){
  selectedCharacterClass = event.target.value;
  populateSkillSelectFirst();
}

function skillSelectFirstListener(){
  selectedFirstSkill = event.target.value;
  targetSecondSkillSelectElement.disabled = false;
  populateSkillsSelectSecond();
}
// Make Objects
var fighterClass = new CharacterClass('Fighter', 10, 6, ['str', 'con'], ['acrobatics', 'animal handling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival'], fighterAbilities, [2, 3, 4, 5, 6], 0, [], 0, [] );
var rangerClass = new CharacterClass(
  'Ranger',
  10,
  6,
  ['str', 'dex'],
  ['animal handling', 'athletics', 'insight', 'investigation', 'nature', 'perception', 'stealth', 'survival'],
  rangerAbilities,
  [2, 3, 4, 5, 6],
  [0, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11],
  rangerAbilities.spells,
  0,
  []
);

// Run Functions
populateCharacterClassSelect();
targetCharacterClassForm.addEventListener('change', CharacterClassSelectListener);
targetFirstSkillSelectElement.addEventListener('change',skillSelectFirstListener);
