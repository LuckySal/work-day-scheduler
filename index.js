let timeArray = $(".time-block").toArray();

let now = moment().startOf("hour");

function init() {
  console.log(now);
  timeArray.forEach((element) => {
    if (moment().add(element.id).isBefore(now)) {
      console.log("future");
      element.children[1].className = "future";
    } else if (moment().add(element.id).isAfter(now)) {
      console.log("past");
      element.children[1].className = "past";
    } else {
      console.log("present");
      element.children[1].className = "present";
    }
  });
}

init();
