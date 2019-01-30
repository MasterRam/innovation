import { PostDocument } from "../models/documents";
import { BlogPost } from "../models/postSchema.model";

export class BlogRepository {
  constructor() {}
  public findBy(
    findQuery: any,
    callback: (success: boolean, response: any) => void
  ) {
    PostDocument.findOne(findQuery, (err, data) => {
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
    const document = new PostDocument(data);
    let error: Error | any;
    if ((error = document.validateSync()) === undefined) {                  
      PostDocument.create(data, (updatedData) => {        
        callback(true, updatedData);
      },(err)=>{
        if (err) {
          callback(false, err);
        }
      });
    } else {
      callback(false, error.errors);
    }
  }
}
