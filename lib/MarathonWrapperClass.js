'use strict';

const request  = require('request')

module.exports = class MarathonWrapper {

  constructor(leader) {
    this.req         = request;
    this.reqDefaults = {
      baseUrl : leader,
      json : true
    }
  }

  request(options) {
    options = Object.assign({}, this.reqDefaults, options || {});
    return new Promise((accept, reject) => {
      this.req(options, (err, res, body) => {
        return err ? reject(err) : accept({ res, body });
      })
    });
  }

}