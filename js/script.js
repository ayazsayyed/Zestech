var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(96, 173, 193, 0.2)'

      ],
      borderColor: [
        'rgba(96, 173, 193,1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
var ctx1 = document.getElementById("myChart1");
var myChart1 = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ["Red", "Yellow", "Green", "Purple"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(	88, 92, 92, 0.2)'
      ],
      borderColor: [
        'rgba(	88, 92, 92,1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
var ctx2 = document.getElementById("myChart2");
var myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ["Red", "Yellow", "Green", "Purple"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 160, 60, 0.2)'
      ],
      borderColor: [
        'rgba(255, 160, 60,1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
var ctx3 = document.getElementById("myChart3");
var myChart3 = new Chart(ctx3, {
  type: 'polarArea',
  data: {
    labels: ["Red", "Yellow", "Green", "Purple"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(	118, 188, 94, 0.2)'
      ],
      borderColor: [
        'rgba(	118, 188, 94,1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
var ctx4 = document.getElementById("myChart4");
var myChart4 = new Chart(ctx4, {
  type: 'bubble',
  data: {
    labels: ["Red", "Yellow", "Green", "Purple"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});