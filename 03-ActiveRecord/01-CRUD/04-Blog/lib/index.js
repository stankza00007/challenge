const Database = require('better-sqlite3');
global.DB = new Database(__dirname + '/db/blog.sqlite', {  });
    