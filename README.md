Mon, September 30, 2024

---

```bash
npm init
npm install electron --save-dev
npm run start

npm install --save-dev @electron-forge/cli
npx electron-forge import
npm run make
```

---

# Follwing Along the Tutorial in Electron Docs

- Renderer processes (or renderers for short) are responsible for displaying graphical content.
- inter-process communication (IPC)
- Electron's main process is a `Node.js environment that has full operating system access.`
- Renderer processes run web pages and do not run Node.js by default for security reasons.
- To bridge Electron's different process types together, we will need to use a special script called a preload.
- From **Electron 20** onwards, preload scripts are sandboxed by default and no longer have access to a full Node.js environment.

### Communicating between processes

- Electron's main and renderer process have distinct responsibilities and are not interchangeable. This means it is not possible to access the Node.js APIs directly from the renderer process, nor the HTML Document Object Model (DOM) from the main process.

The solution for this problem is to use Electron's ipcMain and ipcRenderer modules for inter-process communication (IPC). To send a message from your web page to the main process
