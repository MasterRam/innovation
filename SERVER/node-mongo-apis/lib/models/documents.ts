import { model } from 'mongoose';
import { FormSchema } from '../modules/form/formSchema.model';
import { PageSchema } from '../modules/page/pageSchema.model';
import { BlogSchema } from '../modules/post/blogSchema.model';

export const PageDocument = model('Page', PageSchema);
export const FormDocument = model('Form', FormSchema);
export const BlogDocument = model('Blog', BlogSchema);
