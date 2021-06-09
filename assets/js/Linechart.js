var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Agender','Female', 'Male','Non-Binary'],
        datasets: [{
            label: 'Height',
            data: [71.00, 66.99, 72.32,94.39],
            backgroundColor: 'transparent',
            borderColor: 'red',             
            borderWidth: 4
        },
        { 
            label: 'Weight',
            data: [100.00,141.87,220.79,238.57],
            backgroundColor: 'transparent',
            borderColor: 'purple',             
            borderWidth: 4
          }]
    },
    options: {
      scales: {
        x:[{
          ticks:{
            font:{
            size: 40,
            }
          },
      elements:{
        line:{
          tension:0.1
        } 
        
      },
 
            y: {
                beginAtZero: true
            },
           
            }]
        }
    }
});