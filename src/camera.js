export async function getVideo() {
  const avStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  const video = document.createElement("video");
  video.srcObject = avStream;
  await video.play();
  return video;
}

export function drawVideo(video, canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0); // (x, y)
}
