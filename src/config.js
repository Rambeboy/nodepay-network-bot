class Config {
  constructor() {
    this.baseURL = 'https://nodepay.org';
    this.ipCheckURL = 'https://ipinfo.io/json';
    this.pingURL = 'http://52.77.10.116/api/network/ping';
    this.retryInterval = 30000;
    this.sessionURL = 'http://18.136.143.169/api/auth/session';
  }
}

module.exports = Config;
