'use client'

import { useEffect, useRef, useState } from 'react'

export default function IntegrationsSection() {
  const [hoveredApp, setHoveredApp] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const apps = [
    { name: 'WhatsApp', color: '#25D366', bgColor: '#25D366' },
    { name: 'Gmail', color: '#EA4335', bgColor: '#ffffff' },
    { name: 'Teams', color: '#6264A7', bgColor: '#6264A7' },
    { name: 'Excel', color: '#217346', bgColor: '#217346' },
    { name: 'Slack', color: '#4A154B', bgColor: '#4A154B' },
    { name: 'Oracle', color: '#C74634', bgColor: '#C74634' },
    { name: 'SAP', color: '#0FAAFF', bgColor: '#ffffff' },
    { name: 'Dynamics', color: '#002050', bgColor: '#002050' }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-emerald-50/30 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-center text-4xl sm:text-5xl font-bold mb-20">
          Integrated with your{' '}
          <span className="font-serif italic">favourite</span>
          <br />
          <span className="font-serif italic">apps</span>
        </h2>

        <div ref={containerRef} className="relative max-w-3xl mx-auto aspect-square">
          {/* Connection Lines SVG */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <marker
                id="dot"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="5"
                markerHeight="5"
              >
                <circle cx="5" cy="5" r="2" fill="currentColor" />
              </marker>
            </defs>
            {apps.map((app, index) => {
              const angle = (index * Math.PI * 2) / apps.length
              const radius = Math.min(dimensions.width, dimensions.height) * 0.35
              const centerX = dimensions.width / 2
              const centerY = dimensions.height / 2
              const x = centerX + Math.cos(angle) * radius
              const y = centerY + Math.sin(angle) * radius

              return (
                <g key={`connection-${index}`}>
                  {/* Dashed background line */}
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={x}
                    y2={y}
                    stroke="#E5E7EB"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  {/* Animated overlay line */}
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={x}
                    y2={y}
                    stroke={app.color}
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                    markerEnd="url(#dot)"
                    className={`transition-all duration-500 ${
                      hoveredApp === index 
                        ? 'stroke-dashoffset-0 opacity-100' 
                        : 'stroke-dashoffset-8 opacity-0'
                    }`}
                    style={{
                      animation: hoveredApp === index 
                        ? 'dash 1s linear infinite' 
                        : 'none'
                    }}
                  />
                </g>
              )
            })}
          </svg>

          {/* Aerchain Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-white border-2 border-black rounded-xl px-8 py-4 shadow-lg">
              <svg className="w-32" viewBox="0 0 150 40">
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="text-2xl font-bold"
                >
                  ProSessed
                </text>
              </svg>
            </div>
          </div>

          {/* App Icons */}
          {apps.map((app, index) => {
            const angle = (index * Math.PI * 2) / apps.length
            const radius = Math.min(dimensions.width, dimensions.height) * 0.35
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            return (
              <div
                key={app.name}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div
                  className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                    hoveredApp === index 
                      ? 'scale-110 shadow-xl' 
                      : 'scale-100 hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: app.bgColor,
                    border: app.bgColor === '#ffffff' ? '1px solid #E5E7EB' : 'none'
                  }}
                  onMouseEnter={() => setHoveredApp(index)}
                  onMouseLeave={() => setHoveredApp(null)}
                >
                  <span className={`text-lg font-bold ${
                    app.bgColor === '#ffffff' ? 'text-black' : 'text-white'
                  }`}>
                    {app.name.charAt(0)}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 8;
          }
        }
      `}</style>
    </div>
  )
}

