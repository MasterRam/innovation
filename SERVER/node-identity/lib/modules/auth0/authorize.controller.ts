import { Injectable } from '@decorators/di';
import { Body, Controller, Get, Post, Response } from '@decorators/express';
import { compareSync, hashSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { Login } from '../models/user.model';
import { UserRepository } from './user.repository';

const secret = '123';
@Controller('/')
@Injectable()
export class AuthController {
  constructor(private service = new UserRepository()) {}

  @Post('/token')
  token(@Response() res, @Body() request: Login) {
    const dd = hashSync(request.password, 6);
    this.service.getUser(request.username, (success, user) => {
      if (!success || !user) {
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
        userName: user.userName,
        email: user.email
      };

      const token = sign(payload, secret, {
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
  userinfo(@Response() res, @Body() request: Login) {}
  revocation(@Response() res, @Body() request: Login) {}
  introspect(@Response() res, @Body() request: Login) {}
}
