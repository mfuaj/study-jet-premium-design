import { useState, useCallback } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

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
    description: "Italy's historic universities attract students worldwide.",
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
  Malta: {
    name: "Malta",
    coordinates: [14.4, 35.9],
    flag: "🇲🇹",
    description: "English-speaking Mediterranean island with quality European education.",
  },
  Netherlands: {
    name: "Netherlands",
    coordinates: [5.3, 52.1],
    flag: "🇳🇱",
    description: "Innovative education system with many English-taught programs.",
  },
  "South Korea": {
    name: "South Korea",
    coordinates: [127.0, 36.5],
    flag: "🇰🇷",
    description: "Leading technology hub with top-ranked universities in Asia.",
  },
  Lithuania: {
    name: "Lithuania",
    coordinates: [23.9, 55.2],
    flag: "🇱🇹",
    description: "Affordable tuition and living costs with quality European degrees.",
  },
  Romania: {
    name: "Romania",
    coordinates: [25.0, 45.9],
    flag: "🇷🇴",
    description: "Growing destination for medical and engineering studies in Europe.",
  },
};

const highlightedNames = Object.keys(highlightedCountries);

const EuropeMap = () => {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const [hoveredGeo, setHoveredGeo] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  const updateTooltip = useCallback((name: string, e: React.MouseEvent) => {
    if (containerRef) {
      const rect = containerRef.getBoundingClientRect();
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top - 16,
      });
    }
    setActiveMarker(name);
  }, [containerRef]);

  const clearTooltip = useCallback(() => {
    setActiveMarker(null);
    setTooltipPos(null);
  }, []);

  const activeData = activeMarker ? highlightedCountries[activeMarker] : null;

  return (
    <div ref={setContainerRef} className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border/50 shadow-card" style={{ background: "hsl(222, 47%, 12%)" }}>
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-20, -50, 0],
          center: [0, 0],
          scale: 600,
        }}
        width={800}
        height={500}
        style={{ width: "100%", height: "auto" }}
      >
        <defs>
          <filter id="country-glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name;
              const isHighlighted = highlightedNames.includes(name);
              const isHovered = hoveredGeo === name && isHighlighted;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    if (isHighlighted) setHoveredGeo(name);
                  }}
                  onMouseLeave={() => setHoveredGeo(null)}
                  fill={
                    isHovered
                      ? "hsl(38, 65%, 55%)"
                      : isHighlighted
                      ? "hsl(222, 35%, 38%)"
                      : "hsl(222, 30%, 24%)"
                  }
                  stroke="hsl(222, 20%, 45%)"
                  strokeWidth={isHighlighted ? 1.2 : 0.6}
                  style={{
                    default: {
                      outline: "none",
                      transition: "fill 0.3s ease",
                    },
                    hover: {
                      fill: isHighlighted ? "hsl(38, 65%, 55%)" : "hsl(222, 30%, 30%)",
                      outline: "none",
                      stroke: isHighlighted ? "hsl(38, 65%, 70%)" : "hsl(222, 20%, 45%)",
                      strokeWidth: isHighlighted ? 2 : 0.6,
                      filter: isHighlighted ? "url(#country-glow)" : "none",
                      cursor: isHighlighted ? "pointer" : "default",
                    },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Markers with hover interaction */}
        {Object.entries(highlightedCountries).map(([key, country]) => (
          <Marker key={key} coordinates={country.coordinates}>
            {/* Outer pulsing ring */}
            <circle r={6} fill="none" stroke="hsl(38, 65%, 55%)" strokeWidth={1.5} opacity={0.6}>
              <animate attributeName="r" values="6;12;6" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
            </circle>
            {/* Inner dot */}
            <circle
              r={5}
              fill="hsl(38, 65%, 55%)"
              stroke="hsl(45, 100%, 96%)"
              strokeWidth={1.5}
              style={{ cursor: "pointer", transition: "r 0.2s ease" }}
              onMouseEnter={(e) => updateTooltip(key, e as unknown as React.MouseEvent)}
              onMouseMove={(e) => updateTooltip(key, e as unknown as React.MouseEvent)}
              onMouseLeave={clearTooltip}
            />
            {/* Country label */}
            <text
              textAnchor="middle"
              y={-14}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fill: "hsl(45, 100%, 96%)",
                fontWeight: 600,
                pointerEvents: "none",
                textShadow: "0 1px 4px rgba(0,0,0,0.6)",
              }}
            >
              {country.name}
            </text>
          </Marker>
        ))}
      </ComposableMap>

      {/* Tooltip on marker hover */}
      {activeData && tooltipPos && (
        <div
          className="absolute pointer-events-none z-30 animate-fade-in"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div className="bg-card/95 backdrop-blur-xl p-5 rounded-xl shadow-card border border-gold/40 max-w-[260px]">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-3xl">{activeData.flag}</span>
              <h4 className="font-display text-xl font-semibold text-primary">
                {activeData.name}
              </h4>
            </div>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              {activeData.description}
            </p>
          </div>
          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-3 h-3 bg-card/95 border-r border-b border-gold/40 transform rotate-45 -mt-1.5" />
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex items-center gap-4 bg-card/80 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ background: "hsl(222, 35%, 38%)" }} />
          <span className="font-body text-xs text-muted-foreground">Our Destinations</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ background: "hsl(38, 65%, 55%)" }} />
          <span className="font-body text-xs text-muted-foreground">Hover for details</span>
        </div>
      </div>
    </div>
  );
};

export default EuropeMap;
