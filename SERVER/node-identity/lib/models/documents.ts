import { model } from 'mongoose';
import { UserSchema } from '../modules/auth0/user.schema';

export const UserDocument = model('users', UserSchema);
