const { contextBridge, ipcRenderer } = require("electron");
const loudness = require("loudness");

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // we can also expose variables, not just functions
  ping: () => ipcRenderer.invoke("ping"),
});

// loudness package
contextBridge.exposeInMainWorld("loudness", {
  getVol: () => loudness.getVolume(),
  getMuted: () => loudness.getMuted(),
  setMuted: () => loudness.setMuted(),
});
