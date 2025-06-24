import { View, StyleSheet } from "react-native"
import { useState } from "react"
import {Svg, Path, LinearGradient, Defs, Stop, Text } from "react-native-svg"
import * as d3 from "d3"

function Chart() {
  const data = [64, 80, 75, 77, 82, 80, 71]
  const labels = ["13", "14", "15", "16", "17", "18", "19"]

  const [width, setWidth] = useState(0)
  const height = 200


  const min = Math.min(...data)
  const max = Math.max(...data)

  const xScale = d3.scaleLinear().domain([0, data.length - 1]).range([0, width])
  const yScale = d3.scaleLinear().domain([min, max]).range([height, 0])
  
  const lineFn = d3.line()
                        .x((d, i) => xScale(i))
                        .y((d, i) => yScale(d))                        
                        .curve(d3.curveCardinal.tension(0))
  const svgLine = lineFn(data)

  const areaFn = d3.area()
                        .y0(height)
                        .y1((d, i) => yScale(d))
                        .x((d, i) => xScale(i))
                        .curve(d3.curveCardinal.tension(0))
  const svgArea = areaFn(data)

  const labelPosition = xScale.ticks()
  
  console.log(labelPosition[0]);

  const xTicks = data.map((_, i) => ({
    index: i,
    x: xScale(i)
  }));

  const yTicks = yScale.ticks(5).map(value => ({
  value,
  y: yScale(value)
  }));
  
  
  return ( 
    <View
      style={styles.container}
      onLayout={(({ nativeEvent }) => setWidth(nativeEvent.layout.width))}
    >
      <Svg 
        width={width} 
        height={height}
        viewBox={`-13 0 ${width+20} ${height -20}`}
      >
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#49A2FE" stopOpacity={1} />
            <Stop offset="100%" stopColor="#49A2FE" stopOpacity={0} />
          </LinearGradient>
        </Defs>

        <Path d={svgLine} stroke="#49A2FE" fill="none" strokeWidth={4} />
        <Path d={svgArea} stroke="none" fill="url(#gradient)" />
         {/* Rótulos do eixo X usando os valores do data */}
          {labels.map((value, index) => (
            <Text
              key={index}
              x={xScale(index)}
              y={200-12} // abaixo da área do gráfico
              fontSize={12}
              fill="black"
              textAnchor="middle"
            >
              {value}
            </Text>
          ))}
        {yTicks.map(tick => (
  <Text
    key={tick.value}
    x={0}
    y={tick.y}
    fontSize={12}
    fill="gray"
    textAnchor="start"
  >
    {tick.value}
  </Text>
))}
      </Svg>
      
      
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "auto",
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "white"
  }
})

export default Chart