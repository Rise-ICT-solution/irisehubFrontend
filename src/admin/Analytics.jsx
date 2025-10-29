import React, { useState, useEffect } from 'react';
import { 
  FiTrendingUp, 
  FiEye, 
  FiUsers, 
  FiFileText, 
  FiBookOpen,
  FiCalendar,
  FiBarChart,
  FiPieChart,
  FiActivity
} from 'react-icons/fi';

const Analytics = () => {
  const [analytics, setAnalytics] = useState({
    totalViews: 0,
    totalPosts: 0,
    totalNews: 0,
    totalAdmins: 0,
    monthlyViews: [],
    topPosts: [],
    recentActivity: []
  });
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('30d');

  useEffect(() => {
    fetchAnalytics();
  }, [timeRange]);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      // Mock data - replace with actual API calls
      setAnalytics({
        totalViews: 15420,
        totalPosts: 45,
        totalNews: 23,
        totalAdmins: 8,
        monthlyViews: [
          { month: 'Jan', views: 1200 },
          { month: 'Feb', views: 1900 },
          { month: 'Mar', views: 3000 },
          { month: 'Apr', views: 2800 },
          { month: 'May', views: 1890 },
          { month: 'Jun', views: 2390 },
        ],
        topPosts: [
          { title: 'Technology Innovation in Somalia', views: 1200, category: 'Technology' },
          { title: 'Agricultural Development Programs', views: 980, category: 'Agriculture' },
          { title: 'Youth Empowerment Initiatives', views: 850, category: 'Education' },
          { title: 'Economic Growth Strategies', views: 720, category: 'Economy' },
          { title: 'Healthcare Improvements', views: 650, category: 'Health' },
        ],
        recentActivity: [
          { action: 'New post created', user: 'Admin User', time: '2 hours ago', type: 'post' },
          { action: 'News article published', user: 'Moderator', time: '4 hours ago', type: 'news' },
          { action: 'Admin user added', user: 'Super Admin', time: '1 day ago', type: 'admin' },
          { action: 'Post updated', user: 'Admin User', time: '2 days ago', type: 'post' },
          { action: 'Event published', user: 'Moderator', time: '3 days ago', type: 'news' },
        ]
      });
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ title, value, icon: Icon, color, change, changeType }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value.toLocaleString()}</p>
          {change && (
            <p className={`text-xs mt-1 flex items-center ${
              changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              <FiTrendingUp className={`w-3 h-3 mr-1 ${changeType === 'negative' ? 'rotate-180' : ''}`} />
              {change}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  const TopPostItem = ({ post, index }) => (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
          {index + 1}
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-900 truncate max-w-xs">
            {post.title}
          </h4>
          <p className="text-xs text-gray-500">{post.category}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium text-gray-900">{post.views.toLocaleString()}</p>
        <p className="text-xs text-gray-500">views</p>
      </div>
    </div>
  );

  const ActivityItem = ({ activity }) => (
    <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        activity.type === 'post' ? 'bg-blue-100' :
        activity.type === 'news' ? 'bg-green-100' :
        'bg-purple-100'
      }`}>
        {activity.type === 'post' ? (
          <FiFileText className="w-4 h-4 text-blue-600" />
        ) : activity.type === 'news' ? (
          <FiBookOpen className="w-4 h-4 text-green-600" />
        ) : (
          <FiUsers className="w-4 h-4 text-purple-600" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
        <p className="text-xs text-gray-500">{activity.user} • {activity.time}</p>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Track your content performance and user engagement</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Views"
          value={analytics.totalViews}
          icon={FiEye}
          color="bg-blue-500"
          change="+12.5%"
          changeType="positive"
        />
        <StatCard
          title="Total Posts"
          value={analytics.totalPosts}
          icon={FiFileText}
          color="bg-green-500"
          change="+8.2%"
          changeType="positive"
        />
        <StatCard
          title="News & Events"
          value={analytics.totalNews}
          icon={FiBookOpen}
          color="bg-purple-500"
          change="+15.3%"
          changeType="positive"
        />
        <StatCard
          title="Active Admins"
          value={analytics.totalAdmins}
          icon={FiUsers}
          color="bg-orange-500"
        />
      </div>

      {/* Charts and Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Views Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Monthly Views</h3>
            <FiBarChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {analytics.monthlyViews.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{item.month}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${(item.views / 3000) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-16 text-right">
                    {item.views.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Posts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Top Performing Posts</h3>
            <FiPieChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {analytics.topPosts.map((post, index) => (
              <TopPostItem key={index} post={post} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <FiActivity className="w-5 h-5 text-gray-400" />
        </div>
        <div className="space-y-2">
          {analytics.recentActivity.map((activity, index) => (
            <ActivityItem key={index} activity={activity} />
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Average Views per Post</p>
              <p className="text-2xl font-bold">342</p>
            </div>
            <FiTrendingUp className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Engagement Rate</p>
              <p className="text-2xl font-bold">8.4%</p>
            </div>
            <FiActivity className="w-8 h-8 text-green-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Content Published</p>
              <p className="text-2xl font-bold">68</p>
            </div>
            <FiCalendar className="w-8 h-8 text-purple-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
