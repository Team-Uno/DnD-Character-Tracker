//travis navigator, matt driver
var Race = function(name, raceAbilities, raceBonus, raceSpeed){
  this.name = name;
  this.raceAbilities = raceAbilities;
  this.raceBonus = raceBonus;
  this.raceSpeed = raceSpeed;
};

//empty array is for possible raceAbilities
var dwarf = new Race('Dwarf',[],[cons,2],25);
var elf = new Race('Elf',[],[dex,2],'30'); //int +1
var halfling = new Race('Halfling',[],[dex,2],25);
var human = new Race('Human',[],[abilityScore,1],30);
var dragonborn = new Race('Dragonborn',[],[str,2],30); //charisma +1
var Gnome = new Race('Gnome',[],[cons,1],25);
var halfElf = new Race('Half Elf',[],[char,2],30); //two other ability points +1
var halfOrc = new Race('Half Orc',[],[cons,1],30);
var tiefling = new Race('Tiefling',[],[char,2],30);

