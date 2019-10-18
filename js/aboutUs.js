var ctx = document.getElementById('ourChart').getContext('2d');

function knowledgeExpChart(){
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Course Completed', 'Course to Crush'],
      datasets:[{
        data: [25, 75],
        backgroundColor: ['rgba(0,255,0,1', 'rgba(255,0,0,1'],
      }],
    },
  });
}

knowledgeExpChart();
