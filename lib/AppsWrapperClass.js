'use strict';

const MarathonWrapper = require('./MarathonWrapperClass')
class AppsWrapper extends MarathonWrapper {

  constructor(leader) {
    super(leader);
  }
  list(appId) {
    this.request({
      uri : '/v2/apps' + ( appId ? `/${appId}` : '')
    })
    .then((reqObject) => {
      let body = reqObject.body;
      console.log(body)
    }, (err) => {
      console.log(err)
    })
  }
  versions(appId, versionId){
    this.request({
      uri : `/v2/apps/${appId}` + ( versionId ? `/${versionId}` : '')
    })
    .then((reqObject) => {
      let body = reqObject.body;
      console.log(body)
    }, (err) => {
      console.log(err)
    })
  }

}

let x = new AppsWrapper();

x.versions();