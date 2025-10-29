import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  FiArrowLeft,
  FiUser,
  FiCalendar,
  FiEye,
  FiShare2,
  FiClock,
  FiMapPin,
  FiPlay,
  FiHeart,
  FiBookmark,
  FiMail,
  FiPhone,
  FiMapPin as FiLocation,
  FiCheckCircle,
  FiX
} from 'react-icons/fi';
import { eventAPI, bookingAPI } from '../services/api';
import Header from '../Components/Home_Comp/Header';
import Footer from '../Components/Footer';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    fullName: '',
    email: '',
    location: '',
    mobileNumber: '',
    notes: ''
  });

  // Check if event is upcoming based on admin choice
  const isUpcomingEvent = (event) => {
    return event && event.type === 'Coming Soon';
  };

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const fetchEvent = async () => {
    try {
      setLoading(true);
      const response = await eventAPI.getById(id);
      if (response.data.success) {
        setEvent(response.data.data);
      } else {
        setError('Event not found');
      }
    } catch (error) {
      console.error('Error fetching event:', error);
      setError('Failed to load event');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatEventDate = (dateString) => {
    if (!dateString) return 'TBA';
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatEventTime = (dateString) => {
    if (!dateString) return 'TBA';
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleBookingFormChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setBookingLoading(true);

    try {
      const bookingData = {
        eventId: id,
        ...bookingForm
      };

      const response = await bookingAPI.create(bookingData);
      
      if (response.data.success) {
        setBookingSuccess(true);
        setBookingForm({
          fullName: '',
          email: '',
          location: '',
          mobileNumber: '',
          notes: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setBookingSuccess(false);
          setShowBookingForm(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Booking error:', error);
      const errorMessage = error.response?.data?.message || 'Failed to register for event';
      
      // Show specific error message for duplicate booking
      if (errorMessage.includes('already registered')) {
        alert('You have already registered for this event.');
      } else {
        alert(errorMessage);
      }
    } finally {
      setBookingLoading(false);
    }
  };

  const resetBookingForm = () => {
    setShowBookingForm(false);
    setBookingSuccess(false);
    setBookingForm({
      fullName: '',
      email: '',
      location: '',
      mobileNumber: '',
      notes: ''
    });
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 pt-32">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !event) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 pt-32">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
              <p className="text-gray-600 mb-6">{error || 'The requested event could not be found.'}</p>
              <button
                onClick={() => navigate('/events')}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FiArrowLeft className="mr-2" />
                Back to Events
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const videoId = getYouTubeVideoId(event.youtubeLink);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Doha Debates Style Header */}
        <div className="bg-black text-white pt-32">
          <div className="max-w-6xl mx-auto px-4">
            {/* Back Button */}
            <button
              onClick={() => navigate('/events')}
              className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Back to Events
            </button>

            <div className='flex items-center justify-between'>

              {/* Event Timing Information */}
              {(event.eventDate || event.eventTime) && (
                <div className="flex items-center text-lg text-gray-300 mb-4">
                  <FiClock className="mr-3" />
                  <div className="flex flex-col">
                    {event.eventDate && (
                      <span className="font-semibold">{formatEventDate(event.eventDate)}</span>
                    )}
                    {event.eventTime && (
                      <span className="text-sm text-gray-400">{event.eventTime}</span>
                    )}
                  </div>
                </div>
              )}

              {/* Event Location */}
              {event.location && (
                <div className="flex items-center text-lg text-gray-300 mb-4">
                  <FiMapPin className="mr-3" />
                  <span>{event.location}</span>
                </div>
              )}

            </div>

            {/* Event Title */}
            <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
              {event.title}
            </h1>

            {/* Event Status Badge */}
            <div className="mb-6">
              <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                isUpcomingEvent(event) 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {isUpcomingEvent(event) ? 'Upcoming Event' : 'Past Event'}
              </span>
            </div>

            {/* Event Image */}
            {event.image && (
              <div className="mb-8">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
              </div>
            )}

          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white text-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content - 2 columns */}
              <div className="lg:col-span-2">
                {/* YouTube Video */}
                {videoId && (
                  <div className="mb-12">
                    <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={event.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}

                {/* Event Description */}
                <div className="prose prose-xl max-w-none mb-8">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                    {event.fullDescription}
                  </div>
                </div>

                {/* Event Details Card */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(event.eventDate || event.eventTime) && (
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <FiCalendar className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Event Date & Time</p>
                          {event.eventDate && (
                            <p className="font-semibold text-gray-900">{formatEventDate(event.eventDate)}</p>
                          )}
                          {event.eventTime && (
                            <p className="text-sm text-gray-600">{event.eventTime}</p>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {event.location && (
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <FiMapPin className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Location</p>
                          <p className="font-semibold text-gray-900">{event.location}</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <FiUser className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Organizer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar - 1 column */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  {/* Booking Card - Only for upcoming events */}
                  {isUpcomingEvent(event) ? (
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 mb-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Register for Event</h3>
                      <p className="text-gray-600">Secure your spot at this amazing event</p>
                    </div>

                    {!showBookingForm ? (
                      <button
                        onClick={() => setShowBookingForm(true)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Book Now
                      </button>
                    ) : (
                      <div className="space-y-4">
                        {/* Booking Form */}
                        <form onSubmit={handleBookingSubmit} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="fullName"
                              value={bookingForm.fullName}
                              onChange={handleBookingFormChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                              placeholder="Enter your full name"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={bookingForm.email}
                              onChange={handleBookingFormChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                              placeholder="Enter your email"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Location *
                            </label>
                            <input
                              type="text"
                              name="location"
                              value={bookingForm.location}
                              onChange={handleBookingFormChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                              placeholder="Where are you from?"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Mobile Number *
                            </label>
                            <input
                              type="tel"
                              name="mobileNumber"
                              value={bookingForm.mobileNumber}
                              onChange={handleBookingFormChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                              placeholder="Enter your phone number"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Additional Notes
                            </label>
                            <textarea
                              name="notes"
                              value={bookingForm.notes}
                              onChange={handleBookingFormChange}
                              rows={3}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                              placeholder="Any special requirements or questions?"
                            />
                          </div>

                          <div className="flex space-x-3">
                            <button
                              type="submit"
                              disabled={bookingLoading}
                              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {bookingLoading ? 'Registering...' : 'Register'}
                            </button>
                            <button
                              type="button"
                              onClick={resetBookingForm}
                              className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200"
                            >
                              <FiX className="w-5 h-5" />
                            </button>
                          </div>
                        </form>
                      </div>
                    )}
                    {/* Success Message - Only for upcoming events */}
                    {isUpcomingEvent(event) && bookingSuccess && (
                      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center animate-fadeIn">
                        <FiCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold text-green-800 mb-2">Your booking has been submitted successfully!</h4>
                        <p className="text-green-600">Thank you for registering for this event. We'll send you a confirmation email shortly.</p>
                      </div>
                    )}
                  </div>
                  ) : (
                    /* Past Event - No Booking Available */
                    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 mb-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FiCalendar className="w-8 h-8 text-gray-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Past Event</h3>
                        <p className="text-gray-500 text-sm">
                          This event has already occurred. Registration is no longer available.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Event Stats - Always visible */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Event Information</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Event Date</span>
                        <span className="text-gray-900">
                          {event.eventDate ? formatEventDate(event.eventDate) : 'TBA'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Event Time</span>
                        <span className="text-gray-900">
                          {event.eventTime || 'TBA'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location</span>
                        <span className="text-gray-900">{event.location || 'TBA'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Organizer</span>
                        <span className="text-gray-900">iRiseHub Team</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Doha Debates Style Footer */}
          <div className="bg-black text-white py-12 mt-16">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-8">
                  <button className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-white">
                    <FiHeart className="w-5 h-5 mr-2" />
                    Like
                  </button>
                  <button className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-white">
                    <FiBookmark className="w-5 h-5 mr-2" />
                    Save
                  </button>
                  <button className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-white">
                    <FiShare2 className="w-5 h-5 mr-2" />
                    Share
                  </button>
                </div>

                {/* Accent Color Element */}
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-8 bg-[#E85024] rounded-full"></div>
                  <div className="text-gray-300">
                    <div className="text-sm">{formatDate(event.createdAt)}</div>
                    <div className="text-xs text-gray-400">iRiseHub Events</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      
      {/* Custom CSS for animations */}
      <style jsx="true">{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default EventDetail;
