const information = document.getElementById("info");
const muteBtn = document.getElementById("mute-btn");
const stat = document.getElementById("status");

information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // prints out 'pong' on client console
};

func();

async function getVol() {
  const vol = await loudness.getVol();
  console.log(vol);
}

muteBtn.addEventListener("click", () => {
  getVol();
});
