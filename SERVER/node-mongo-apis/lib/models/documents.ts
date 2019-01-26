import { model } from 'mongoose';
import { FormSchema } from './formSchema.model';
import { PageSchema } from './pageSchema.model';
import { PostSchema } from './postSchema.model';

export const PageDocument = model('Page', PageSchema);
export const FormDocument = model('Form', FormSchema);
export const PostDocument = model('Post', PostSchema);
