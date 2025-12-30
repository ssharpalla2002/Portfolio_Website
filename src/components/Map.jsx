import React from "react";
import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        center: [78.9629, 22.5937], // India center
        scale: 970,                 // smaller scale = zoomed out
      }}
      style={{ width: "100%", height: "500px", backgroundColor: "#a2d8f0" }} // Water background
    >
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#c4d6a8"       // Land: soft green
              stroke="#8c8c8c"     // Borders: subtle gray
              strokeWidth={0.5}
              style={{
                default: { outline: "none" },
                hover: { fill: "#a8c48d", cursor: "pointer", transition: "all 0.3s" },
                pressed: { fill: "#91b372" },
              }}
            />
          ))
        }
      </Geographies>

      <Annotation
        subject={[77.5775, 12.9629]} // Example: Bangalore
        dx={-80}
        dy={-40}
        connectorProps={{
          stroke: "#ff8c00",
          strokeWidth: 0,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#ff8c00"
          fontWeight="600"
          fontSize={14}
        >
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
