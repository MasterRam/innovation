import { model } from 'mongoose';
import { UserSchema } from '../modules/auth0/blogSchema.model';

export const UserDocument = model('Users', UserSchema);
