const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  hostId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  location: {
    latitude: Number,
    longitude: Number,
    radiusMeters: Number
  },
  customFieldsRequired: [String], // like ['department', 'collegeId']
  attendanceMode: {
    type: String,
    enum: ['fingerprint_face', 'code'],
    default: 'fingerprint_face'
  },
  eventCode: String, // used if attendanceMode === 'code'
  startTime: Date,
  endTime: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Event', eventSchema);
