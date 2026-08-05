import About from '../components/About';
import CTA from '../components/CTA';
import Hero from '../components/Hero';
import Seo from '../components/Seo';
import Services from '../components/Services';

const homeSchema = {
  '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'ShaQ Technologies',
  url: 'https://www.shaqtechnologies.com/', logo: 'https://www.shaqtechnologies.com/shaq-logo.png',
  email: 'contact@shaqtechnologies.com', telephone: '+923028913283',
  contactPoint: { '@type': 'ContactPoint', telephone: '+923028913283', contactType: 'customer service', availableLanguage: ['English'] },
  sameAs: ['https://www.linkedin.com/company/shaqtechnologies', 'https://www.facebook.com/ShaQTechnologies', 'https://www.instagram.com/shaqtechnologies/', 'https://www.linkedin.com/company/shaq-technologies/', 'https://x.com/ShaQ_Tech'],
};

function HomePage() {
  return <><Seo title="ShaQ Technologies | AI, SaaS, Web, Mobile & Cloud Solutions" description="ShaQ Technologies builds AI solutions, SaaS products, CRM and ERP systems, cloud platforms, custom websites, Android apps, digital marketing campaigns, and AI chatbots." schema={homeSchema} /><Hero /><Services /><About /><CTA /></>;
}

export default HomePage;
