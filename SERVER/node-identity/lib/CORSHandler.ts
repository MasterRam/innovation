import { CorsOptions } from 'cors';

export const CorsOptionsLocal = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
} as CorsOptions;
