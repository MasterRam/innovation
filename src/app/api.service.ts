import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpParamsOptions } from '@angular/common/http/src/params';
import { GetFullURL, IApiParam, GetHeaders } from './api.util';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
    constructor(private httpClient: HttpClient) { }

    private mergeHeader(hostName: string, header: any): HttpHeaders {
        const preHeader = GetHeaders(hostName) as any;
        const headerObject = {};

        for (const key in preHeader) {
            if (preHeader.hasOwnProperty(key)) {
                const element = preHeader[key];
                headerObject[key] = element;
            }
        }
        for (const key in header) {
            if (header.hasOwnProperty(key)) {
                const element = header[key];
                if (element !== undefined) {
                    headerObject[key] = element;
                } else if (headerObject.hasOwnProperty(key)) {
                    delete headerObject[key];
                }
            }
        }
        const headers = new HttpHeaders(headerObject);
        return headers;
    }
    public request<T>({ urlObj, uiElement, body, queryParam }: IApiParam): Observable<T> {
        const url = GetFullURL(urlObj.hostName, urlObj.url);
        urlObj.method = urlObj.method || 'GET';
        queryParam = queryParam || {};
        let params: HttpParams;
        if (Object.keys(queryParam).length > 0) {
            params = new HttpParams({ fromObject: queryParam } as HttpParamsOptions);
        }
        if (urlObj.defaultHeaders === undefined) {
            urlObj.defaultHeaders = {};
        }
        urlObj.defaultHeaders['api-ind'] = urlObj.uiElement || uiElement || '';
        const headers = this.mergeHeader(urlObj.hostName, urlObj.defaultHeaders);
        return this.httpClient.request(
            urlObj.method,
            url,
            {
                headers: headers,
                body,
                params
            }) as Observable<T>;

    }


}
