
// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart").getContext('2d');
const myAreaChart = new Chart(ordersChart, {
    type: 'line',
    data: {
        labels: ['Aug 1', 'Augg 3', 'Aug 5', 'Aug 7', 'Aug 9', 'Aug 11','Aug 13'],
        datasets: [{
            
            label:'My first dataset',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor:'rgba(220, 92, 124, 1)',
            borderColor:'rgba(220, 92, 124, 1)',
            pointBorderColor: 'rgba(220, 92, 124, 1)',
            borderWidth: 3,
            data:[0,10,5,2,20,30,45]
        }]
    },
    options: {
    }
});

// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart").getContext('2d');
const myBarChart = new Chart(visitorChart, {
    type: 'bar',
    data: {
        labels: ['June', 'July', 'August', 'September', 'Octobber', 'November','December'],
        datasets: [{
            label: 'Men' ,
            data: [12, 19, 3, 5, 2, 3,5],
            backgroundColor:'#37315e', 
            borderColor:'#37315e',
            borderWidth: 1
        }, {
            label: 'Women' ,
            data: [12, 19, 3, 5, 2, 3,5],
            backgroundColor:'rgba(220, 92, 124, 1)',  
            borderColor:'rgba(220, 92, 124, 1)',
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

// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart").getContext('2d');
const myPieChart = new Chart(citiesChart, {
    type: 'pie',
    data: {
        labels:["Riyadh","Jaddah","Sharqia","Mecca"],
        datasets: [{ label: '',
        backgroundColor: [
            'rgba(220, 92, 124, 1)',
            '#37315e',
            'rgba(220, 92, 124, 1)',
            '#37315e',


        ],
        
       // borderColor:'rgba(220, 92, 124, 1)',
        data:[50,20,10,30],
        }]
    },

});
    

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart").getContext('2d');
const myLinearChart = new Chart(ratChart, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            data: [1, 1.5, 2.5, 4, 5, 3],
            backgroundColor:'rgb(64, 29, 186)',
            borderColor:'rgba(220, 92, 124, 1)',
            //pointBorderColor: ,
            borderWidth: 4,
            data:[0,10,5,2,20,30,45],
            

            
        }]
    },
    options: {
        scales: {
            yAxes:[
                {
                    ticks:{
                        beginAtZero:true,
                    }
                }
            ]
        }
    }
});

//Datatable

$(document).ready(function() {
    $('#example').DataTable();
} );








