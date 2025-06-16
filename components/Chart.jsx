import { Text, View, StyleSheet } from "react-native"
import { useState } from "react"
import {Svg, Path, LinearGradient, Defs, Stop } from "react-native-svg"
import * as d3 from "d3"

function Chart() {
  const data = [100, 200, 187, 400, 52, 310, 250]

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
  

  return ( 
    <View
      style={styles.container}
      onLayout={(({ nativeEvent }) => setWidth(nativeEvent.layout.width))}
    >
      <Svg 
        width={width} 
        height={height}
      >
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#49A2FE" stopOpacity={1} />
            <Stop offset="100%" stopColor="#49A2FE" stopOpacity={0} />
          </LinearGradient>
        </Defs>

        <Path d={svgLine} stroke="#49A2FE" fill="none" strokeWidth={4} />
        <Path d={svgArea} stroke="none" fill="url(#gradient)" />
      </Svg>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    paddingTop: 10,
    paddingBottom: 10,
  }
})

export default Chart