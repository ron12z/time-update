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
}, 500)();
