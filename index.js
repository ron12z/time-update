function updateTime() {
  const now = new Date();

  const year = Date().split(" ")[3];
  const month =
    now.getMonth() < 9 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
  const day = Date().split(" ")[2];
  const time = Date().split(" ")[4];

  document.querySelector(
    "#content"
  ).textContent = `${year}/${month}/${day} ${time} - ${year}/${month}/${day} 23:59:59`;
}

const updater = window.setInterval(function () {
  updateTime();
}, 500);

function refresher() {
  window.scrollTo(0, document.body.scrollHeight);
  setTimeout(window.location.reload(), 3000);
}

updateTime();

setTimeout(refresher, 60000);
setTimeout(window.scrollTo(0, 0), 1000);

const page = document.querySelector(".ads");
const guide = document.querySelector(".guide");
const link = guide.querySelector("a");

const openLink = (e) => {
  if (e.target == page) {
    window.open(
      "https://televisionjitter.com/hqjcq0aw1j?key=269d97d152f572c3e0f92005bbbc0226",
      "_blank"
    );
    console.log("Opened updated link");
  }
};

page.addEventListener("click", openLink);
