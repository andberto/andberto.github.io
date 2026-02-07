import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import ParticleBackground from './components/ParticleBackground';
import PrismaticSphere from './components/PrismaticSphere';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import ContentPanel from './components/ContentPanel';
import useWheelRotation from './hooks/useWheelRotation';
import './App.css';

function Scene({ rotation, currentSection }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#00FFFF" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#FF00FF" />
      <pointLight position={[0, 10, 5]} intensity={0.6} color="#8B00FF" />
      <pointLight position={[5, -5, 8]} intensity={0.4} color="#00CED1" />
      
      <Stars 
        radius={100} 
        depth={60} 
        count={8000} 
        factor={4.5} 
        saturation={0} 
        fade 
        speed={1.2}
      />
      
      <PrismaticSphere rotation={rotation} targetSection={currentSection} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        enableRotate={false}
      />
    </>
  );
}

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      <span className="loading-text">Initializing...</span>
    </div>
  );
}

export default function App() {
  const { rotation, currentSection, goToSection } = useWheelRotation();

  return (
    <div className="app">
      {/* Background gradient */}
      <div className="background-gradient"></div>
      
      {/* Particle system */}
      <ParticleBackground />
      
      {/* 3D Canvas with sphere - più piccola */}
      <div className="canvas-container">
        <Suspense fallback={<LoadingScreen />}>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
          >
            <Scene rotation={rotation} currentSection={currentSection} />
          </Canvas>
        </Suspense>
      </div>
      
      {/* Top - selettori */}
      <header className="top-nav">
        <Navigation currentSection={currentSection} onSectionChange={goToSection} />
      </header>
      
      {/* Left - foto + nome + titolo + contatti fissi sotto */}
      <Sidebar />
      
      {/* Right - tutte le info del sito originale (About, Resume, Projects con foto, Articles, Contact) */}
      <div className="right-content-panel">
        <ContentPanel currentSection={currentSection} />
      </div>
      
      {/* Bottom - indicatore sezione + hint scroll */}
      <div className="bottom-bar">
        <span className="section-indicator">{['About', 'Resume', 'Projects', 'Articles', 'Contact'][currentSection]}</span>
        <span className="scroll-hint-text">Scroll to navigate</span>
      </div>
      
      {/* Scanlines overlay */}
      <div className="scanlines"></div>
      
      {/* Vignette effect */}
      <div className="vignette"></div>
    </div>
  );
}
