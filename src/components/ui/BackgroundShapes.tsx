// src/components/ui/BackgroundShapes.tsx
'use client';

import React from 'react';

interface BackgroundShapesProps {
    className?: string;
}

const BackgroundShapes: React.FC<BackgroundShapesProps> = ({ className = '' }) => {
    return (
        <div className={`fixed inset-0 z-0 w-full h-full pointer-events-none overflow-hidden ${className}`}>
            <style jsx>{`
  @keyframes floatUp {
    0% { transform: translateY(0); }
    50% { transform: translateY(-40px); }
    100% { transform: translateY(0); }
  }
  
  @keyframes floatDown {
    0% { transform: translateY(0); }
    50% { transform: translateY(40px); }
    100% { transform: translateY(0); }
  }
  
  .wave-1 {
    animation: floatUp 12s ease-in-out infinite;
  }
  
  .wave-2 {
    animation: floatDown 10s ease-in-out infinite;
  }
  
  .wave-3 {
    animation: floatUp 14s ease-in-out infinite;
  }
`}</style>

            <svg
                className="absolute w-full h-full"
                viewBox="0 0 1440 800"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                {/* Onda superior - morada */}
                <path
                    className="wave-1"
                    d="M0,120 C240,150 480,80 720,100 C960,120 1200,180 1440,150 L1440,0 L0,0 Z"
                    fill="#74196E"
                    opacity="0.1"
                />

                {/* Onda media - verde */}
                <path
                    className="wave-2"
                    d="M0,400 C240,370 480,430 720,400 C960,370 1200,330 1440,400 L1440,300 L0,300 Z"
                    fill="#889535"
                    opacity="0.15"
                />

                {/* Onda inferior - morada */}
                <path
                    className="wave-3"
                    d="M0,700 C240,730 480,670 720,700 C960,730 1200,770 1440,700 L1440,800 L0,800 Z"
                    fill="#74196E"
                    opacity="0.1"
                />

                {/* Círculo decorativo superior - verde */}
                <circle
                    className="wave-2"
                    cx="200"
                    cy="150"
                    r="80"
                    fill="#889535"
                    opacity="0.08"
                />

                {/* Círculo decorativo central - morado */}
                <circle
                    className="wave-1"
                    cx="1100"
                    cy="400"
                    r="100"
                    fill="#74196E"
                    opacity="0.1"
                />

                {/* Círculo decorativo inferior - verde */}
                <circle
                    className="wave-3"
                    cx="300"
                    cy="650"
                    r="120"
                    fill="#889535"
                    opacity="0.07"
                />

                {/* Forma orgánica suave en esquina superior derecha - morada */}
                <path
                    className="wave-2"
                    d="M1200,100 C1250,60 1350,90 1400,50 C1450,90 1430,150 1380,180 C1330,210 1250,170 1240,130 C1230,90 1200,100 1200,100 Z"
                    fill="#74196E"
                    opacity="0.09"
                />

                {/* Forma orgánica suave en esquina inferior izquierda - verde */}
                <path
                    className="wave-1"
                    d="M50,600 C100,560 180,580 220,620 C260,660 240,720 190,740 C140,760 80,730 60,690 C40,650 50,600 50,600 Z"
                    fill="#889535"
                    opacity="0.09"
                />
            </svg>
        </div>
    );
};

export default BackgroundShapes;