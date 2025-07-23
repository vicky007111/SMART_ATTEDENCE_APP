const mongoose = require('mongoose');

const webAuthnCredentialSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  credentialId: String,
  publicKey: String,
  counter: Number,
  transports: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('WebAuthnCredential', webAuthnCredentialSchema);
