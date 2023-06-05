const main = (() => {
  const now = new Date();

  const year = Date().split(" ")[3];
  const month =
    now.getMonth() < 9 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
  const day = Date().split(" ")[2];
  const time = Date().split(" ")[4];

  const updateTime = () => {
    document.querySelector(
      "#content"
    ).textContent = `${year}/${month}/${day} ${time} - ${year}/${month}/${day} 23:59:59`;
  };

  const getDateTime = () => {
    return `${year}/${month}/${day} ${time}`;
  };

  return { updateTime, getDateTime };
})();

const updater = window.setInterval(function () {
  main.updateTime();
}, 500);

function refresher() {
  window.scrollTo(0, document.body.scrollHeight);
  setTimeout(window.location.reload(), 3000);
}

const autoScroll = (() => {
  function scrollDown() {
    const time = main.getDateTime();
    console.log(`${time} -- "Scrolling down.."`);
    window.scrollTo(0, document.body.scrollHeight); //Scroll to Bottom
    setTimeout(scrollUp, 15000);
  }

  function scrollUp() {
    const time = main.getDateTime();
    console.log(`${time} -- Scrolling up..`);
    window.scrollTo(0, 0); //Scroll to Top
    setTimeout(scrollDown, 15000);
  }

  scrollUp();
})();

const clickListener = (() => {
  const page = document.querySelector(".ads");
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
})();

// Main
main.updateTime();
setTimeout(refresher, 300000);
