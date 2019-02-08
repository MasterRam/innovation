import { BlogDocument } from '../../models/documents';
import { BlogPost } from './blogSchema.model';

export class BlogRepository {
  constructor() {}
  public findBy(
    findQuery: any,
    callback: (success: boolean, response: any) => void
  ) {
    BlogDocument.findOne(findQuery, (err, data) => {
      if (err) {
        callback(false, err);
      }
      callback(true, data);
    });
  }
  public Add(
    findQuery: any,
    data: BlogPost,
    callback: (success: boolean, response: any) => void
  ) {
    const document = new BlogDocument(data);
    let error: Error | any;
    if ((error = document.validateSync()) === undefined) {
      BlogDocument.create(
        data,
        updatedData => {
          callback(true, updatedData);
        },
        err => {
          if (err) {
            callback(false, err);
          }
        }
      );
    } else {
      callback(false, error.errors);
    }
  }
}
