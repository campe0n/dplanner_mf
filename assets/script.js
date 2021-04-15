var currentDay = $("#currentDay");
var btn = $(".saveBtn");
var timeBlocks = $(".time-block")
var input1 = $("#1");
var input2 = $("#2");
var input3 = $("#3");
var input4 = $("#4");
var input5 = $("#5");
var input6 = $("#6");
var input7 = $("#7");
var input8 = $("#8");
var input9 = $("#9");

$('#currentDay').text(dayjs().format('MMMM Do, YYYY'));

btn.on('click', function(event) {
    event.preventDefault();

    var schedule = {
        i1: input1.val(),
        i2: input2.val(),
        i3: input3.val(),
        i4: input4.val(),
        i5: input5.val(),
        i6: input6.val(),
        i7: input7.val(),
        i8: input8.val(),
        i9: input9.val(),
    };

    localStorage.setItem("event", JSON.stringify(schedule));
    renderLastEvent();
});

function renderLastEvent() {
    var lastEvent = JSON.parse(localStorage.getItem("event"));
    if (lastEvent !== null) 
        $(".time-block").text(input1.val());
    }
