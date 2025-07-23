const mongoose = require('mongoose');

const attendanceLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  timestamp: {
    type: Date,
    default: Date.now
  },
  location: {
    latitude: Number,
    longitude: Number
  },
  verifiedWith: {
    fingerprint: Boolean,
    face: Boolean,
    location: Boolean
  }
});

module.exports = mongoose.model('AttendanceLog', attendanceLogSchema);
