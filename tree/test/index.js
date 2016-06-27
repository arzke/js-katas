const req = require.context('./', true, /\.test\.js$/);
req.keys().forEach(req);