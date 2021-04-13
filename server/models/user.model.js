const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [ true, "You need to provide a handle for your account" ],
        index: { unique: true },
        minlength: [ 3, "Your handle should have at least 3 character" ]
    },
    email: {
        type: String,
        required: [ true, "You need to provide an email address" ],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [ true, "You need to provide a password"]
    }
}, { timestamps: true});

// Confirm password field
UserSchema.virtual('confirmPassword')
	.get( () => this._confirmPassword)
	.set( value => this._confirmPassword = value);

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

// Hashing password before saving
UserSchema.pre('save', function(next) {
	bcrypt.hash(this.password, SALT_WORK_FACTOR)
		.then(hash => {
			this.password = hash;
			next();
		});
});

module.exports = mongoose.model("User", UserSchema);