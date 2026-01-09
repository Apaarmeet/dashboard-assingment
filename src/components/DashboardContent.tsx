import { ChevronDown, Star, TrendingUp, Filter, MoreVertical, ChevronRight } from 'lucide-react';

export default function DashboardContent() {
  const topUsers = [
    { name: 'Armin A.', amount: '$209,633', percentage: '39.63%', avatar: 'AA' },
    { name: 'Mikasa A.', amount: '$156,841', percentage: '29.65%', avatar: 'MA' },
    { name: 'Eren Y.', amount: '$117,115', percentage: '22.14%', avatar: 'EY' },
    { name: 'Other', amount: '$45,386', percentage: '8.58%', avatar: 'O', isOther: true },
  ];

  const tableData = [
    {
      name: 'Armin A.',
      avatar: 'AA',
      revenue: '$209,633',
      deals: 441,
      leads: 118,
      conversionRate: 0.84,
      win: '31%',
      loss: 12,
      dealCount: 29
    },
    {
      name: 'Mikasa A.',
      avatar: 'MA',
      revenue: '$156,841',
      deals: 574,
      leads: 103,
      conversionRate: 0.89,
      win: '39%',
      loss: 21,
      dealCount: 33,
      hasAction: true
    },
    {
      name: 'Eren Y.',
      avatar: 'EY',
      revenue: '$117,115',
      deals: 22,
      leads: 84,
      conversionRate: 0.79,
      win: '32%',
      loss: 6,
      dealCount: 15
    },
  ];

  const platforms = [
    { name: 'Dribbble', revenue: '$227,459', percentage: '43%', color: 'bg-pink-100', icon: '🏀' },
    { name: 'Instagram', revenue: '$142,823', percentage: '27%', color: 'bg-orange-100', icon: '📷' },
    { name: 'Behance', revenue: '$89,935', percentage: '11%', color: 'bg-blue-100', icon: 'Bē' },
    { name: 'Google', revenue: '$37,028', percentage: '7%', color: 'bg-green-100', icon: 'G' },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-light text-gray-400">New report</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full">
                <div className="w-5 h-5 bg-black rounded-full"></div>
                <span className="text-sm font-medium">Timeframe</span>
              </div>
              <button className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm">
                <span>Sep 1 - Nov 30, 2023</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mb-6">
          <div className="col-span-5">
            <div className="bg-white rounded-2xl p-6">
              <h2 className="text-sm font-medium text-gray-600 mb-2">Revenue</h2>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-semibold text-gray-900">$528,976</span>
                <span className="text-4xl font-light text-gray-300">.82</span>
                <span className="px-2 py-0.5 bg-pink-500 text-white text-xs rounded-full font-medium">-7.9%</span>
                <span className="text-sm text-pink-500 font-medium">-$27,335.04</span>
              </div>
              <p className="text-sm text-gray-500">vs prev. $601,641.73 Jun 1 - Aug 31, 2023</p>

              <div className="flex items-center gap-6 mt-6">
                {topUsers.map((user, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                      user.isOther ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {user.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{user.amount}</div>
                      <div className="text-xs text-gray-500">{user.percentage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="bg-white rounded-2xl p-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Top sales</span>
              </div>
              <div className="text-3xl font-semibold text-gray-900 mb-1">72</div>
              <div className="flex items-center gap-2 mt-auto">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-medium text-white">
                  M
                </div>
                <span className="text-sm text-gray-900">Mikasa</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="bg-black rounded-2xl p-4 h-full relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <button className="p-1 hover:bg-white/10 rounded">
                  <Star className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="flex flex-col h-full">
                <span className="text-xs text-gray-400 mb-2">Best deal</span>
                <div className="text-xl font-semibold text-white mb-1">$34,000</div>
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-sm text-white">Rolf Inc.</span>
                  <div className="w-5 h-5 rounded bg-white flex items-center justify-center ml-auto">
                    <ChevronRight className="w-3 h-3 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="bg-white rounded-2xl p-4 border border-pink-200 h-full flex flex-col">
              <span className="text-xs text-gray-600 mb-2">Deals</span>
              <div className="text-2xl font-semibold text-gray-900 mb-0.5">627%</div>
              <div className="flex items-center gap-1 text-xs mt-auto">
                <TrendingUp className="w-3 h-3 text-green-600" />
                <span className="text-green-600 font-medium">5</span>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="bg-white rounded-2xl p-4 border border-pink-200 h-full flex flex-col">
              <span className="text-xs text-gray-600 mb-2">Value</span>
              <div className="text-2xl font-semibold text-gray-900 mb-0.5">$288k</div>
              <div className="flex items-center gap-1 text-xs mt-auto">
                <TrendingUp className="w-3 h-3 text-green-600" />
                <span className="text-green-600 font-medium">7.9%</span>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="bg-white rounded-2xl p-4 border border-pink-200 h-full flex flex-col">
              <span className="text-xs text-gray-600 mb-2">Win rate</span>
              <div className="text-2xl font-semibold text-gray-900 mb-0.5">41%</div>
              <div className="flex items-center gap-1 text-xs mt-auto">
                <TrendingUp className="w-3 h-3 text-green-600" />
                <span className="text-green-600 font-medium">1.2%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                <MoreVertical className="w-4 h-4" />
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                <span>Filters</span>
                <Filter className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                <MoreVertical className="w-4 h-4" />
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
              <span>Filters</span>
              <Filter className="w-4 h-4" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Sales</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Revenue</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Leads</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">KPI</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">W/L</th>
                  <th className="text-left py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">
                          {row.avatar}
                        </div>
                        <span className="text-sm font-medium text-gray-900">{row.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-900">{row.revenue}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-gray-800 text-white text-xs rounded font-medium">{row.deals}</span>
                        <span className="text-sm text-gray-900">{row.leads}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-900">{row.conversionRate}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-900">{row.win}</span>
                        <span className="px-2 py-1 bg-gray-800 text-white text-xs rounded font-medium">{row.loss}</span>
                        <span className="text-sm text-gray-900">{row.dealCount}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      {row.hasAction && (
                        <button className="w-6 h-6 rounded bg-pink-500 flex items-center justify-center hover:bg-pink-600">
                          <ChevronRight className="w-4 h-4 text-white" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button className="w-full mt-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
            Details
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="space-y-4 flex-1">
                  {platforms.map((platform, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg ${platform.color} flex items-center justify-center text-sm font-medium`}>
                          {platform.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-900">{platform.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-900">{platform.revenue}</div>
                        <div className="text-xs text-gray-500">{platform.percentage}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <span>Deals amount</span>
                  <span>by referrer category</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white">
              <div className="mb-4">
                <div className="text-xs text-pink-200 mb-2">Platform value</div>
                <div className="text-2xl font-semibold mb-1">Dribbble</div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-pink-200">Revenue</div>
                  <div className="text-lg font-semibold">$18,552</div>
                </div>
                <div>
                  <div className="text-xs text-pink-200">Leads</div>
                  <div className="text-lg font-semibold">373 <span className="text-pink-200">97,276</span></div>
                </div>
                <div>
                  <div className="text-xs text-pink-200">Win/Loss</div>
                  <div className="text-lg font-semibold">18% <span className="text-pink-200">51/318</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-pink-500 text-white text-xs rounded font-medium">$156,841</span>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Top sales</span>
                  <span className="font-medium">🔥</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Sales streak</span>
                  <span className="font-medium">🔥</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Top review</span>
                  <span className="font-medium">👍</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Work with platforms</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center">
                        🏀
                      </div>
                      <span className="text-sm font-medium text-gray-900">Dribbble</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                        📷
                      </div>
                      <span className="text-sm font-medium text-gray-900">Instagram</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                        G
                      </div>
                      <span className="text-sm font-medium text-gray-900">Google</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">14.1%</div>
                      <div className="text-xs text-gray-500 line-through">$77,110</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">28.1%</span>
                    <span className="text-gray-400">$44,072</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900">👁</span>
                    <span className="text-sm">5.4%</span>
                    <span className="text-gray-400 text-sm">$8,468</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-900">📷</span>
                      <span>Other</span>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-900">7.1%</span>
                      <span className="text-gray-400 ml-2">$11,135</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Sales dynamic</h3>
                <div className="h-32 bg-gray-50 rounded-lg flex items-end justify-between px-4 pb-4">
                  <div className="text-xs text-gray-500">Chart placeholder</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">
                  EY
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Eren Y.</div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 text-xs">
                <div>
                  <div className="text-gray-500">Revenue</div>
                  <div className="font-medium">$117,115</div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="px-1.5 py-0.5 bg-gray-800 text-white rounded">22</span>
                  </div>
                </div>
                <div>
                  <div className="font-medium">84</div>
                </div>
                <div>
                  <div className="font-medium">0.79</div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span>32%</span>
                    <span className="px-1.5 py-0.5 bg-gray-800 text-white rounded">6</span>
                    <span>15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
