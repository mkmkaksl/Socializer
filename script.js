const body = document.querySelector("body");
const videos = document.querySelector(".videos");

function createVideo() {
  const videoHolder = createElement("div", ["video-holder"]);
  const videoData = createElement("div", ["video-data"]);
  const videoStats = createElement("div", ["video-stats"]);

  videoData.innerHTML = `<video class="video" controls loop>
<source src="./testing_vid.mp4">
</video>`;

  videoStats.innerHTML = `<p class="description">Amazing Video. Make sure to SUBSCRIBE!!</p>
<p>Likes: </p>
<p>Shares: </p>
<p>Comments...</p>
<div class="comments">


</div>`;

  videoHolder.append(videoData);
  videoHolder.append(videoStats);

  videos.append(videoHolder);
}

function createElement(element, classes) {
  const newEl = document.createElement(element);
  for (let i = 0; i < classes.length; i++) {
    newEl.classList.add(classes[i]);
  }
  return newEl;
}

createVideo();
createVideo();
createVideo();
