import { Metadata } from 'next';
import SiliconHalliGame from './SiliconHalliGame';

export const metadata: Metadata = {
  title: 'SiliconHalli - Bangalore Startup Simulator',
  description: 'Play SiliconHalli, the ultimate Bangalore startup simulator game. Build your startup, raise funding, survive Silk Board traffic, and reach IPO in this addictive clicker game.',
  keywords: ['SiliconHalli', 'Bangalore Startup Game', 'Startup Simulator', 'Bangalore Tech Game', 'Clicker Game', 'React Game', 'Bangalore Traffic', 'Startup Life'],
  openGraph: {
    title: 'SiliconHalli - Bangalore Startup Simulator',
    description: 'Build your startup empire in the heart of Bangalore. Can you reach IPO?',
    url: '/siliconhalli',
    siteName: 'SiliconHalli',
    images: [
      {
        url: '/siliconhalli-logo.png',
        width: 800,
        height: 600,
        alt: 'SiliconHalli Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiliconHalli - Bangalore Startup Simulator',
    description: 'Build your startup empire in the heart of Bangalore. Can you reach IPO?',
    images: ['/siliconhalli-logo.png'],
  },
};

export default function SiliconHalliPage() {
  return <SiliconHalliGame />;
}
