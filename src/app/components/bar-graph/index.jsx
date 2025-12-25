"use client";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [8, 10, 5, 2, 20, 3, 10],
        },
        {
            label: "My Second dataset",
            backgroundColor: "blue",
            borderColor: "red",
            borderWidth: 1,
            data: [0, 1, 2, 3, 4, 5, 6],
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Chart.js Bar Element",
        },
    },
};

const BarGraph = () => {
    return (
        <div>
            <h1>Bar Graph</h1>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarGraph;