import { UserDocument } from '../../models/documents';
import { User } from '../models/user.model';

export class UserRepository {
  constructor() {}
  public getUser(
    username: any,
    callback: (success: boolean, response: any) => void
  ) {
    UserDocument.findOne({ userName: username }).then(
      user => {
        callback(true, user);
      },
      error => callback(false, error)
    );
  }

  public findAll(callback: (success: boolean, response: any) => void) {
    UserDocument.find((err, data) => {
      if (err) {
        callback(false, err);
      }
      callback(true, data);
    });
  }

  public Add(
    id: any,
    data: User,
    callback: (success: boolean, response: any) => void
  ) {
    const document = new UserDocument(data);
    let error: Error | any;
    if ((error = document.validateSync()) === undefined) {
      UserDocument.update(
        { _id: id },
        document,
        { upsert: true },
        (err, updatedData) => {
          if (err) {
            callback(false, err);
          } else {
            callback(true, updatedData);
          }
        }
      );
    } else {
      callback(false, error.errors);
    }
  }
}
