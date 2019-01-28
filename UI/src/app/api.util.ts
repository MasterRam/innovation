const apiConst = [
  {
    name: "product-api",
    domain: "localhost",
    port: "3001",
    suffix: undefined,
    isHTTPS: false,
    headers: {
      ["content-type"]: "application/x-www-form-urlencoded"
    }
  },
  {
    name: "identity",
    domain: "localhost",
    port: "5000",
    // suffix: '',
    isHTTPS: false,
    headers: {
      ["content-type"]: "application/x-www-form-urlencoded"
    }
  },
  {
    name: "blog-json",
    domain: "localhost",
    port: "4200",
    suffix: "assets/samples/blog",
    isHTTPS: false,
    headers: {
      ["content-type"]: "application/x-www-form-urlencoded"
    }
  }
];

export interface IApiParam {
  urlObj: IDataLoadURL;
  uiElement?: string;
  body?: any;
  queryParam?: object;
}
export interface IDataLoadURL {
  method: "POST" | "GET" | "DELETE" | "PUT";
  url: string;
  hostName: string;
  uiElement: string;
  defaultHeaders: any;
}

export const GetFullURL = (hostName: string, url: string): string => {
  const apiData = apiConst.find(t => t.name === hostName);
  if (apiData === undefined) {
    throw Error("Host data not defined");
  }

  const http = apiData.isHTTPS ? "https://" : "http://";
  const port = apiData.port === undefined ? "" : `:${apiData.port}`;
  const suffix = apiData.suffix === undefined ? "" : `/${apiData.suffix}`;
  return `${http + apiData.domain + port}${suffix}/${url}`;
};

export const GetHeaders = (hostName: string): object => {
  const apiData = apiConst.find(t => t.name === hostName);
  if (apiData === undefined) {
    throw Error("Host data not defined");
  }
  if (apiData.headers === undefined) {
    return {};
  }
  const tempHeader = {};
  Object.assign(tempHeader, apiData.headers);
  return tempHeader;
};

const reset = () => {
  const gettoken = localStorage.getItem("il.a_tk");
  if (gettoken) {
    apiConst.forEach(t => {
      t.headers["Authorization"] = gettoken;
    });
  } else {
  }
};

reset();
