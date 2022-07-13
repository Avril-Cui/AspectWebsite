import ReactEcharts from "echarts-for-react";
import { useState, useEffect } from "react";
import simulated_price from "../../price_info/simulated_comp_price.json";
const WrknChart = () => {
  const [price, setPrice] = useState(null)
  var option;
  useEffect(() => {
    fetch('/api/getPrice')
      .then((res) => res.json())
      .then((result_value) => {
        setPrice(result_value)
        if(price !== null){
          var data = price
        } else {
          var data = [0, 0]
        }
        
        console.log(price)
        if(data.length !== 179){
          for (let i = data.length; i < 179; i++) {
            data[i] = [i, null]
          }
        }
        
        const dateList = data.map(function (item) {
          return item[0];
        });
        const valueList = data.map(function (item) {
          return item[1];
        });
        option = {
          // Make gradient line here
          backgroundColor: {
            colorStops: [
              {
                offset: 0,
                color: '#2c2c2c'
              },
            ]
          },
          color: {
            
          },
      
          tooltip: {
            trigger: 'axis',
            textColor: "#C9FFD1"
          },
          xAxis: [
            {
              data: dateList
            },
          ],
          yAxis: {
            scale: true,
            splitArea: {
              show: true,
            },
          },
          grid: {
          left: "10%",
          right: "10%",
          bottom: "50%",
          backgroundColor: "rgba(8, 8, 8, 8)",
          show: true,
          borderWidth: 0,
          },
          series: [
            {
              type: 'line',
              showSymbol: false,
              data: valueList,
              lineStyle: {
                normal: {
                  color: '#C9FFD1',
                },
            },
            },
            
          ]
        };
      })    
  }, [])
  // console.log(price)

  
  return (
    // <div>Hi</div>
    <ReactEcharts  style={{height: 600, marginTop: 100, marginLeft: -5, width: 600}} option={option} />
  );
};

export default WrknChart;
