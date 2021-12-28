//can we do mongodb for users and sql for data? or should this all be in one place?

//<-------- EXAMPLE CODE FROM SHEPHERD --------->
// create a user model for mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dotenv = require('dotenv');
dotenv.config();

let mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

// user model
const userSchema = new Schema({
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

// hash the password before it's saved in database
userSchema.pre('save', function (next) {
  const user = this;
  bcrypt.hash(user.password, SALT_WORK_FACTOR, function (err, hash) {
    if (err) console.error(err);
    user.password = hash;
    return next();
  });
});

// the method to compare the hashed password with the one the user provided during login
userSchema.methods.comparePassword = async function (potentialPass) {
  const user = this;
  return await bcrypt.compare(potentialPass, user.password);
};

const User = mongoose.model('User', userSchema);

// schema for resetting password
const resetPasswordSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    token: { type: String, required: true },
  },
  { timestamps: true }
);

// it expires after ten minutes if they haven't continued with process
resetPasswordSchema.index({ updatedAt: 1 }, { expireAfterSeconds: 600 });

const PasswordReset = mongoose.model('PasswordReset', resetPasswordSchema);

module.exports = { User, PasswordReset };