const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  role: {
    type: [String],
    enum: ['user', 'host'],
    default: ['user']
  },
  profile: {
    department: String,
    year: String,
    customFields: mongoose.Schema.Types.Mixed 
  },
  auth: {
    webauthnId: String,
    credentials: [mongoose.Schema.Types.Mixed] 
  },
  faceData: String, 
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
