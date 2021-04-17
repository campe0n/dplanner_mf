var currentDay = $("#currentDay");
var container = $(".container");
var curentHour = dayjs().hour();
$('#currentDay').text(dayjs().format('MMMM Do, YYYY'));
renderLastEvent();
function saveEvent(event) {
    event.preventDefault();
    var schedule = {
        nineam: $("#1").val(),
        tenam: $("#2").val(),
        elevenam: $("#3").val(),
        twelveam: $("#4").val(),
        onepm: $("#5").val(),
        twopm: $("#6").val(),
        threepm: $("#7").val(),
        fourpm: $("#8").val(),
        fivepm: $("#9").val(),
    };
    localStorage.setItem("event", JSON.stringify(schedule));
    renderLastEvent();
};

function renderLastEvent() {
    var lastEvent = JSON.parse(localStorage.getItem("event"));
    if (lastEvent !== null) {
        $("#1").text(lastEvent.nineam);
    }
    console.log(lastEvent.nineam)
}

