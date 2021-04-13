var currentDay = $("#currentDay");
var timeBlock = $(".time-block");

var schedule = {
    9: "",
    10: "",
    11: "",
    12: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
}

$("#currentDay").text(dayjs().format("MMM Do, YYYY"));