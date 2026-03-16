import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WorkedAtSection } from './components/WorkedAtSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PageWithLoading } from './components/PageWithLoading';

export default function Home() {
  return (
    <PageWithLoading>
      <main className="bg-background min-h-screen overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <WorkedAtSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </PageWithLoading>
  );
}
