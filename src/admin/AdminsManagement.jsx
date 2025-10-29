import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { 
  FiPlus, 
  FiEdit3, 
  FiTrash2, 
  FiEye, 
  FiSearch, 
  FiFilter,
  FiMoreVertical,
  FiUser,
  FiMail,
  FiShield,
  FiCalendar,
  FiCheckCircle,
  FiXCircle
} from 'react-icons/fi';
import { adminAPI } from '../services/api';

const AdminsManagement = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [adminToDelete, setAdminToDelete] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'admin'
  });

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      const response = await adminAPI.getAll();
      setAdmins(response.data.data || []);
    } catch (error) {
      console.error('Error fetching admins:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!formData.name || formData.name.trim().length < 2) {
      toast.error('Name must be at least 2 characters');
      return;
    }

    if (!formData.email || !formData.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!formData.password || formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    try {
      const response = await adminAPI.create(formData);
      
      if (response.data.success) {
        toast.success(response.data.message || 'Admin created successfully! ✅');
        setFormData({ name: '', email: '', password: '', role: 'admin' });
        setShowCreateModal(false);
        fetchAdmins();
      } else {
        toast.error(response.data.message || 'Failed to create admin');
      }
    } catch (error) {
      console.error('Error creating admin:', error);
      toast.error(error.response?.data?.message || 'Failed to create admin. Please try again.');
    }
  };

  const handleDelete = async (adminId) => {
    try {
      await adminAPI.delete(adminId);
      setAdmins(admins.filter(admin => admin._id !== adminId));
      setShowDeleteModal(false);
      setAdminToDelete(null);
      toast.success('Admin deleted successfully!');
    } catch (error) {
      console.error('Error deleting admin:', error);
      toast.error('Failed to delete admin. Please try again.');
    }
  };

  const handleUpdate = async (adminId, data) => {
    try {
      await adminAPI.update(adminId, data);
      setAdmins(admins.map(admin => 
        admin._id === adminId ? { ...admin, ...data } : admin
      ));
      toast.success('Admin updated successfully!');
    } catch (error) {
      console.error('Error updating admin:', error);
      toast.error('Failed to update admin. Please try again.');
    }
  };

  const filteredAdmins = admins.filter(admin => {
    const matchesSearch = admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admin.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = !roleFilter || admin.role === roleFilter;
    const matchesStatus = !statusFilter || 
                         (statusFilter === 'active' && admin.isActive) ||
                         (statusFilter === 'inactive' && !admin.isActive);
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const AdminCard = ({ admin }) => (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {admin.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{admin.name}</h3>
              <p className="text-gray-600 text-sm">{admin.email}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              admin.role === 'super_admin' ? 'bg-red-100 text-red-800' :
              admin.role === 'admin' ? 'bg-blue-100 text-blue-800' :
              'bg-green-100 text-green-800'
            }`}>
              {admin.role.replace('_', ' ')}
            </span>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              admin.isActive 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {admin.isActive ? 'Active' : 'Inactive'}
            </span>
            <div className="relative">
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <FiMoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FiCalendar className="w-4 h-4 mr-1" />
              Joined {new Date(admin.createdAt).toLocaleDateString()}
            </div>
            {admin.lastLogin && (
              <div className="flex items-center">
                <FiCalendar className="w-4 h-4 mr-1" />
                Last login: {new Date(admin.lastLogin).toLocaleDateString()}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleUpdate(admin._id, { isActive: !admin.isActive })}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                admin.isActive
                  ? 'bg-red-100 text-red-800 hover:bg-red-200'
                  : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              {admin.isActive ? 'Deactivate' : 'Activate'}
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => console.log('View admin:', admin._id)}
              className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
              title="View"
            >
              <FiEye className="w-4 h-4" />
            </button>
            <button
              onClick={() => console.log('Edit admin:', admin._id)}
              className="p-2 text-gray-400 hover:text-yellow-600 transition-colors"
              title="Edit"
            >
              <FiEdit3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setAdminToDelete(admin);
                setShowDeleteModal(true);
              }}
              className="p-2 text-gray-400 hover:text-red-600 transition-colors"
              title="Delete"
            >
              <FiTrash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admins Management</h1>
          <p className="text-gray-600">Manage admin users and their permissions</p>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center"
        >
          <FiPlus className="w-4 h-4 mr-2" />
          Add Admin
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search admins..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">All Roles</option>
            <option value="super_admin">Super Admin</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button
            onClick={() => {
              setSearchTerm('');
              setRoleFilter('');
              setStatusFilter('');
            }}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            <FiFilter className="w-4 h-4 mr-2" />
            Clear Filters
          </button>
        </div>
      </div>

      {/* Admins List */}
      <div className="space-y-4">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          </div>
        ) : filteredAdmins.length > 0 ? (
          filteredAdmins.map((admin) => (
            <AdminCard key={admin._id} admin={admin} />
          ))
        ) : (
          <div className="text-center py-12">
            <FiUser className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No admins found</h3>
            <p className="text-gray-500 mb-4">Get started by adding your first admin user</p>
            <button 
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Add Admin
            </button>
          </div>
        )}
      </div>

      {/* Create Admin Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Admin</h3>
            

            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter admin name (min 2 characters)"
                  required
                  minLength={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter email address"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter password (min 6 characters)"
                  required
                  minLength={6}
                />
                <p className="text-xs text-gray-500 mt-1">Password must be at least 6 characters</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="admin">Admin</option>
                  <option value="moderator">Moderator</option>
                </select>
              </div>
              <div className="flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    setFormData({ name: '', email: '', password: '', role: 'admin' });
                  }}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Create Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Delete Admin</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this admin? This action cannot be undone.
            </p>
            <div className="flex items-center justify-end space-x-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setAdminToDelete(null);
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(adminToDelete._id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminsManagement;
