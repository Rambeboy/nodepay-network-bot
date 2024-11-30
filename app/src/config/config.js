class Config {
  constructor() {
    this.baseURL = 'https://nodepay.org';
    this.ipCheckURL = 'https://ipinfo.io/json';
    this.pingURL = [
    "http://18.142.29.174/api/network/ping",
    "http://13.215.134.222/api/network/ping",
    "http://54.255.192.166/api/network/ping",
  ],
    this.retryInterval = 30000;
    this.sessionURL = 'http://api.nodepay.ai/api/auth/session';
  }
}

module.exports = Config;
