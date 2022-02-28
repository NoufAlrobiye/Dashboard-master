
// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");

// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart").getContext('2d');

// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart");

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");



const myBarChart = new Chart(visitorChart, {
    type: 'bar',
    data: {
        labels: ['June', 'July', 'August', 'September', 'Octobber', 'November','December'],
        datasets: [{
            label: 'Men' ,
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


