import Image from "next/image";
import styles from "./page.module.css";
import BarGraph from "./components/bar-graph";
import LineGraphs from "./components/line-graphs";
import PieChart from "./components/pie-charts";

export default function Home() {
  return (
    <div >
      <LineGraphs />
      <BarGraph/>
      <PieChart/>
    </div>
  );
}
