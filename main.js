//asi es como pedimos las clases app y BrowserWindow de la libreria de Electron
//Funciona como el import en Java
const {app, BrowserWindow} = require('electron');

function createWindow(){
    const ventana = new BrowserWindow({
        width: 300,
        height: 400,

        //este archivo no tiene acceso a Node por el momento
        //esta es la forma mas sencilla mas no la manera correcta de integrar Node
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
            //los valores anteriores vienen al reves por defecto por seguridad
            //para que no haya posibilidad de tener acceso a node en los archivos js
            //ya que en los paquetes de Node hay mas accesos y utilidades que los de js
        }

    });
    ventana.loadFile('index.html')
}

app.whenReady().then(createWindow)

