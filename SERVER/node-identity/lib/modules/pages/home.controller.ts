import { Injectable } from '@decorators/di';
import { Body, Controller, Get, Post, Response } from '@decorators/express';
import { compareSync, hashSync } from 'bcrypt';
import express = require('express');
import { sign } from 'jsonwebtoken';
import { Login } from '../models/user.model';

@Controller('/')
@Injectable()
export class HomeController {
  @Get('/')
  token(@Response() res: express.Response, @Body() request: Login) {
    const menu = [
      { title: 'Home', drunkness: 3 },
      { title: 'Account', drunkness: 5 },
      { title: 'Contact Us', drunkness: 10 }
    ];
    res.render('index', { title: 'Express', menu });
  }
  userinfo(@Response() res, @Body() request: Login) { }
  revocation(@Response() res, @Body() request: Login) { }
  introspect(@Response() res, @Body() request: Login) { }
  // qwe
}
