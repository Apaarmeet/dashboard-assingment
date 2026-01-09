import { useState } from 'react';
import { Star, Clock, FileText, BarChart3, Home, Plus, ChevronDown, ChevronRight, Grid3x3, Link2, Folder, Settings, User as UserIcon } from 'lucide-react';

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>(['shared', 'reports', 'myreports']);

  const toggleItem = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-72 bg-white h-screen flex flex-col border-r border-gray-200">
      <div className="p-4 flex items-center gap-3 border-b border-gray-200">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">C</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">Codename.com</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1 mb-6">
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
            <Star className="w-4 h-4" />
            <span>Starred</span>
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
            <Clock className="w-4 h-4" />
            <span>Recent</span>
          </button>
        </div>

        <nav className="space-y-6">
          <div>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg">
              <FileText className="w-4 h-4" />
              <span>Sales list</span>
            </button>
          </div>

          <div>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg">
              <BarChart3 className="w-4 h-4" />
              <span>Goals</span>
            </button>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <button className="flex items-center gap-2 text-sm font-medium text-gray-900">
                <span>Dashboard</span>
              </button>
              <button className="ml-auto text-gray-400 hover:text-gray-600">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="ml-4 space-y-1">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                <span>Codename</span>
              </button>

              <div>
                <button
                  onClick={() => toggleItem('shared')}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                >
                  {expandedItems.includes('shared') ? (
                    <ChevronDown className="w-3 h-3" />
                  ) : (
                    <ChevronRight className="w-3 h-3" />
                  )}
                  <span>Shared with me</span>
                </button>

                {expandedItems.includes('shared') && (
                  <div className="ml-6 space-y-1 mt-1">
                    <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                      <span>Cargo2go</span>
                    </button>
                    <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                      <span>Cloudz3r</span>
                      <span className="ml-auto w-5 h-5 bg-pink-500 text-white text-xs rounded flex items-center justify-center">2</span>
                    </button>
                    <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                      <span>Idioma</span>
                    </button>
                    <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                      <span>Syllables</span>
                    </button>
                    <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                      <span>x-Qb</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 px-3">
              <span className="text-sm font-medium text-gray-900">Reports</span>
              <button className="ml-auto text-gray-400 hover:text-gray-600">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="ml-4 space-y-1">
              <button
                onClick={() => toggleItem('sharewithme')}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                {expandedItems.includes('sharewithme') ? (
                  <ChevronDown className="w-3 h-3" />
                ) : (
                  <ChevronRight className="w-3 h-3" />
                )}
                <span>Share with me</span>
              </button>

              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                <span>Deals by user</span>
              </button>

              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                <span>Deal duration</span>
              </button>

              <div>
                <button
                  onClick={() => toggleItem('myreports')}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                >
                  {expandedItems.includes('myreports') ? (
                    <ChevronDown className="w-3 h-3" />
                  ) : (
                    <ChevronRight className="w-3 h-3" />
                  )}
                  <span>My reports</span>
                </button>

                {expandedItems.includes('myreports') && (
                  <div className="ml-6 space-y-1 mt-1">
                    <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                      <span>Emails received</span>
                    </button>
                    <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                      <span>Deal duration</span>
                    </button>
                    <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-pink-500 bg-pink-50 rounded-lg font-medium">
                      <span>New report</span>
                    </button>
                    <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                      <span>Analytics</span>
                      <span className="ml-auto w-5 h-5 bg-pink-500 text-white text-xs rounded flex items-center justify-center">2</span>
                    </button>
                  </div>
                )}
              </div>

              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                <Folder className="w-4 h-4" />
                <span>Manage folders</span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200 space-y-2">
        <button className="w-full flex items-center justify-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg">
          <UserIcon className="w-5 h-5" />
        </button>
        <button className="w-full flex items-center justify-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
