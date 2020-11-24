const remote_v = require("electron").remote;

var minimize_v = document.getElementById("minimize");
var maximize_v = document.getElementById("maximize");
var quit_v = document.getElementById("quit");

minimize_v.addEventListener("click",minimizeApp);
maximize_v.addEventListener("click",maximizeApp);
quit_v.addEventListener("click",quitApp);

function minimizeApp(){
  remote_v.BrowserWindow.getFocusedWindow().minimize();
}

function maximizeApp(){
  remote_v.BrowserWindow.getFocusedWindow().maximize();
}


function quitApp(){
  remote_v.getCurrentWindow().close();
}