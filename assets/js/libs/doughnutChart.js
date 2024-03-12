const data1 = [85, 15];
const data2 = [70, 30];
const data3 = [63, 37];

const colors = [
  ['#3399ff', '#dfdfdf'],
  ['#7774ff', '#dfdfdf'],
  ['#29ce8a', '#dfdfdf']
];


const centerLabelPlugin = {
  id: 'center-label',
  beforeDraw: (chart) => {
    const ctx = chart.ctx;
    const width = chart.width;
    const height = chart.height;

    const fontSize = Math.min(0.12 * Math.min(width, height), 40); 

    ctx.save();
    ctx.font = `Bold ${fontSize}px Pretendard`;
    ctx.fillStyle = '#222222';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.translate(width / 2, height / 2); 
    ctx.transform(-1, 0, 0, 1, 0, 0); 
    ctx.transform(0, -1, 1, 0, 0, 0); 
    ctx.fillText(chart.options.centerLabel, 0, 0); 
    ctx.restore();
  }
};
Chart.register(centerLabelPlugin);



new Chart(document.getElementById('myChart1'), {
  type: 'doughnut',
  data: {
    datasets: [
      {
        data: data1,
        backgroundColor: colors[0],
        rotation: 90,
        cutout: '80%',
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
    centerLabel: '85%', 
    interaction: {
      mode: 'index',
      intersect: false,
    },
  },
});


new Chart(document.getElementById('myChart2'), {
  type: 'doughnut',
  data: {
    datasets: [
      {
        data: data2,
        backgroundColor: colors[1],
        rotation: 90,
        cutout: '80%',
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
    centerLabel: '70%', 
    interaction: {
      mode: 'index',
      intersect: false,
    },
  },
});


new Chart(document.getElementById('myChart3'), {
  type: 'doughnut',
  data: {
    datasets: [
      {
        data: data3,
        backgroundColor: colors[2],
        rotation: 90,
        cutout: '80%'
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
    centerLabel: '63%', 
    interaction: {
      mode: 'index',
      intersect: false,
    },
  },
});