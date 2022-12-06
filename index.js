// Temporary
const currentTime = "2022-12-05T11:45:21";
let timeElements = $(".time-block");

function init() {
  // Set the current time and keep it updated
  setTime();
  colorTime();

  setInterval(setTime, 1000);
  setInterval(colorTime, 1000);

  getLocal();
}

function setTime() {
  $("#currentDay").text(
    moment(currentTime).format("dddd, MMMM Do, YYYY, h:mm:ss A")
  );
}

function colorTime() {
  let now = moment(currentTime).startOf("hour");

  timeElements.each((index, element) => {
    let hour = moment(currentTime).startOf("date").add(element.id, "h");
    if (hour.isBefore(now)) {
      element.children[1].className = "past";
    } else if (hour.isAfter(now)) {
      element.children[1].className = "future";
    } else {
      element.children[1].className = "present";
    }
  });
}

function getLocal() {
  timeElements.each((index, element) => {
    element.children[1].value = localStorage.getItem(element.id);
  });
}

function handleSaveTimeblock(event) {
  let time = event.target.parentElement.parentElement.id;
  let text = event.target.parentElement.parentElement.children[1].value;
  localStorage.setItem(time, text);
  getLocal();
}

init();

$(".time-block").on("click", ".fa-save", handleSaveTimeblock);
