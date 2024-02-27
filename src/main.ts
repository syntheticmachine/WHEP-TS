import "./style.css";
import { WebRTCPlayer } from "@eyevinn/webrtc-player";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div class="video-container">
      <h1>WebRTC Player (WHEP)</h1>
      <div class="video-input">
        <input type="text" id="video-url" value="https://customer-ltli1jjvv8lsaghz.cloudflarestream.com/740ecfa0e6a0d5cdf68f507e257da420/webRTC/play">
        <button id="load-video">Load Video</button>
      </div>
      <video autoplay muted controls playsinline poster="https://hatchingbigideas.com/certsoft/wp-content/uploads/2024/02/video-poster.jpg"></video>
    </div>
  </div>
`;

// const channelUrl =
//   "https://customer-ltli1jjvv8lsaghz.cloudflarestream.com/740ecfa0e6a0d5cdf68f507e257da420/webRTC/play";
const video = document.querySelector("video");
const player = new WebRTCPlayer({
  video: video!,
  type: "whep",
  statsTypeFilter: "^candidate-*|^inbound-rtp",
});
document.getElementById("load-video")!.addEventListener("click", async () => {
  await player.load(
    new URL((document.getElementById("video-url") as HTMLInputElement).value)
  );
  player.unmute();
});
