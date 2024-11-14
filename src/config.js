class Config {
  constructor() {
    this.baseURL = 'https://nodepay.org';
    this.ipCheckURL = 'https://ipinfo.io/json';
    this.pingURL = 'https://nw.nodepay.org/api/network/ping';
    this.retryInterval = 30000;
    this.sessionURL = 'https://api.nodepay.ai/api/auth/session';
  }
}

module.exports = Config;
