import { InjectionToken } from '@angular/core';
import { AuthOptions } from 'auth0-js';

export interface IAuthOptions extends AuthOptions {
  domain: string;
  clientID: string;
  responseType?: string;
  responseMode?: string;
  redirectUri?: string;
  scope?: string;
  audience?: string;
  leeway?: number;
  plugins?: any[];
  _disableDeprecationWarnings?: boolean;
  _sendTelemetry?: boolean;
  _telemetryInfo?: any;
}

// then define injectionToken
export const AuthConfigService = new InjectionToken<IAuthOptions>(
  'BreadCrumbConfig'
);
