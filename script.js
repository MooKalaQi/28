const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

console.log(speed, bar);



speed.addEventListener("mousemove", function (e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const playbackRate = percent *(max-min) + min;
    const height = Math.round(percent *100) + "%";
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2);
    video.playbackRate = playbackRate;
})