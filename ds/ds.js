function openNav() {
    document.getElementById("myNav").style.height = "100%";
} 

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

const labels1 = ['Python', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Blade', 'Shell', 'Go', 'Jupyter Notebook'];

const data1 = {
    labels: labels1,
    datasets: [{
        label: 'Languages',
        backgroundColor: ['#0B0033b0', '#832232b0', '#CE8964b0', '#114B5Fb0', '#64113Fb0', '#E6AF2Eb0', '#581F18b0', '#370031b0', '#2C4251b0'],
        borderColor: 'transparent',
        data: [6344, 33264, 22510, 4812, 404171, 91545, 3506, 263, 2963787],
    }]
};

const config1 = {
    type: 'doughnut',
    data: data1,
    options: {
        responsive:true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                title: {
                    display: true,
                    text: 'Programming Lang.',
                    color: 'black'
                },
                position: 'right',
                labels: {
                    color: 'black'
                }
            }
        }
    }
};

donutChart = document.getElementById('myChart1');

const myChart1 = new Chart(
    donutChart,
    config1
);

const labels2 = [
    'Mon',
    'Tue',
    'Wed',
    'Thurs',
    'Fri',
    'Sat',
    'Sun'
];

const data2 = {
    labels: labels2,
    datasets: [{
        label: 'Daywise Commit Freq.',
        backgroundColor: ['#2A342Eb0', '#3E5543b0', '#722E66b0', '#6A6C48b0', '#281E30b0', '#646723b0', '#3C6464b0'],
        opacity: 0.5,
        borderColor: 'transparent',
        data: [10, 28, 14, 23, 38, 27, 25],
    }]
};

const config2 = {
    type: 'polarArea',
    data: data2,
    options: {
        responsive:true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                title: {
                    display: true,
                    text: 'Daywise Commit',
                    color: 'black'
                },
                position: 'right',
                labels: {
                    color: 'black'
                }
            }
        }
    }
};

const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
);

const labels3 = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
];

const data3 = {
    labels: labels3,
    datasets: [{
        label: 'Monthly Commit Freq.',
        backgroundColor: 'magenta',
        borderColor: 'black',
        data: [21, 10, 4, 2, 0, 0, 17, 1, 11, 28, 71, 9],
    }]
};

const config3 = {
    type: 'line',
    data: data3,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                title: {
                    color: 'black'
                },
                labels: {
                    color: 'black'
                }
            }
        }
    }
};

const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config3
);