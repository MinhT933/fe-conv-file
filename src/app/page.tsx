export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Convert File Project
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <section className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Convert File Project
            </h2>
            <p className="text-lg text-gray-600">
              A scalable Next.js application built with modern architecture
            </p>
          </section>

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
          </section>
        </div>
      </main>
    </div>
  );
}
