import * as React from 'react';

import ElectronPath from './ElectronPath';
import Electron from './Electron';
import Nucleus from './Nucleus';

export type AtomicSpinnerProps = {
  atomSize?: number,
  displayElectronPaths?: boolean,
  displayNucleus?: boolean,
  electronColorPalette?: string[],
  electronPathCount?: number,
  electronPathColor?: string,
  electronPathWidth?: number,
  electronsPerPath?: number,
  electronSize?: number,
  nucleusParticleFillColor?: string,
  nucleusParticleBorderColor?: string,
  nucleusParticleCount?: number,
  nucleusParticleSize?: number,
  nucleusDistanceFromCenter?: number
};

const AtomicSpinner = ({
  atomSize = 200,
  displayElectronPaths = true,
  displayNucleus = true,
  electronColorPalette = ['#0081C9', '#5BC0F8', '#86E5FF'],
  electronPathCount = 3,
  electronPathColor = '#707070',
  electronPathWidth = 0.5,
  electronsPerPath = 2,
  electronSize = 1.5,
  nucleusParticleFillColor = '#707070',
  nucleusParticleBorderColor = '#999',
  nucleusParticleCount = 6,
  nucleusParticleSize = 2.5,
  nucleusDistanceFromCenter = 2.5
}: AtomicSpinnerProps) => {
  const electronPaths = Array.from({ length: electronPathCount })
    .map((_, i) => ({
      rotationAngle: 0 + i * (180 / electronPathCount),
      electronCount: electronsPerPath,
      electronOrbitTime: 2 + Math.random() * 1
    }));

  const electronPathDefinitionId = 'electronPath';
  const electronDefinitionId = 'electron';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={atomSize}
      height={atomSize}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <path id={electronPathDefinitionId} d="M50 15A15 35 0 0 1 50 85A15 35 0 0 1 50 15" fill="none" />
        <path id={electronDefinitionId} d="M0 0A15 35 0 0 1 0 70A15 35 0 0 1 0 0" fill="none" />
      </defs>
      {displayNucleus
        && (
          <Nucleus
            particleCount={nucleusParticleCount}
            particleSize={nucleusParticleSize}
            distanceFromCenter={nucleusDistanceFromCenter}
            particleFillColor={nucleusParticleFillColor}
            particleBorderColor={nucleusParticleBorderColor}
          />
        )}
      {displayElectronPaths
        && electronPaths.map(({ rotationAngle }) => (
          <ElectronPath
            key={`electron-path-${rotationAngle}`}
            pathDefinitionId={electronPathDefinitionId}
            color={electronPathColor}
            width={electronPathWidth}
            rotationAngle={rotationAngle}
          />
        ))}
      {electronPaths.map(({ electronCount, rotationAngle, electronOrbitTime }) =>
        Array.from({ length: electronCount })
          .map((_, i) => {
            const electronKey = i;

            return (
              <Electron
                key={`electron-${electronKey}`}
                pathDefinitionId={electronDefinitionId}
                rotationAngle={rotationAngle}
                orbitTime={electronOrbitTime}
                size={electronSize}
                spacetimeOffset={-electronOrbitTime + i * (electronOrbitTime / (electronCount))}
                colorPalette={electronColorPalette} />
            );
          }))}
    </svg>
  );
};

export default React.memo(AtomicSpinner);
