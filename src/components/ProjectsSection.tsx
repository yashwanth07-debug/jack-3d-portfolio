import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { X, ExternalLink, RotateCcw, Box, HelpCircle } from 'lucide-react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

const projects = [
  {
    number: '01',
    title: 'Nextlevel Studio',
    category: 'Client Project',
    year: '2026',
    description: 'An interactive real-time 3D web platform engineered to highlight product aesthetics. Includes dynamic material configurations and low-latency rendering pipelines.',
    tools: ['Blender', 'Spline', 'React', 'Three.js', 'Substance Painter'],
    images: {
      col1_1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      col1_2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
  },
  {
    number: '02',
    title: 'Aura Brand Identity',
    category: 'Personal Project',
    year: '2025',
    description: 'An organic brand expansion concept leveraging abstract 3D spatial geometry, rich textures, and procedural particle clusters to convey premium luxury aura.',
    tools: ['Houdini', 'Octane Render', 'After Effects', 'Cinema 4D'],
    images: {
      col1_1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      col1_2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
  {
    number: '03',
    title: 'Solaris Digital',
    category: 'Client Project',
    year: '2026',
    description: 'Next-gen solar array and energy grids visualization. Combining complex architecture physics layouts with high-fidelity cinematic realism renders.',
    tools: ['Unreal Engine 5', 'Blender', 'Substance Designer', 'Figma'],
    images: {
      col1_1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      col1_2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  totalCards: number;
  onPreviewClick: (project: typeof projects[0]) => void;
  key?: React.Key;
}

function ProjectCard({ project, index, totalCards, onPreviewClick }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky w-full flex items-start justify-center pb-16 sm:pb-24"
      style={{
        top: `calc(${96 + index * 28}px)`,
        height: 'clamp(580px, 85vh, 900px)',
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-6 md:p-8 flex flex-col justify-between select-none shadow-2xl overflow-hidden"
      >
        {/* Top Row */}
        <div className="flex flex-row justify-between items-center w-full pb-3 sm:pb-4 border-b border-[#D7E2EA]/15 gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="text-[#D7E2EA] font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/40 text-[10px] sm:text-xs uppercase tracking-widest font-light">
                {project.category}
              </span>
              <span
                className="text-[#D7E2EA] font-bold uppercase tracking-tight leading-none mt-1"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}
              >
                {project.title}
              </span>
            </div>
          </div>

          <LiveProjectButton
            onClick={() => onPreviewClick(project)}
            className="shrink-0 scale-90 sm:scale-100"
          />
        </div>

        {/* Bottom Row - Two-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-6 flex-1 mt-4 sm:mt-6 overflow-hidden min-h-0">
          <div className="md:col-span-4 flex flex-col gap-4 justify-between h-full min-h-0">
            <img
              src={project.images.col1_1}
              alt={`${project.title} Detail A`}
              referrerPolicy="no-referrer"
              className="w-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-[#D7E2EA]/10 flex-1 min-h-0"
              style={{ height: 'clamp(110px, 15vh, 230px)' }}
            />
            <img
              src={project.images.col1_2}
              alt={`${project.title} Detail B`}
              referrerPolicy="no-referrer"
              className="w-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-[#D7E2EA]/10 flex-1 min-h-0"
              style={{ height: 'clamp(130px, 20vh, 340px)' }}
            />
          </div>

          <div className="md:col-span-6 h-full min-h-0">
            <img
              src={project.images.col2}
              alt={`${project.title} Full Render`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-[#D7E2EA]/10"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  const [rotation, setRotation] = useState(45);
  const [wireframe, setWireframe] = useState(false);
  const [lightIntensity, setLightIntensity] = useState(1.5);
  const [activeMaterial, setActiveMaterial] = useState('Metallic Chrome');

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects-section"
      className="relative bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-24 md:pt-32 pb-32 z-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)', lineHeight: 0.9 }}
          >
            Project
          </h2>
        </FadeIn>

        <div className="relative flex flex-col items-center w-full">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={projects.length}
              onPreviewClick={(p) => {
                setSelectedProject(p);
                setRotation(45);
                setWireframe(false);
                setLightIntensity(1.5);
                setActiveMaterial('Metallic Chrome');
              }}
            />
          ))}
        </div>
      </div>

      {/* Interactive Simulated 3D Showcase Drawer/Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="relative w-full max-w-4xl h-full bg-[#0C0C0C] border-l border-[#D7E2EA]/10 p-6 sm:p-10 text-[#D7E2EA] flex flex-col justify-between overflow-y-auto z-10 shadow-2xl"
            >
              <div className="flex justify-between items-center pb-6 border-b border-[#D7E2EA]/10">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#B600A8]/20 border border-[#B600A8]/30 uppercase text-[#B600A8]">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs text-[#D7E2EA]/50">{selectedProject.year}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-2">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={handleClose}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-[#D7E2EA] transition-all cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 flex-1">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="relative aspect-video lg:aspect-square bg-gradient-to-br from-[#121212] to-[#040404] rounded-3xl border border-[#D7E2EA]/10 overflow-hidden flex flex-col justify-center items-center shadow-inner">
                    <div className="absolute top-4 left-4 flex flex-col text-[10px] font-mono text-[#D7E2EA]/40 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/5 space-y-0.5">
                      <div>ENGINE: SIMULATED SHADER V2</div>
                      <div>LIGHT_INTENSITY: {lightIntensity.toFixed(1)}W</div>
                      <div>RENDER_MODE: {wireframe ? 'WIREFRAME' : 'SHADED'}</div>
                      <div>ROTATION: {rotation}°</div>
                      <div>MAT: {activeMaterial.toUpperCase()}</div>
                    </div>

                    <motion.div
                      style={{
                        rotateY: rotation,
                        transformStyle: 'preserve-3d',
                      }}
                      className="w-4/5 h-4/5 relative flex justify-center items-center pointer-events-none"
                    >
                      {wireframe && (
                        <div className="absolute inset-0 border-2 border-dashed border-[#B600A8]/40 rounded-full animate-[spin_10s_linear_infinite]" />
                      )}

                      <img
                        src={selectedProject.images.col2}
                        alt="3D Interactive simulation viewport"
                        referrerPolicy="no-referrer"
                        className={`w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-300 ${
                          wireframe ? 'opacity-35 grayscale filter blur-[1px]' : ''
                        }`}
                        style={{
                          filter: `brightness(${lightIntensity}) ${wireframe ? 'grayscale(1)' : ''}`,
                        }}
                      />
                    </motion.div>

                    <div className="absolute bottom-4 flex items-center gap-1.5 text-[11px] text-[#D7E2EA]/30 font-mono bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                      <HelpCircle size={12} />
                      <span>Use sliders below to manipulate the 3D model viewport</span>
                    </div>
                  </div>

                  <div className="bg-[#121212] rounded-3xl border border-[#D7E2EA]/10 p-5 space-y-4">
                    <h4 className="text-xs uppercase font-bold tracking-widest text-[#D7E2EA]/50 flex items-center gap-2">
                      <Box size={14} />
                      <span>Viewport Shading &amp; Transform controls</span>
                    </h4>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono text-[#D7E2EA]/60">
                        <span>CAMERA ROTATION (Y-AXIS)</span>
                        <span>{rotation}°</span>
                      </div>
                      <input
                        type="range"
                        min="-180"
                        max="180"
                        value={rotation}
                        onChange={(e) => setRotation(Number(e.target.value))}
                        className="w-full accent-[#B600A8] cursor-pointer"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono text-[#D7E2EA]/60">
                        <span>POINT LIGHT INTENSITY</span>
                        <span>{lightIntensity.toFixed(1)}W</span>
                      </div>
                      <input
                        type="range"
                        min="0.5"
                        max="2.5"
                        step="0.1"
                        value={lightIntensity}
                        onChange={(e) => setLightIntensity(Number(e.target.value))}
                        className="w-full accent-[#BE4C00] cursor-pointer"
                      />
                    </div>

                    <div className="flex gap-4 pt-1">
                      <button
                        onClick={() => setWireframe(!wireframe)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-colors cursor-pointer ${
                          wireframe
                            ? 'bg-[#B600A8] border-[#B600A8] text-white'
                            : 'border-white/10 text-[#D7E2EA] hover:bg-white/5'
                        }`}
                      >
                        Toggle Wireframe
                      </button>

                      <button
                        onClick={() => {
                          setRotation(45);
                          setWireframe(false);
                          setLightIntensity(1.5);
                          setActiveMaterial('Metallic Chrome');
                        }}
                        className="p-2 rounded-xl border border-white/10 text-[#D7E2EA]/60 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                        title="Reset Viewport"
                      >
                        <RotateCcw size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-widest text-[#D7E2EA]/40 mb-2">
                        Project Overview
                      </h4>
                      <p className="text-sm text-[#D7E2EA]/80 leading-relaxed font-light">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-widest text-[#D7E2EA]/40 mb-3">
                        Select Shader Material
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {['Metallic Chrome', 'Glass Refraction', 'Procedural Clay', 'Wireframe Matrix'].map((mat) => (
                          <button
                            key={mat}
                            onClick={() => {
                              setActiveMaterial(mat);
                              if (mat === 'Wireframe Matrix') {
                                setWireframe(true);
                              } else {
                                setWireframe(false);
                              }
                            }}
                            className={`px-3 py-2.5 rounded-xl text-xs font-mono border text-left transition-all cursor-pointer ${
                              activeMaterial === mat
                                ? 'bg-white text-black border-white font-semibold'
                                : 'border-white/10 text-[#D7E2EA]/70 hover:bg-white/5'
                            }`}
                          >
                            {mat}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-widest text-[#D7E2EA]/40 mb-3.5">
                        Pipeline &amp; Toolset
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <a
                      href="https://ai.studio/build"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-xl bg-[#D7E2EA] text-[#0C0C0C] font-semibold uppercase tracking-widest text-center text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all"
                    >
                      <span>Launch Interactive Site</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
