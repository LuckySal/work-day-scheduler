// Temporary
const currentTime = "2022-12-05T11:45:21";
let timeArray = $(".time-block").toArray();

function init() {
  // Set the current time and keep it updated
  setTime();
  colorTime();

  setInterval(setTime, 1000);
  // setInterval(colorTime, 1000);
}

function setTime() {
  $("#currentDay").text(
    moment(currentTime).format("dddd, MMMM Do, YYYY, h:mm:ss A")
  );
}

function colorTime() {
  let now = moment(currentTime).startOf("hour");

  timeArray.forEach((element) => {
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

init();
