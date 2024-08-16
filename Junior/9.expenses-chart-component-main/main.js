
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            backgroundColor: [
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)'
            ],
            borderWidth: 0,
            borderRadius: 4,
            hoverBackgroundColor: [
                '#FF9B87',
                '#FF9B87',
                'rgba(75, 192, 192, 0.5)',
                '#FF9B87',
                '#FF9B87',
                '#FF9B87',
                '#FF9B87',
            ]
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    color: 'hsl(28, 10%, 53%)',
                    font: {
                        size: 11,
                        family: '"DM Sans", "sans-serif"',
                    }
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                },
                border: {
                    display: false
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                xAlign: 'center',
                displayColors: false, 
                backgroundColor: 'hsl(25, 47%, 15%)',
                borderColor: 'transparent', 
                borderRadius: 4,
                padding: 9,
                bodyFont: {
                    size: 12,  
                    family: '"DM Sans", "sans-serif"',
                    weight: 'bold'
                },
                callbacks: {
                    label: function(context) {
                        const value = context.raw;
                        return `$${value}`;
                    },
                    title: function() {
                        return false;
                    }
                }
            }
        },
        onHover: function(event, chartElement) {
            if (chartElement.length) {
                event.native.target.style.cursor = 'pointer';
            } else {
                event.native.target.style.cursor = 'default';
            }
        }
    }
});