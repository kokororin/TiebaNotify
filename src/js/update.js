//软件版本更新提示
var manifest = chrome.runtime.getManifest();
var previousVersion = localStorage.getItem("version");
if (previousVersion == "" || previousVersion != manifest.version) {
    var opt = {
        type: "basic",
        title: "更新",
        message: manifest.version + "版本啦～\n此次更新修复BUG~",
        iconUrl: "imgs/logo-128.png"
    }
    showNotification(opt);
    localStorage.setItem("version", manifest.version);
}