import Particles, { initParticlesEngine } from "@tsparticles/react";
import particlesConfig from "./config/particles-config";


const ParticlesBG = () => {
    return (
        <Particles params={particlesConfig}></Particles>
    )
}

export default ParticlesBG;