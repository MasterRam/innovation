import { Injectable } from '@decorators/di';
import {
  Body,
  Controller,
  Get,
  Params,
  Post,
  Response,
  Request,
  Query
} from '@decorators/express';
import { UserDocument } from '../../models/documents';
import { User } from './blogSchema.model';
import { UserRepository } from './user.repository';
import { ObjectId } from 'bson';
import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcrypt';
const secret = '';
@Controller('/')
@Injectable()
export class AuthController {
  constructor(private service = new UserRepository()) {}

  @Get('/authorize')
  getData(@Response() res, @Body() request: any) {
    this.service.getUser(request.username.toLowerCase(), (success, user) => {
      if (!success) {
        res.json({ success: false, message: 'Authentication failed.' });
        return;
      }
      if (!compareSync(request.password, user.passwordHash)) {
        res.json({ success: false, message: 'Authentication failed.' });
        return;
      }
      // if user is found and password is right
      // create a token with only our given payload
      // we don't want to pass in the entire user since that has the password
      const payload = {
        admin: user.admin
      };

      var token = sign(payload, secret, {
        expiresIn: 1440 // expires in 24 hours
      });

      // return the information including token as JSON
      res.json({
        success: true,
        message: 'Authenticated Successfully!',
        token: token
      });
    });
  }

  @Get('/all')
  getAll(@Response() res) {
    this.service.findAll((success, response) => {
      res.send(response);
    });
  }
  @Post('/post')
  postData(@Response() res, @Query('id') id: any, @Body() data: User) {
    if (id === undefined || id === 'undefined' || id === 'null' || id === null)
      id = new ObjectId();
    data._id = id;
    data.normalized_title = data.title.replace(/ /g, '_').toLowerCase();
    this.service.Add(id, data, (success, response) => {
      response.data = data.normalized_title;
      res.send(response);
    });
  }
}
