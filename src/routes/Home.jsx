import { useParams } from 'react-router-dom'
import AnimatedBackground from '../components/AnimatedBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import AchievementsSection from '../components/AchievementsSection'
import CertificationsSection from '../components/CertificationsSection'
import SkillsSection from '../components/SkillsSection'
import TimelineSection from '../components/TimelineSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import HireSection from '../components/HireSection'
import Footer from '../components/Footer'

const sectionMap = {
  about: <StatsSection />,
  achievements: <AchievementsSection />,
  certifications: <CertificationsSection />,
  skills: <SkillsSection />,
  experience: <TimelineSection />,
  projects: <ProjectsSection />,
  contact: <ContactSection />,
  hire: <HireSection />
}

export default function Home() {
  const { section } = useParams()
  const sectionContent = section ? sectionMap[section.toLowerCase()] : <HeroSection />

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-slate-100">
      <AnimatedBackground />
      <Navbar />
      <main className="relative mx-auto flex min-h-screen max-w-7xl flex-col gap-24 px-6 pb-24 pt-8 md:px-8">
        {sectionContent}
      </main>
      <Footer />
    </div>
  )
}
