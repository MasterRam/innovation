import { BlogDocument } from '../../models/documents';
import { BlogModel } from './blogSchema.model';

export class BlogRepository {
  constructor() { }
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

  public findAll(
    callback: (success: boolean, response: any) => void
  ) {
    BlogDocument.find((err, data) => {
      if (err) {
        callback(false, err);
      }
      callback(true, data);
    });
  }

  public Add(
    id: any,
    data: BlogModel,
    callback: (success: boolean, response: any) => void
  ) {
    const document = new BlogDocument(data);
    let error: Error | any;
    if ((error = document.validateSync()) === undefined) {
      BlogDocument.update({ _id: id }, document,{upsert:true}, (err, updatedData) => {
        if (err) {
          callback(false, err);
        } else {
          callback(true, updatedData);
        }
      });
    } else {
      callback(false, error.errors);
    }
  }
}
