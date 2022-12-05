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
    moment("12-05-22 11:00 AM").format("dddd, MMMM Do, YYYY, h:mm:ss A")
  );
}

function colorTime() {
  let now = moment("12-05-22 11:00 AM").startOf("hour");
  let today = moment().startOf("day");

  timeArray.forEach((element) => {
    if (today.add(element.id, "h").isBefore(now)) {
      element.children[1].className = "past";
    } else if (today.add(element.id, "h").isAfter(now)) {
      element.children[1].className = "future";
    } else {
      element.children[1].className = "present";
    }
  });
}

init();
