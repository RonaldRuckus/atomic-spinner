import * as React from 'react';
export interface AtomicSpinnerProps {
    atomSize?: number;
    displayElectronPaths?: boolean;
    displayNucleus?: boolean;
    electronColorPalette?: string[];
    electronPathCount?: number;
    electronPathColor?: string;
    electronPathWidth?: number;
    electronsPerPath?: number;
    electronSize?: number;
    electronSpeed?: number;
    nucleusLayerCount?: number;
    nucleusParticlesPerLayer?: number;
    nucleusParticleFillColor?: string;
    nucleusParticleBorderColor?: string;
    nucleusParticleBorderWidth?: number;
    nucleusParticleSize?: number;
    nucleusDistanceFromCenter?: number;
    nucleusSpeed?: number;
    nucleusMaskOverlap?: boolean;
    nucleusIcon?: React.ReactNode;
}
declare const AtomicSpinner: React.FunctionComponent<AtomicSpinnerProps>;
export default AtomicSpinner;
