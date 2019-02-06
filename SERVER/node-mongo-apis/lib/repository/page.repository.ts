import { PageDocument } from '../models/documents';
import { Page } from '../models/pageSchema.model';

export class PageRepository {
  constructor() {}
  public findBy(
    findQuery: any,
    callback: (success: boolean, response: any) => void
  ) {
    PageDocument.find(findQuery, (err, data) => {
      if (err) {
        callback(false, err);
      }
      callback(true, data);
    });
  }
  public Add(
    findQuery: any,
    data: Page,
    callback: (success: boolean, response: any) => void
  ) {
    const document = new PageDocument(data);
    let error: Error | any;
    if ((error = document.validateSync()) === undefined) {
      PageDocument.findOneAndUpdate(
        findQuery,
        data,
        { new: true },
        (err, updatedData) => {
          if (err) {
            callback(false, err);
          }
          callback(true, updatedData);
        }
      );
    } else {
      callback(false, error.errors);
    }
  }
}
