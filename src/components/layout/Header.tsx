export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-xl font-bold text-blue-600">
            ConvertFile
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="/dashboard" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900 px-4 py-2">
            Sign In
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
