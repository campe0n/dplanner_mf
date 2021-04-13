var currentDay = $("#currentDay");
var btn = $(".saveBtn");

$("#currentDay").text(dayjs().format("MMM Do, YYYY"));
var currentHour = dayjs().hour();

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
};


btn.on('click', function(event) {
    event.preventDefault();

    var inputText = $("#1").val();
    localStorage.setItem("event", inputText);
    alert(inputText);
});
