const sidebarItems = [
  { href: "/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/dashboard/settings", label: "Settings", icon: "⚙️" },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 border-r min-h-screen">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
      </div>

      <nav className="mt-6">
        <ul className="space-y-2 px-4">
          {sidebarItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
