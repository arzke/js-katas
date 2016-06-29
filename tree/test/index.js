import chai from 'chai'

chai.should();

const req = require.context('./', true, /\.test\.js$/);
req.keys().forEach(req);