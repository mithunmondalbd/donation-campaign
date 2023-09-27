
import { VictoryPie } from "victory-pie";
const PiChart = () => {
    
    const myData = [
        { x: "66.7%", y: 800 },
        { x: "33.3%", y:  300},
        
        
      ];
    return (
        <div style={{ height: 620 }}>
        <VictoryPie
          data={myData}
          colorScale= {["red", "green"]}
          radius={100}
        />
      </div>
    );
};

export default PiChart;