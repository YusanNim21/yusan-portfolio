import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import ContactDock from './components/ContactDock';
import Footer from './components/Footer';
import GithubStats from './components/GithubStats';

export default function App() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen relative">
      <Hero />
      <TechStack />
      <GithubStats />
      <Projects />
      <ContactDock />
      <Footer />
    </main>
  );
}