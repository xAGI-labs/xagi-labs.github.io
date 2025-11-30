import { Metadata } from 'next';
import SiliconHalliGame from './SiliconHalliGame';

export const metadata: Metadata = {
  title: 'SiliconHalli - Bangalore Startup Simulator',
  description: 'Play SiliconHalli, the ultimate Bangalore startup simulator game. Build your startup, raise funding, and survive the Silk Board traffic in this addictive clicker game.',
  keywords: ['SiliconHalli', 'Bangalore Startup Game', 'Startup Simulator', 'Bangalore Tech Game', 'Clicker Game', 'React Game'],
  openGraph: {
    title: 'SiliconHalli - Bangalore Startup Simulator',
    description: 'Build your startup empire in the heart of Bangalore. Can you reach IPO?',
    type: 'website',
  },
};

export default function SiliconHalliPage() {
  return <SiliconHalliGame />;
}
