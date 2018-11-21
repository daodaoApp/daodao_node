
const path = require('path');
const fs = require('fs');
const mime = require('mime');

function staticFiles(url, dir) {
  return async(ctx, next) => {
    let requestPath = ctx.request.path;
    if(requestPath.startsWith(url)) {
      const filePath = path.join(dir,requestPath.subString(url.length));
      if(fs.existsSync(filePath)) {
        ctx.response.type = mime.getType(filePath);
        ctx.response.body = fs.readFileSync()
      } else {
        ctx.response.status = 404;
      }
    } else {
      await next();
    }
  }
}

module.exports = staticFiles;