var ctx = document.getElementById('ourChart').getContext('2d');

function knowledgeExpChart(){
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Course Completed', 'Course to Crush'],
      datasets:[{
        data: [25, 75],
        backgroundColor: ['rgb(0,102,102', 'rgb(64,64,64'],
      }],
    },
    options: {
      legend: {
        display: true,
        labels: {
          fontColor: 'rgb(253,245,230)',
        },
      },
    },
  });
}

knowledgeExpChart();
