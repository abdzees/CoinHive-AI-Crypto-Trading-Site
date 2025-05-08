import React from 'react';
const DashboardMockup: React.FC = () => {
  return <div className="bg-gray-900 rounded-xl text-white overflow-hidden shadow-2xl">
      <div className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img alt="CoinHive Logo" className="h-6" src="/lovable-uploads/e4daafd0-2705-4fe1-9a04-8796e6598c1c.png" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-xs">JD</span>
          </div>
        </div>
      </div>
      
      <div className="flex">
        {/* Sidebar */}
        <div className="bg-gray-800 w-48 p-4 hidden md:block">
          <div className="space-y-4">
            <div className="p-2 bg-blue-600 rounded-md">Dashboard</div>
            <div className="p-2 text-gray-400">Portfolio</div>
            <div className="p-2 text-gray-400">Trading</div>
            <div className="p-2 text-gray-400">Analytics</div>
            <div className="p-2 text-gray-400">Settings</div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1 p-6">
          <h2 className="text-xl font-medium mb-6">AI Trading Dashboard</h2>
          
          {/* Portfolio summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-gray-400 text-sm">Portfolio Value</div>
              <div className="text-2xl font-medium">$128,429.54</div>
              <div className="text-green-500 text-sm">+12.4% (24h)</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-gray-400 text-sm">AI Performance</div>
              <div className="text-2xl font-medium">+32.7%</div>
              <div className="text-gray-400 text-sm">vs. Market +8.2%</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-gray-400 text-sm">Active Strategies</div>
              <div className="text-2xl font-medium">5</div>
              <div className="text-gray-400 text-sm">3 Profitable</div>
            </div>
          </div>
          
          {/* Chart */}
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Portfolio Performance</h3>
              <div className="flex space-x-2">
                <div className="text-xs px-2 py-1 bg-gray-700 rounded">1D</div>
                <div className="text-xs px-2 py-1 bg-blue-600 rounded">1W</div>
                <div className="text-xs px-2 py-1 bg-gray-700 rounded">1M</div>
                <div className="text-xs px-2 py-1 bg-gray-700 rounded">1Y</div>
              </div>
            </div>
            <div className="h-40 flex items-end">
              {/* Simplified chart representation */}
              <div className="flex-1 flex items-end space-x-1">
                {[30, 45, 25, 60, 35, 50, 70, 55, 45, 60, 75, 65, 85, 90, 80].map((height, i) => <div key={i} style={{
                height: `${height}%`
              }} className="bg-gradient-to-t from-blue-600 to-blue-400 w-full rounded-t-sm"></div>)}
              </div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
              <div>Sun</div>
            </div>
          </div>
          
          {/* AI Insights */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-medium mb-3">AI Trading Insights</h3>
            <div className="space-y-3">
              <div className="bg-gray-700 p-3 rounded flex justify-between">
                <div>
                  <div className="text-sm font-medium">BTC accumulation detected</div>
                  <div className="text-xs text-gray-400">Strong buy signal based on on-chain metrics</div>
                </div>
                <div className="text-green-500">Buy</div>
              </div>
              <div className="bg-gray-700 p-3 rounded flex justify-between">
                <div>
                  <div className="text-sm font-medium">ETH sentiment improving</div>
                  <div className="text-xs text-gray-400">Social sentiment analysis shows bullish trend</div>
                </div>
                <div className="text-green-500">Buy</div>
              </div>
              <div className="bg-gray-700 p-3 rounded flex justify-between">
                <div>
                  <div className="text-sm font-medium">SOL technical weakness</div>
                  <div className="text-xs text-gray-400">Consider reducing exposure temporarily</div>
                </div>
                <div className="text-red-500">Sell</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default DashboardMockup;