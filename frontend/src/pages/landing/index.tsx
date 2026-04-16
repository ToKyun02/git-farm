import Footer from './Footer';
import Navbar from './Navbar';
import BuildingShowcase from './sections/BuildingShowcase';
import CommitFeedSection from './sections/CommitFeedSection';
import CTASection from './sections/CTASection';
import FeaturesSection from './sections/FeaturesSection';
import HeroSection from './sections/HeroSection';
import HowItWorksSection from './sections/HowItWorksSection';

export default function LandingPage() {
    return (
        <div className='bg-background text-foreground min-h-screen'>
            <Navbar />
            <HeroSection />
            <HowItWorksSection />
            <FeaturesSection />
            <BuildingShowcase />
            <CommitFeedSection />
            <CTASection />
            <Footer />
        </div>
    );
}
