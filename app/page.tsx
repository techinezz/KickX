import Hero from './components/Hero';
import Newest from './components/Newest';
import Image from 'next/image';
import Trending from './components/Trending';
import Featured from './components/Featured';

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
      <Trending />
      <Featured />
    </div>
  )
}