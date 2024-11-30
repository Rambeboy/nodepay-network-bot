class Config {
  constructor() {
    this.baseURL = 'https://nodepay.org';
    this.ipCheckURL = 'https://ipinfo.io/json';
    this.pingURL = 'http://54.255.192.166/api/network/ping';
    this.retryInterval = 30000;
    this.sessionURL = 'http://api.nodepay.ai/api/auth/session';
  }
}

module.exports = Config;
