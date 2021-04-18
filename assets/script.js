// time variables
var currentDay = $("#currentDay");
var currentHour = dayjs().hour();
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
    
    $('#9').val(nineInput);
    $('#10').val(tenInput);
    $('#11').val(elevenInput);
    $('#12').val(twelveInput);
    $('#13').val(oneInput);
    $('#14').val(twoInput);
    $('#15').val(threeInput);
    $('#16').val(fourInput);
    $('#17').val(fiveInput);
}

//call functions(init)
renderLastEvent();
