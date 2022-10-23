import React from "react";
import { Doughnut, Bar } from 'react-chartjs-2';
import {Chart, 
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
Chart.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
    );


export default function Dashboard(props) {
    // modifying item name
    const itemName = props.queryResult.name

    // populating food specs table
    const specList = []
    for (const itemKey in props.queryResult) {
        specList.push(
            <tr>
                <td>
                    <span className="red">
                        <b>{itemKey}</b>
                    </span>
                </td> 
                <td>
                    {props.queryResult[itemKey]}
                </td>
            </tr>
            )
    }
    delete specList[4]

    // doughnut chart data
    const doughnutData = {
        labels: [
          'Sugar(g)',
          'Fiber(g)',
          'Sodium(g)',
          'Potassium(g)',
          'Fats(g)',
          'Cholestrol(g)',
          'Protien(g)',
          'Carbohydrates(g)'
        ],
        datasets: [{
          label: `Nutrition Specs for ${props.queryResult.name}`,
          data: [
            props.queryResult.sugar_g,
            props.queryResult.fiber_g,
            props.queryResult.sodium_mg/1000,
            props.queryResult.potassium_mg/1000,
            props.queryResult.fat_total_g,
            props.queryResult.cholestrol_mg/1000,
            props.queryResult.protien_g,
            props.queryResult.carbohydrates_total_g
        ],
          backgroundColor: [
            '#FFD2D2',
            '#FF9F9F',
            '#FF6B6B',
            '#FF3636',
            '#D10C0C',
            '#A70A0A',
            '#750A0A',
            '#9F4848',
            '#B19292'
          ],
          hoverOffset: 5
        }]
      }

    // bar chart data
      const barData = {
        labels: [
                    'Sugar(g)',
                    'Fiber(g)',
                    'Sodium(g)',
                    'Potassium(g)',
                    'Fats(g)',
                    'Cholestrol(g)',
                    'Protien(g)',
                    'Carbohydrates(g)'
                ],
        datasets: [{
          data: [
            props.queryResult.sugar_g,
            props.queryResult.fiber_g,
            props.queryResult.sodium_mg/1000,
            props.queryResult.potassium_mg/1000,
            props.queryResult.fat_total_g,
            props.queryResult.cholestrol_mg/1000,
            props.queryResult.protien_g,
            props.queryResult.carbohydrates_total_g
          ],
          backgroundColor: [
            '#FFD2D2',
            '#FF9F9F',
            '#FF6B6B',
            '#FF3636',
            '#D10C0C',
            '#A70A0A',
            '#750A0A',
            '#9F4848',
            '#B19292'
          ],
          borderColor: [
            '#FF0000'
          ],
          borderWidth: 1
        }]
      }

    return (
        <section className="dashboard-container">
            <section className="spec-table-container">
                <table className="spec-table">
                    {
                    specList.map((item) => item)
                    }
                </table>
            </section>
            <section className="spec-viz">
                
                <div className="doughnut-chart-container">
                    <Doughnut
                        data={doughnutData} 
                        options={{
                        plugins: {
                            title: {
                            display: false,
                            text: "Nutrition Ratio"
                            },
                            legend: {
                            display: true,
                            position: "right"
                            }
                        }
                        }}/>
                </div>
                <div className="bar-chart-container">
                    <Bar
                        data={barData} 
                        options={{
                        plugins: {
                            title: {
                            display: false,
                            text: "Nutrition Comparision"
                            },
                            legend: {
                            display: false,
                            
                        }
                        }
                        }}/>
                </div>
            </section>
        </section>
    )
} 
