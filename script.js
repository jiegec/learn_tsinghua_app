const { ipcRenderer } = require('electron')
let win = require('electron').remote.getCurrentWindow()
ipcRenderer.send('transcript-begin', '');

ipcRenderer.on('transcript', (event, arg) => {
    console.log(arg)
    document.getElementById('transcript').innerText = arg;
});

let el = document.getElementById('body');
el.addEventListener('mouseenter', () => {
    win.setIgnoreMouseEvents(true, { forward: true })
});
el.addEventListener('mouseleave', () => {
    win.setIgnoreMouseEvents(false)
});