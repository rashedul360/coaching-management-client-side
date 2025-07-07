import Banner from '@/components/Banner/Banner';
import Features from '@/components/Features/Features';
import Navbar from '@/components/Navbar/Navbar';

const features = [
  'Student Management',
  'Financial Operations',
  'Multi-Branch Support',
  'Digital Attendance',
  'Exam Management',
  'Seamless Communication',
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
    </>
  );
}
