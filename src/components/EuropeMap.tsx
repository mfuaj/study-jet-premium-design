import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const GEO_URL = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const highlightedCountries: Record<string, { name: string; coordinates: [number, number]; flag: string; description: string }> = {
  Hungary: {
    name: "Hungary",
    coordinates: [19.5, 47.2],
    flag: "🇭🇺",
    description: "Vibrant student life and high-quality education make Hungary an ideal choice.",
  },
  France: {
    name: "France",
    coordinates: [2.2, 46.6],
    flag: "🇫🇷",
    description: "Top universities and rich culture make France a prime study destination.",
  },
  Italy: {
    name: "Italy",
    coordinates: [12.5, 42.5],
    flag: "🇮🇹",
    description: "Historic universities attract students worldwide to Italy.",
  },
  Germany: {
    name: "Germany",
    coordinates: [10.4, 51.2],
    flag: "🇩🇪",
    description: "Affordable education and world-class research facilities.",
  },
  Spain: {
    name: "Spain",
    coordinates: [-3.7, 40.4],
    flag: "🇪🇸",
    description: "A unique blend of culture and education makes Spain popular.",
  },
};

const highlightedNames = Object.keys(highlightedCountries);

const EuropeMap = () => {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseEnter = (name: string, e: React.MouseEvent) => {
    if (highlightedNames.includes(name)) {
      setActiveCountry(name);
      const rect = (e.currentTarget as SVGElement).closest(".rsm-svg")?.getBoundingClientRect();
      if (rect) {
        setTooltipPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top - 10,
        });
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (activeCountry) {
      const rect = (e.currentTarget as SVGElement).closest(".rsm-svg")?.getBoundingClientRect();
      if (rect) {
        setTooltipPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top - 10,
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setActiveCountry(null);
    setTooltipPos(null);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden bg-card border border-border/50 shadow-card">
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-10, -52, 0],
          center: [0, 0],
          scale: 900,
        }}
        width={800}
        height={500}
        className="rsm-svg"
        style={{ width: "100%", height: "auto" }}
      >
        <defs>
          <radialGradient id="map-bg-gradient" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="hsl(222, 47%, 18%)" />
            <stop offset="100%" stopColor="hsl(222, 47%, 10%)" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background */}
        <rect x="-100" y="-100" width="1000" height="700" fill="url(#map-bg-gradient)" />

        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name;
              const isHighlighted = highlightedNames.includes(name);
              const isActive = activeCountry === name;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(e) => handleMouseEnter(name, e as unknown as React.MouseEvent)}
                  onMouseMove={handleMouseMove as any}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    default: {
                      fill: isHighlighted
                        ? isActive
                          ? "hsl(38, 65%, 55%)"
                          : "hsl(222, 35%, 35%)"
                        : "hsl(222, 47%, 22%)",
                      stroke: isHighlighted
                        ? isActive
                          ? "hsl(38, 65%, 65%)"
                          : "hsl(222, 35%, 42%)"
                        : "hsl(222, 35%, 28%)",
                      strokeWidth: isHighlighted ? 1 : 0.5,
                      outline: "none",
                      transition: "all 0.3s ease",
                      cursor: isHighlighted ? "pointer" : "default",
                      filter: isActive ? "url(#glow)" : "none",
                    },
                    hover: {
                      fill: isHighlighted
                        ? "hsl(38, 65%, 55%)"
                        : "hsl(222, 35%, 30%)",
                      stroke: isHighlighted
                        ? "hsl(38, 65%, 65%)"
                        : "hsl(222, 35%, 35%)",
                      strokeWidth: isHighlighted ? 1.5 : 0.5,
                      outline: "none",
                      cursor: isHighlighted ? "pointer" : "default",
                      filter: isHighlighted ? "url(#glow)" : "none",
                    },
                    pressed: {
                      fill: isHighlighted
                        ? "hsl(38, 65%, 50%)"
                        : "hsl(222, 47%, 22%)",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Pulsing markers on highlighted countries */}
        {Object.values(highlightedCountries).map((country) => (
          <Marker key={country.name} coordinates={country.coordinates}>
            <circle r={5} fill="hsl(38, 65%, 55%)" opacity={0.9}>
              <animate
                attributeName="r"
                values="4;8;4"
                dur="2.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.8;0.2;0.8"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r={3} fill="hsl(38, 65%, 55%)" />
            <text
              textAnchor="middle"
              y={-12}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                fill: "hsl(45, 100%, 96%)",
                fontWeight: 500,
                pointerEvents: "none",
              }}
            >
              {country.name}
            </text>
          </Marker>
        ))}
      </ComposableMap>

      {/* Tooltip */}
      {activeCountry && tooltipPos && highlightedCountries[activeCountry] && (
        <div
          className="absolute pointer-events-none bg-card/95 backdrop-blur-md p-4 rounded-lg shadow-card border border-gold/30 max-w-[240px] z-20"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{highlightedCountries[activeCountry].flag}</span>
            <h4 className="font-display text-lg font-semibold text-primary">
              {highlightedCountries[activeCountry].name}
            </h4>
          </div>
          <p className="font-body text-muted-foreground text-xs leading-relaxed">
            {highlightedCountries[activeCountry].description}
          </p>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ background: "hsl(222, 35%, 35%)" }} />
          <span className="font-body text-xs text-muted-foreground">Our Destinations</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ background: "hsl(38, 65%, 55%)" }} />
          <span className="font-body text-xs text-muted-foreground">Active</span>
        </div>
      </div>
    </div>
  );
};

export default EuropeMap;
