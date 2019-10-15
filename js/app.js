
var Character = function(name, level, xp, hitPoints, skills, abilities, alignment, savingThrow, str, dex, con, int, wis, cha, background, characterClass) {
  this.name = name;
  this.level = level;
  this.xp = xp;
  this.hitPoints = hitPoints;
  this.skills = skills;
  this.abilities = abilities;
  this.alignment = alignment;
  this.savingThrow = savingThrow;
  this.str = str;
  this.dex = dex;
  this.con = con;
  this.int = int;
  this.wis = wis;
  this.cha = cha;
  this.background = background;
  this.characterClass = characterClass;
};

var CharacterClass = function(name, hitPoints, hitDice, saveThrow, skills, abilities, proficiency, spellsKnown, spells) {
  this.name = name;
  this.hitPoints = hitPoints;
  this.hitDice = hitDice;
  this.saveThrow - saveThrow;
  this.skills = skills;
  this.abilities = abilities;
  this.proficiency = proficiency;
  this.spellsKnown = spellsKnown;
  this.spells = spells;
};

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
        ['advanced combat superiority'],
      ],
    },
  },
};

var rougeAbilities = {
  generalAbilities: [
    'expertise',
    'sneak attack',
    'thieves\'s cant',
    'cunning action',
    'uncanny dodge',
    'evasion',
    'reliable talent',
    'blind sense',
    'slippery mind',
    'elusive',
    'stroke of luck'
  ],
  thief: {
    skills: [
      'fast hands',
      'second-story work',
      'supreme sneak',
      'use magic device',
      'thief\'s reflexes'
    ],
  assassin: {
    skills: [
      'bonus proficiencies',
      'assassinate',
      'infiltratoin expertise',
      'imposter',
      'death strike', 
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
      'tree stride',
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
        'share spells',
      ],
    },
  },
};

var wizardAbilities = {
  generalAbilities: [
    'arcane recovery',
    'spell mastery',
    'signature spells'
  ],
  cantrips: [],
  arcaneTradition: {
    abjuration: [
      'abjuration savant',
      'arcane wizard',
      'projected ward',
      'improved abjuration',
      'spell resistance'
    ],
    conjuration: [
      'conjuration',
      'minor conjuration',
      'benign transposition',
      'focus conjuration',
      'durable summons'
    ],
    divination: [
      'divination savant',
      'portent',
      'expert divination',
      'the third eye',
      'greater portent'
    ],
    enchantment: [
      'enchantment savant',
      'hypnotic gaze',
      'instinctive charm',
      'split enchantment',
      'alter memories'
    ],
    evocation: [
      'evocation savant',
      'sculpt spells',
      'potent cantrip',
      'empowered evocation',
      'overchannel'
    ],
    illusion: [
      'illusion savant',
      'improved minor illusion',
      'malleable illusions',
      'illusory self',
      'illusory reality'
    ],
    necromancy: [
      'necromancy savant',
      'grim harvest',
      'undead thralls',
      'injured to undeath',
      'command undeath'
    ],
    transmutation: [
      'transmutation savant',
      'minor alchemy',
      'transmuter\'s stone',
      'shapechanger',
      'master transmuter'
    ],
  },
};

var fighterClass = new CharacterClass(
  'fighter',
  10,
  6,
  ['str', 'con'],
  ['acrobatics', 'animal handling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival'],
  fighterAbilities,
  [2, 3, 4, 5, 6],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  []
);

var rangerClass = new CharacterClass(
  'ranger',
  10,
  6,
  ['str', 'dex'],
  ['animal handling', 'athletics', 'insight', 'investigation', 'nature', 'perception', 'stealth', 'survival'],
  rangerAbilities,
  [2, 3, 4, 5, 6],
  [0, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11],
  rangerAbilities.spells
);

var rougeClass = new CharacterClass(
  'rouge',
  8,
  5,
  ['dex', 'int'],
  ['acrobatics', 'athletics', 'deception', 'insight', 'intimidation', 'perception', 'performance', 'persuasion', 'sleight of hand', 'stealth'],
  rougeAbilities,
  [2, 3, 4 ,5, 6],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  []
);


