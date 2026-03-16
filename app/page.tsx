import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WorkedAtSection } from './components/WorkedAtSection';
import { ProjectsSection } from './components/ProjectsSection';

export default function Home() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkedAtSection />
      <ProjectsSection />
    </main>
  );
}
