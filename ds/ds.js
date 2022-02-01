new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '.dots',
    draggable: true,
});

function openNav() {
    document.getElementById("myNav").style.height = "100%";
} 

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

const labels1 = ['Python', 'HTML', 'CSS', 'JS', 'PHP', 'Blade', 'Shell', 'Go', 'Jupyter Notebook'];

const data1 = {
    labels: labels1,
    datasets: [{
        label: 'Languages',
        backgroundColor: ['#5F7A61B0', '#7267CBB0', '#FFE652B0', '#8BCDCDB0', '#ECB365B0', '#FFFFFFB0', '#C1DEAEB0', '#FF865EB0', '#B088F9B0'],
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
                    text: 'Prog. Languages',
                    color: 'white'
                },
                position: 'bottom',
                labels: {
                    color: 'white'
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
        label: 'Commits',
        backgroundColor: ['#B088F9B0', '#FFF76AB0', '#FBF6F0B0', '#8BCDCDB0', '#C1DEAEB0', '#D49A89B0', '#797A7EB0'],
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
                    text: 'Daywise Commits',
                    color: 'white'
                },
                position: 'bottom',
                labels: {
                    color: 'white'
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
    datasets: [
        {
            label: '2017 Dataset',
            backgroundColor: '#FFB319',
            data: [0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 20, 0],
        },
        {
            label: '2019 Dataset',
            backgroundColor: '#C1DEAE',
            data: [0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 20, 0],
        },
        {
            label: '2020 Dataset',
            backgroundColor: '#8E806A',
            data: [0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 20, 0],
        },
        {
            label: '2021 Dataset',
            backgroundColor: '#B980F0',
            data: [0, 0, 4, 0, 0, 0, 15, 1, 11, 26, 51, 9],
        },
        {
            label: '2022 Dataset',
            backgroundColor: '#456268',
            data: [21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
    ]
};

const config3 = {
    type: 'bar',
    data: data3,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                title: {
                    color: 'white'
                },
                position: 'bottom',
                labels: {
                    color: 'white'
                }
            }
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        }
    }
};

const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config3
);