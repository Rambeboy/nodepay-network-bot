class Config {
  constructor() {
    this.baseURL = "https://nodepay.org";
    this.ipCheckURL = "https://ipinfo.io/json";
    this.pingURL = [ 
      "http://13.215.134.222/api/network/ping",
      "http://18.139.20.49/api/network/ping",
      "http://52.74.35.173/api/network/ping",
      "http://52.77.10.116/api/network/ping"
    ]
    this.retryInterval = 0x7530;
    this.sessionURL = "http://18.136.143.169/api/auth/session";
    this.randomPointsMin = 5;
    this.randomPointsMax = 50;
  }
}
module.exports = Config;
