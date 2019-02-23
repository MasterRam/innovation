import { Injectable } from '@decorators/di';
import { Body, Controller, Get, Post, Response } from '@decorators/express';
import { compareSync, hashSync } from 'bcrypt';
import express = require('express');
import { sign } from 'jsonwebtoken';
import { Login } from '../models/user.model';

const secret = '123';
@Controller('/')
@Injectable()
export class LoginController {
  @Get('/login')
  token(@Response() res: express.Response, @Body() request: Login) {
    res.render('account/login', { title: 'Express', layout: 'layouts/empty' });
  }
  // qwe
}

