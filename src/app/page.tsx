import FileConvertCard from '@/components/ui/card/FileConvertCard';
import Covert1 from '../../public/assets/icon/excel2PDF.svg';
import Covert2 from '../../public/assets/icon/PDF2JPG.svg';
import Covert3 from '../../public/assets/icon/PDF2PNG.svg';
import Covert4 from '../../public/assets/icon/PDF2excel.svg';
import Covert5 from '../../public/assets/icon/PDF2word.svg';
import Covert6 from '../../public/assets/icon/PPT2PDF.svg';
import Covert7 from '../../public/assets/icon/JPG2PDF.svg';
import Covert8 from '../../public/assets/icon/word2PDF.svg';

const cardContent = [
  { src: Covert1, title: 'Excel to PDF' },
  { src: Covert2, title: 'PDF to JPG' },
  { src: Covert3, title: 'PDF to PNG' },
  { src: Covert4, title: 'PDF to Excel' },
  { src: Covert5, title: 'PDF to Word ' },
  { src: Covert6, title: 'PPT to PDF' },
  { src: Covert7, title: 'JPG to PDF' },
  { src: Covert8, title: 'Word to PDF' },
];

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow-sm border-b'>
        <div className='container mx-auto px-4 py-4'>
          <h1 className='text-2xl font-bold text-gray-900'>
            Convert File Project
          </h1>
        </div>
      </header>

      <main className='container mx-auto px-4 py-8'>
        <div className='space-y-8'>
          <section className='text-center'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Welcome to Convert File Project
            </h2>
            <p className='text-lg text-gray-600'>
              A scalable Next.js application built with modern architecture
            </p>
          </section>

          <section className='flex gap-6 flex-wrap justify-center'>
            {cardContent.map((item, index) => (
              <FileConvertCard key={index} src={item.src} title={item.title} />
            ))}
          </section>

          {/* 
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">
                Feature-Based Architecture
              </h3>
              <p className="text-gray-600">
                Scalable folder structure with feature-based organization
              </p>
            </div>
            <div className="p-6 bg-white border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">State Management</h3>
              <p className="text-gray-600">
                Modern state management with Zustand
              </p>
            </div>
            <div className="p-6 bg-white border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Type Safety</h3>
              <p className="text-gray-600">
                Type-safe development with TypeScript
              </p>
            </div>
          </section>

          <section className="text-center">
            <a
              href="/dashboard"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Go to Dashboard
            </a>
          </section> */}
        </div>
      </main>
    </div>
  );
}
