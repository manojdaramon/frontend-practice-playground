"use client";

import Link from "next/link";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const pieData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Monthly Data",
            data: [0, 10, 5, 2, 20, 3, 10],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
                "#FF9F40",
                "#C9CBCF",
            ],
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
            text: "Monthly Pie Chart",
        },
    },
};

const PieChart = () => {
    return (
        <div style={{ width: "400px" }}>
            <h1>Pie Chart</h1>
            <Pie data={pieData} options={options} />

            <Link href="/animations" >animations</Link>
        </div>
    );
};

export default PieChart;
