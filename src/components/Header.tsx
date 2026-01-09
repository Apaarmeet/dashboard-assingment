import { Search, Menu, Plus, Share2, Download, Upload } from 'lucide-react';

export default function Header() {
  const users = [
    { name: 'Armin A.', avatar: '/api/placeholder/32/32', initials: 'AA' },
    { name: 'Eren Y.', avatar: '/api/placeholder/32/32', initials: 'EY' },
    { name: 'Mikasa A.', avatar: '/api/placeholder/32/32', initials: 'MA' },
  ];

  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder='Try searching "Insights"'
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-50 rounded-lg">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>

          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-pink-500"></div>

          <button className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center">
            <Plus className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400">
            <Plus className="w-4 h-4 text-gray-400" />
          </button>

          {users.map((user, idx) => (
            <div key={idx} className="relative">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700 border-2 border-white">
                {user.initials}
              </div>
            </div>
          ))}

          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
            <span className="text-white text-xs font-bold">C</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-50 rounded-lg">
            <Share2 className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-50 rounded-lg">
            <Download className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-50 rounded-lg">
            <Upload className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
