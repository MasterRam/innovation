import { ObjectId } from 'mongodb';
import { Schema } from 'mongoose';

export const TagSchema = new Schema({
  display: {
    type: String
  },
  value: {
    type: String
  }
});

export const UserSchema = new Schema({
  userName: {
    type: 'String',
    required: true
  },
  normalizedUserName: {
    type: 'String'
  },
  email: {
    type: 'String',
    required: true
  },
  normalizedEmail: {
    type: 'String'
  },
  emailConfirmed: {
    type: 'Boolean'
  },
  passwordHash: {
    type: 'String'
  },
  securityStamp: {
    type: 'String'
  },
  concurrencyStamp: {
    type: 'String'
  },
  phoneNumber: {
    type: 'Mixed'
  },
  phoneNumberConfirmed: {
    type: 'Boolean'
  },
  twoFactorEnabled: {
    type: 'Boolean'
  },
  lockoutEnd: {
    type: 'Mixed'
  },
  lockoutEnabled: {
    type: 'Boolean'
  },
  accessFailedCount: {
    type: 'Number'
  },
  roles: {
    type: ['Mixed']
  },
  claims: {
    type: 'Array'
  },
  logins: {
    type: 'Array'
  },
  tokens: {
    type: 'Array'
  }
});
