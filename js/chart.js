'use strict';
var levelThresholds = {
  'level1': [0,300],
  'level2': [300,900],
  'level3': [900,2700],
  'level4': [2700, 6500],
  'level5': [6500, 14000],
  'level6': [14000, 23000],
  'level7': [23000, 34000],
  'level8': [34000, 48000],
  'level9': [48000, 64000],
  'level10': [64000, 85000],
  'level11': [85000, 100000],
  'level12': [100000,120000],
  'level13': [120000,140000],
  'level14': [140000,165000],
  'level15': [165000, 195000],
  'level16': [195000, 225000],
  'level17': [225000, 265000],
  'level18': [265000, 305000],
  'level19': [305000, 355000],
  'level20': [355000, 0],
};
var ctx = document.getElementById('myChart').getContext('2d');
var exp = document.getElementById('chartGrabThis');
function levelCalculator(exp){
  return 0 <= exp && exp < 300 ? 'level1'
    : 300 <= exp && exp < 900 ? 'level2'
      : 900 <= exp && exp < 2700 ? 'level3'
        : 2700 <= exp && exp < 6500 ? 'level4'
          : 6500 <= exp && exp < 14000 ? 'level5'
            : 14000 <= exp && exp < 23000 ? 'level6'
              : 23000 <= exp && exp < 34000 ? 'level7'
                : 34000 <= exp && exp < 48000 ? 'level8'
                  : 48000 <= exp && exp < 64000 ? 'level9'
                    : 64000 <= exp && exp < 85000 ? 'level10'
                      : 85000 <= exp && exp < 100000 ? 'level11'
                        : 100000 <= exp && exp < 120000 ? 'level12'
                          : 120000 <= exp && exp < 140000 ? 'level13'
                            : 140000 <= exp && exp < 165000 ? 'level14'
                              : 165000 <= exp && exp < 195000 ? 'level15'
                                : 195000 <= exp && exp < 225000 ? 'level16'
                                  : 225000 <= exp && exp < 265000 ? 'level17'
                                    : 265000 <= exp && exp < 305000 ? 'level18'
                                      : 305000 <= exp && exp < 355000 ? 'level19'
                                        : 355000 <= exp ? 'level20!'
                                          : 'oops.';
}

function dataGenerator(exp){
  var whichLevel = levelCalculator(exp);
  var max = levelThresholds[whichLevel][1];
  var expLeft = max - exp;
  return [exp,expLeft];
}

function pieChart(){
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Current Experience', 'Experience to next level'],
      datasets:[{
        data: dataGenerator(162000),
        backgroundColor: ['rgba(255,0,0,1)', 'rgba(0,0,255,1'],
      }],
    },
  });
}

pieChart();
