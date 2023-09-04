import Chart from 'react-apexcharts';
import { Card, CardBody } from "@nextui-org/react";
import './CategoriesChart.css';
const CategoriesChart = ({ categoriesData, categoriesLabels }) => {

    const state = {
        series: categoriesData,
        chartOptions: {
            labels: categoriesLabels,
            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },

    };

    return (
        <div className='categories-chart-cont'>
            <Card>
                <CardBody>
                    <h1><strong>Categorias</strong></h1>
                    <Chart
                        className='categories-chart'
                        options={state.chartOptions}
                        series={state.series}
                        type="donut"
                        width={600}
                        height={335}
                    />
                </CardBody>
            </Card>
        </div>
    )
}

export default CategoriesChart;