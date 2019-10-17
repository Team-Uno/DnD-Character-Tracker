'use strict';
//Global Variables
var targetRaceForm = document.getElementById('raceSelect');
//Object and Array Associated Variables
var raceArray = [];

// travis navigator, matt driver
var Race = function(name, raceAbilities, raceBonus, raceSpeed){
  this.name = name;
  this.raceAbilities = raceAbilities;
  this.raceBonus = raceBonus;
  this.raceSpeed = raceSpeed;
  raceArray.push(this);
};
// Make Objects
//empty array is for possible raceAbilities
var dwarf = new Race('Dwarf',[],['Constitution',2],25);
var elf = new Race('Elf',[],['Dexterity',2],'30'); //int +1
var halfling = new Race('Halfling',[],['Dexterity',2],25);
var human = new Race('Human',[],['Charisma',1],30);
var dragonborn = new Race('Dragonborn',[],['Strength',2],30); //charisma +1
var Gnome = new Race('Gnome',[],['Constitution',1],25);
var halfElf = new Race('Half Elf',[],['Charisma',2],30); //two other ability points +1
var halfOrc = new Race('Half Orc',[],['Constitution',1],30);
var tiefling = new Race('Tiefling',[],['Charisma',2],30);

function populateRaceSelect (){
  for (var i = 0; i < raceArray.length; i++){
    var newRaceNode = document.createElement('option');
    newRaceNode.value = raceArray[i].name;
    newRaceNode.innerText = raceArray[i].name;
    targetRaceForm.appendChild(newRaceNode);
  }
}
// Run Functions
populateRaceSelect();
