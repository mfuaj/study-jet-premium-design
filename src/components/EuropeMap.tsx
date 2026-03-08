import { useState } from "react";

interface CountryData {
  name: string;
  description: string;
  flag: string;
}

const countryInfo: Record<string, CountryData> = {
  hungary: {
    name: "Hungary",
    description: "Vibrant student life and high-quality education make Hungary an ideal choice.",
    flag: "🇭🇺",
  },
  france: {
    name: "France",
    description: "Top universities and rich culture make France a prime study destination.",
    flag: "🇫🇷",
  },
  italy: {
    name: "Italy",
    description: "Historic universities attract students worldwide to Italy.",
    flag: "🇮🇹",
  },
  germany: {
    name: "Germany",
    description: "Affordable education and world-class research facilities.",
    flag: "🇩🇪",
  },
  spain: {
    name: "Spain",
    description: "A unique blend of culture and education makes Spain popular.",
    flag: "🇪🇸",
  },
};

const EuropeMap = () => {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number } | null>(null);

  const handleMouseEnter = (country: string, e: React.MouseEvent) => {
    setActiveCountry(country);
    const rect = (e.currentTarget as SVGElement).closest("svg")!.getBoundingClientRect();
    setTooltip({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 10,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (activeCountry) {
      const rect = (e.currentTarget as SVGElement).closest("svg")!.getBoundingClientRect();
      setTooltip({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top - 10,
      });
    }
  };

  const handleMouseLeave = () => {
    setActiveCountry(null);
    setTooltip(null);
  };

  const getCountryStyle = (country: string) => {
    const isActive = activeCountry === country;
    return {
      fill: isActive ? "hsl(38 65% 55%)" : "hsl(222 47% 25%)",
      stroke: isActive ? "hsl(38 65% 65%)" : "hsl(222 35% 35%)",
      strokeWidth: isActive ? 2 : 1,
      cursor: "pointer",
      transition: "all 0.3s ease",
      filter: isActive ? "drop-shadow(0 0 8px hsl(38 65% 55% / 0.5))" : "none",
    };
  };

  const otherCountryStyle = {
    fill: "hsl(222 47% 18%)",
    stroke: "hsl(222 35% 28%)",
    strokeWidth: 0.5,
    transition: "all 0.3s ease",
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-auto"
        onMouseMove={handleMouseMove}
      >
        {/* Background */}
        <rect width="800" height="600" fill="transparent" />

        {/* Water / Sea */}
        <ellipse cx="400" cy="520" rx="350" ry="60" fill="hsl(222 47% 12% / 0.3)" />

        {/* Other European countries (simplified) */}
        {/* UK */}
        <path d="M220,140 L235,130 L245,145 L250,175 L240,200 L225,210 L215,195 L210,170 L215,155 Z" style={otherCountryStyle} />
        {/* Ireland */}
        <path d="M195,155 L210,148 L215,165 L210,185 L198,188 L190,175 Z" style={otherCountryStyle} />
        {/* Portugal */}
        <path d="M170,310 L180,300 L185,320 L182,350 L175,360 L168,345 Z" style={otherCountryStyle} />
        {/* Switzerland */}
        <path d="M330,260 L350,255 L355,265 L345,275 L330,272 Z" style={otherCountryStyle} />
        {/* Austria */}
        <path d="M355,255 L395,248 L410,255 L405,268 L370,275 L355,268 Z" style={otherCountryStyle} />
        {/* Poland */}
        <path d="M400,175 L450,170 L465,185 L460,215 L430,225 L400,220 L395,195 Z" style={otherCountryStyle} />
        {/* Netherlands */}
        <path d="M300,175 L315,170 L320,182 L310,190 L298,188 Z" style={otherCountryStyle} />
        {/* Belgium */}
        <path d="M300,190 L318,188 L322,200 L308,205 L298,198 Z" style={otherCountryStyle} />
        {/* Czech Republic */}
        <path d="M370,220 L400,215 L405,230 L395,240 L370,238 Z" style={otherCountryStyle} />
        {/* Denmark */}
        <path d="M330,145 L345,138 L350,150 L345,165 L335,162 Z" style={otherCountryStyle} />
        {/* Norway/Sweden (simplified) */}
        <path d="M330,50 L345,45 L355,55 L360,100 L355,130 L340,135 L330,120 L325,80 Z" style={otherCountryStyle} />
        {/* Finland */}
        <path d="M420,40 L440,35 L450,50 L455,100 L445,120 L430,115 L420,80 Z" style={otherCountryStyle} />
        {/* Greece */}
        <path d="M450,350 L470,340 L480,355 L475,380 L460,390 L445,375 Z" style={otherCountryStyle} />
        {/* Romania */}
        <path d="M450,260 L490,255 L500,270 L495,290 L460,295 L448,280 Z" style={otherCountryStyle} />
        {/* Croatia */}
        <path d="M395,280 L415,275 L425,290 L420,310 L405,315 L395,300 Z" style={otherCountryStyle} />

        {/* FRANCE - highlighted */}
        <path
          d="M240,220 L290,210 L320,215 L330,240 L325,270 L310,300 L280,320 L250,310 L230,290 L225,260 L230,235 Z"
          style={getCountryStyle("france")}
          onMouseEnter={(e) => handleMouseEnter("france", e)}
          onMouseLeave={handleMouseLeave}
        />
        <text x="275" y="270" fill="hsl(45 100% 96%)" fontSize="11" fontFamily="DM Sans" textAnchor="middle" pointerEvents="none" opacity="0.8">
          France
        </text>

        {/* SPAIN - highlighted */}
        <path
          d="M190,320 L270,310 L280,325 L290,340 L285,370 L260,395 L220,400 L185,385 L175,360 L180,335 Z"
          style={getCountryStyle("spain")}
          onMouseEnter={(e) => handleMouseEnter("spain", e)}
          onMouseLeave={handleMouseLeave}
        />
        <text x="230" y="365" fill="hsl(45 100% 96%)" fontSize="11" fontFamily="DM Sans" textAnchor="middle" pointerEvents="none" opacity="0.8">
          Spain
        </text>

        {/* GERMANY - highlighted */}
        <path
          d="M310,175 L360,168 L375,180 L380,210 L370,235 L350,245 L325,248 L305,240 L300,215 L305,190 Z"
          style={getCountryStyle("germany")}
          onMouseEnter={(e) => handleMouseEnter("germany", e)}
          onMouseLeave={handleMouseLeave}
        />
        <text x="340" y="215" fill="hsl(45 100% 96%)" fontSize="11" fontFamily="DM Sans" textAnchor="middle" pointerEvents="none" opacity="0.8">
          Germany
        </text>

        {/* ITALY - highlighted */}
        <path
          d="M345,280 L370,275 L380,290 L385,320 L375,350 L360,380 L350,395 L340,385 L345,360 L340,330 L335,300 Z"
          style={getCountryStyle("italy")}
          onMouseEnter={(e) => handleMouseEnter("italy", e)}
          onMouseLeave={handleMouseLeave}
        />
        {/* Sicily */}
        <path
          d="M350,400 L370,395 L375,405 L360,412 Z"
          style={getCountryStyle("italy")}
          onMouseEnter={(e) => handleMouseEnter("italy", e)}
          onMouseLeave={handleMouseLeave}
        />
        <text x="365" y="340" fill="hsl(45 100% 96%)" fontSize="11" fontFamily="DM Sans" textAnchor="middle" pointerEvents="none" opacity="0.8">
          Italy
        </text>

        {/* HUNGARY - highlighted */}
        <path
          d="M400,240 L445,235 L460,248 L455,265 L435,275 L405,272 L395,258 Z"
          style={getCountryStyle("hungary")}
          onMouseEnter={(e) => handleMouseEnter("hungary", e)}
          onMouseLeave={handleMouseLeave}
        />
        <text x="428" y="258" fill="hsl(45 100% 96%)" fontSize="10" fontFamily="DM Sans" textAnchor="middle" pointerEvents="none" opacity="0.8">
          Hungary
        </text>

        {/* Pulsing dots on highlighted countries */}
        {[
          { cx: 275, cy: 260, country: "france" },
          { cx: 230, cy: 355, country: "spain" },
          { cx: 340, cy: 205, country: "germany" },
          { cx: 360, cy: 330, country: "italy" },
          { cx: 428, cy: 250, country: "hungary" },
        ].map((dot) => (
          <g key={dot.country}>
            <circle
              cx={dot.cx}
              cy={dot.cy}
              r="4"
              fill="hsl(38 65% 55%)"
              opacity={activeCountry === dot.country ? 1 : 0.7}
            >
              <animate
                attributeName="r"
                values="3;6;3"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.7;0.3;0.7"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx={dot.cx}
              cy={dot.cy}
              r="2.5"
              fill="hsl(38 65% 55%)"
            />
          </g>
        ))}
      </svg>

      {/* Tooltip */}
      {activeCountry && tooltip && countryInfo[activeCountry] && (
        <div
          className="absolute pointer-events-none bg-card/95 backdrop-blur-md p-4 rounded-lg shadow-card border border-gold/30 max-w-[220px] z-20"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{countryInfo[activeCountry].flag}</span>
            <h4 className="font-display text-lg font-semibold text-primary">
              {countryInfo[activeCountry].name}
            </h4>
          </div>
          <p className="font-body text-muted-foreground text-xs leading-relaxed">
            {countryInfo[activeCountry].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default EuropeMap;
