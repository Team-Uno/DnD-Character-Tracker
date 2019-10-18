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
new Race('Dwarf',[],['Constitution',2],25);
new Race('Elf',[],['Dexterity',2],'30'); //int +1
new Race('Halfling',[],['Dexterity',2],25);
new Race('Human',[],['Charisma',1],30);
new Race('Dragonborn',[],['Strength',2],30); //charisma +1
new Race('Gnome',[],['Constitution',1],25);
new Race('Half Elf',[],['Charisma',2],30); //two other ability points +1
new Race('Half Orc',[],['Constitution',1],30);
new Race('Tiefling',[],['Charisma',2],30);

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
