// time variables
var currentDay = $("#currentDay");
var curentHour = dayjs().hour();
$('#currentDay').text(dayjs().format('MMMM Do, YYYY'));

//Save
$('button').on('click', function(event){
    event.preventDefault();
    $('input[type="text"]').each(function(){
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
        })
    })

function renderLastEvent() {
    var nineInput = localStorage.getItem("9");
    var tenInput = localStorage.getItem("10");
    var elevenInput = localStorage.getItem("11");
    var twelveInput = localStorage.getItem("12");
    var oneInput = localStorage.getItem("13");
    var twoInput = localStorage.getItem("14");
    var threeInput = localStorage.getItem("15");
    var fourInput = localStorage.getItem("16");
    var fiveInput = localStorage.getItem("17");

    $("#9").text(nineInput);
    $("#10").text(tenInput);
    $("#11").text(elevenInput);
    $("#12").text(twelveInput);
    $("#1").text(oneInput);
    $("#2").text(twoInput);
    $("#3").text(threeInput);
    $("#4").text(fourInput);
    $("#5").text(fiveInput);

}
//call renderlastEvent (init)
renderLastEvent();