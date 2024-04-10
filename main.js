const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'nitroterm',
        backgroundColor: '#080016',
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#080016',
            symbolColor: '#ffffff'
        }
    })

    win.setMenu(null)
    win.loadFile('index.html')
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})