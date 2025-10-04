"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import PlayfulHero from '@/components/sections/layouts/hero/BillboardHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

const theme: SiteTheme = {
  styleVariant: 'futuristicAndOutOfBox',
  colorTemplate: 2,
  textAnimation: 'slide',
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarBase
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/design-a-simple-high-contrast-logo-for-r-1759608893032-6762ac5c.jpg"
          logoAlt="RealXchess Logo"
          leftButtonText="Start Free Trial"
          className="sticky top-0 bg-white"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <PlayfulHero title="RealXchess" subtitle="AI Chess SaaS for training & analytics" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <BaseAbout title="About RealXchess" descriptions={[
          "RealXchess is an AI-powered platform offering tools for chess training and gameplay analytics.",
          "Join our platform to enhance your chess skills and enjoy unmatched online gameplay experiences."
        ]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D steps={[
          { position: 'left', image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/minimal-vector-mascot-for-realxchess-wai-1759608891775-708cbd69.jpg', title: 'Step 1', description: 'Create your account.' },
          { position: 'center', image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/minimal-vector-mascot-for-realxchess-wai-1759608891775-708cbd69.jpg', title: 'Step 2', description: 'Choose your subscription.' },
          { position: 'right', image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/minimal-vector-mascot-for-realxchess-wai-1759608891775-708cbd69.jpg', title: 'Step 3', description: 'Start playing!' },
        ]} />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <ImageFAQ image="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/minimal-vector-mascot-for-realxchess-wai-1759608891775-708cbd69.jpg" imageAlt="FAQ Image" items={[
          { title: 'What is RealXchess?', content: 'RealXchess is a state-of-the-art AI-powered chess training and analytics platform.' },
          { title: 'How does it work?', content: 'It analyzes your games and provides personalized insights to improve your play.' },
          { title: 'Can I play online?', content: 'Yes, RealXchess allows online play with other users worldwide.' },
        ]} />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics title="Tokenomics" description="Here's how our token system works" tokenData={[
          { value: '100M', description: 'Total Tokens' },
          { value: '10M', description: 'Tokens for first round' },
          { value: '5M', description: 'Allocated for community rewards' },
        ]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase 
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/design-a-simple-high-contrast-logo-for-r-1759608893032-6762ac5c.jpg"
          logoWidth={100} // Adjusted based on prop schema
          logoHeight={100} // Adjusted based on prop schema
          columns={[
            { title: 'Links', items: [
              { label: 'Privacy Policy', onClick: () => alert('Privacy policy clicked') },
              { label: 'Terms of Service', onClick: () => alert('Terms clicked') }
            ]},
            { title: 'Follow Us', items: [
              { label: 'Twitter', onClick: () => alert('Twitter clicked') },
              { label: 'LinkedIn', onClick: () => alert('LinkedIn clicked') }
            ]},
            { title: 'Contact', items: [
              { label: 'Email', onClick: () => alert('Email clicked') },
              { label: 'Support', onClick: () => alert('Support clicked') }
            ]},
          ]} 
          copyrightText="© 2024 RealXchess. All Rights Reserved." 
          onPrivacyClick={() => alert('Privacy policy clicked')} 
        />
      </div>
    </SiteThemeProvider>
  );
}
