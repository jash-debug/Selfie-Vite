import "./style.css";
import { getVideo, drawVideo } from "./src/camera";

(async function run() {
  const camera = document.getElementById("camera");
  const canvas = document.querySelector("canvas");
  const video = await getVideo();

  camera.addEventListener("click", () => {
    drawVideo(video, canvas);
  });
})();
