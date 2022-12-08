const DEV = {
  BASE_URL: 'http://localhost:9090/sys',
}

const PROD = {
  BASE_URL: 'https://api.zqskate.com/sys',
}

export const prod = process.env.NODE_ENV === "production";

export const API = prod ? PROD : DEV;
